const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { RockPaperScissors } = require('djs-games')

module.exports = {
    name: "rps",
    category: "Games",
    aliases: [ "rockpaperscissor","stonepaperscissor","sps" ],
    description: "Starts guess the rps game",
    args: false,
    usage: "<Tag A Person> || Play With AI",
    permission: [],
    owner: false,
    nsfw: false,
    cooldown: 5000,
    execute: async (message, args, client, prefix) => {
      try{
        try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used RPS Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        const game = new RockPaperScissors({
            message: message,
          })
          game.start().catch(err => console.log(err));

      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`RPS\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
        const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setLabel("Support")
        .setStyle("LINK")
        .setURL("https://discord.gg/eBqcxj3D9b")
      );

        const error = new MessageEmbed()
            .setAuthor({ name:"Uh Oh", iconURL:`${message.author.displayAvatarURL()}`, url: ""})
            .setTitle("Error!")
            .setDescription("The Errror has been notified, kindly do join our discord support server!")
            .setColor("RED")
        return client.channels.cache.get(message.channel.id).send({embeds: [error], components: [row]});
      }
    }
}