const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pause",
    category: "Music",
    description: "Pause the currently playing music",
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
            console.log(`${user} used PAUSE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
    
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojipause = client.emoji.pause;

        if (player.paused) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`${emojipause} The player is already paused.`)
                .setTimestamp()
                return message.reply({embeds: [thing]});
        }

        player.pause(true);

        const song = player.queue.current;

        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
            .setDescription(`${emojipause} **Paused**\n[${song.title}](${song.uri})`)
          return message.reply({embeds: [thing]});
	
    }
};
