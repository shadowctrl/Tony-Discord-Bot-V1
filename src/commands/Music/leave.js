const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "leave",
    aliases: ["dc"],
    category: "Music",
    description: "Leave voice channel",
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
            console.log(`${user} used LEAVE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
       
        const player = message.client.manager.get(message.guild.id);

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setDescription(`${emojiLeave} **Leave the voice channel**\nThank you for using ${message.client.user.username}!`)
          return message.reply({embeds: [thing]});
	
    }
};