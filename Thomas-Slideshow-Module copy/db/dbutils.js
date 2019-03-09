const db = require('./index.js');

module.exports.fetchImages  = function (listingID) {
  return db.from('images').select('*').where('listingId', '=', listingID).orderBy('imgOrder')
}