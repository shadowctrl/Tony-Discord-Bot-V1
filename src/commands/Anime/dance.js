const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const anime = require('anime-actions');

module.exports = {
    name: "dance",
    category: "Anime",
    aliases: [ "dancing","dances" ],
    description: "Sends random dancing anime pics",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    nsfw: false,
    cooldown: 5000,
    execute: async (message, args, client, prefix) => {
      try{
        try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used DANCE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        const img = await anime.dance();
        const embed = new MessageEmbed()
          .setTitle("DANCE")
          .setColor(client.embedColor)
          .setTimestamp()
          .setImage(`${img}`)
        return message.channel.send({ embeds: [embed] }).catch(err => console.log(err));

      } catch(err) {
        console.log(err);
      }
    }
}