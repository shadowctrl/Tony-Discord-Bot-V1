const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "shuffle",
    category: "Music",
    description: "Shuffle queue",
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
            console.log(`${user} used SHUFFLE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
    
		const player = client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }
        player.queue.shuffle();
        
        const emojishuffle = client.emoji.shuffle;

        let thing = new MessageEmbed()
            .setDescription(`${emojishuffle} Shuffled the queue`)
            .setColor(client.embedColor)
            .setTimestamp()
        return message.reply({embeds: [thing]}).catch(error => client.logger.log(error, "error"));
	
    }
};