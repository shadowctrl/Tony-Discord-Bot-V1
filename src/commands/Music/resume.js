const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "resume",
    aliases: ["r"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
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
            console.log(`${user} used RESUME Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
  
		const player = client.manager.get(message.guild.id);
        const song = player.queue.current;

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojiresume = client.emoji.resume;

        if (!player.paused) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`${emojiresume} The player is already **resumed**.`)
                .setTimestamp()
          return message.reply({embeds: [thing]});
        }

        player.pause(false);

        let thing = new MessageEmbed()
            .setDescription(`${emojiresume} **Resumed**\n[${song.title}](${song.uri})`)
            .setColor(client.embedColor)
            .setTimestamp()
        return message.reply({embeds: [thing]});
	
    }
};