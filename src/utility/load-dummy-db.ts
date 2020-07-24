import md5 from "md5";
import * as faker from "faker";
import mongoose from "mongoose";

import { Band, BandModification, User } from "../server/models";
import { localDbUrl } from "../server/server";

const numOfUsers = 50;
const numOfBands = 200;
const numOfModifications = 500;

mongoose.connect(localDbUrl);

(async function loadDummyDb() {
  const usersInfo: { id: mongoose.Types.ObjectId; name: string }[] = [];
  for (let i = 0; i < numOfUsers; i++) {
    const name = faker.internet.userName();
    const newUser = new User({
      name,
      passwordHash: md5(faker.internet.password()),
      email: faker.internet.email(),
      bandsModified: [],
    });
    usersInfo.push({ id: newUser._id, name: newUser.name });
    await newUser.save();
  }

  const bandIds: mongoose.Types.ObjectId[] = [];
  for (let i = 0; i < numOfBands; i++) {
    const randomName = faker.random.word();
    const extraWordsInName = Math.floor(Math.random() * 5);
    for (let j = 0; j < extraWordsInName; j++) {
      randomName.concat(" " + faker.random.word());
    }

    const randomUser = usersInfo[Math.floor(Math.random() * numOfUsers)];
    const newBand = new Band({
      name: randomName,
      ownerId: randomUser.id,
      ownerName: randomUser.name,
      score: 0,
      createdOn: faker.date.between(new Date(2018, 11, 17), new Date()),
    });
    bandIds.push(newBand._id);
    await newBand.save();
    // await User.findByIdAndUpdate(randomUser.id, {
    //   $push: { ownBands: newBand._id },
    // });
  }

  for (let i = 0; i < numOfModifications; i++) {
    const randomUser = usersInfo[Math.floor(Math.random() * numOfUsers)];
    let randomBandId = bandIds[Math.floor(Math.random() * numOfBands)];

    while (
      await BandModification.exists({
        ownerId: randomUser.id,
        bandId: randomBandId,
      })
    ) {
      randomBandId = bandIds[Math.floor(Math.random() * numOfBands)];
    }

    const modificationValue = Math.random() < 0.5 ? -1 : 1;

    const newBandModification = new BandModification({
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
