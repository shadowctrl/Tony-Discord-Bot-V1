const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();
const keep_alive = require('./keep_alive.js')
client.connect()

module.exports = client; 
