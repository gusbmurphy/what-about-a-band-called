import faker from "faker";

// TODO: This is one of many places where I wish I just had a "Band" type that was shared throughout all files! Should I just use Flow or TS? Or is there another way?

export function createMockBands(numOfBands) {
  let bands = [];
  for (let i = 0; i < numOfBands; i++) {
    bands.push({
      name: faker.random.words(5),
      ownerId: faker.random.alphaNumeric(10),
      ownerName: faker.internet.userName(),
      score: faker.random.number(10),
      createdOn: faker.date.recent(30),
    });
  }
  return bands;
}
