const dbutils = require('../db/dbutils')

describe('database fetch request', () => {

  test('should return 18 images', () => {
    return dbutils.fetchImages(1000).then(images => {
      expect(images).toHaveLength(18);
    })
  })

});