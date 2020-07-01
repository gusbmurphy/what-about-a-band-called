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
  let userIds = [];
  for (let i = 0; i < numOfUsers; i++) {
    let newUser = new User({
      name: faker.internet.userName(),
      passwordHash: md5(faker.internet.password),
    });
    userIds.push(newUser._id);
    await newUser.save();
  }

  let bandIds = [];
  for (let i = 0; i < numOfBands; i++) {
    let randomName = faker.random.word();
    let extraWordsInName = Math.floor(Math.random() * 5);
    for (let j = 0; j < extraWordsInName; j++) {
      randomName.concat(" " + faker.random.word());
    }

    let randomUserId = userIds[Math.floor(Math.random() * numOfUsers)];
    let newBand = new Band({
      name: randomName,
      ownerId: randomUserId,
      score: 0,
    });
    bandIds.push(newBand._id);
    await newBand.save();
  }

  for (let i = 0; i < numOfModifications; i++) {
    let randomUserId = userIds[Math.floor(Math.random() * numOfUsers)];
    let randomBandId = bandIds[Math.floor(Math.random() * numOfBands)];

    while (
      await BandModification.exists({
        ownerId: randomUserId,
        bandId: randomBandId,
      })
    ) {
      randomBandId = bandIds[Math.floor(Math.random() * numOfBands)];
    }

    let modificationValue = Math.random() < 0.5 ? -1 : 1;

    let newBandModification = new BandModification({
      ownerId: randomUserId,
      bandId: randomBandId,
      value: modificationValue,
    });

    await newBandModification.save();
    await Band.findOneAndUpdate(
      { _id: randomBandId },
      { $inc: { score: modificationValue } }
    );
  }
})();
