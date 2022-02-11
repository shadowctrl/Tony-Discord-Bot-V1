const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "247",
  aliases: ["24h", "24/7", "24*7"],
  category: "Music",
  description: "24/7 in voice channel",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  nsfw: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  cooldown: 5000,
  execute: async (message, args, client, prefix) => {
    try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used 24/7 Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }


    const player = message.client.manager.players.get(message.guild.id);
    if (player.twentyFourSeven) {
      player.twentyFourSeven = false;
      const embed = new MessageEmbed()
       .setColor(client.embedColor)
       .setDescription(`24/7 mode is now off.`)
      return message.reply({embeds: [embed]});
    }
    else {
      player.twentyFourSeven = true;
      const embed = new MessageEmbed()
       .setColor(client.embedColor)
       .setDescription(`24/7 mode is now on.`)
      
      return message.reply({embeds: [embed]});
    }
  }
};