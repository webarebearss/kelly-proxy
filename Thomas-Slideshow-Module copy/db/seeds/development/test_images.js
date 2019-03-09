const faker = require('faker');

exports.seed = function(knex) {
  return knex('images').del()
    .then(function () {
      return knex('images').insert(sampleImgSet(100));
    });
};

function sampleImgSet(numOfListings) {
  let imgArr = [];
  let listingId = 1;
  function randomImgQuantity() {
    return 6 + Math.floor(25 * Math.random())
  }
  while (listingId <= numOfListings) {
    for (let i = 0; i < randomImgQuantity(); i++) {
      imgArr.push(
        {
          imgUrl: faker.image.image(),
          listingId,
          imgOrder: i,
          description: faker.fake("{{random.words}}, {{random.words}}, {{random.words}}")
        }
      )
    }
    listingId++;
  }
  return imgArr;
}