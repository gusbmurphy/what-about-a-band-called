import md5 from "md5";
import * as faker from "faker";
import mongoose from "mongoose";

import { Band, BandModification, User } from "../server/models";
import { localDbUrl } from "../server/server";

let numOfUsers = 50;
let numOfBands = 200;
let numOfModifications = 500;

mongoose.connect(localDbUrl);

(async function loadDummyDb() {
  let usersInfo = [];
  for (let i = 0; i < numOfUsers; i++) {
    let newUser = new User({
      name: faker.internet.userName(),
      passwordHash: md5(faker.internet.password),
      bandsModified: [],
    });
    usersInfo.push({ id: newUser._id, name: newUser.name });
    await newUser.save();
  }

  let bandIds = [];
  for (let i = 0; i < numOfBands; i++) {
    let randomName = faker.random.word();
    let extraWordsInName = Math.floor(Math.random() * 5);
    for (let j = 0; j < extraWordsInName; j++) {
      randomName.concat(" " + faker.random.word());
    }

    let randomUser = usersInfo[Math.floor(Math.random() * numOfUsers)];
    let newBand = new Band({
      name: randomName,
      ownerId: randomUser.id,
      ownerName: randomUser.name,
      score: 0,
      createdOn: faker.date.between(new Date(2018, 11, 17), new Date()),
    });
    bandIds.push(newBand._id);
    await newBand.save();
  }

  for (let i = 0; i < numOfModifications; i++) {
    let randomUser = usersInfo[Math.floor(Math.random() * numOfUsers)];
    let randomBandId = bandIds[Math.floor(Math.random() * numOfBands)];

    while (
      await BandModification.exists({
        ownerId: randomUser.id,
        bandId: randomBandId,
      })
    ) {
      randomBandId = bandIds[Math.floor(Math.random() * numOfBands)];
    }

    let modificationValue = Math.random() < 0.5 ? -1 : 1;

    let newBandModification = new BandModification({
      ownerId: randomUser.id,
      bandId: randomBandId,
      value: modificationValue,
    });

    await newBandModification.save();
    await Band.findOneAndUpdate(
      { _id: randomBandId },
      { $inc: { score: modificationValue } }
    );
    await User.findByIdAndUpdate(randomUser.id, {
      $push: {
        bandsModified: { targetBandId: randomBandId, value: modificationValue },
      },
    });
  }
})();
