const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { GTF } = require('djs-games');

module.exports = {
    name: "flag",
    category: "Games",
    aliases: [ "guesstheflag","flagguess" ],
    description: "Starts guess the flag game",
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
            console.log(`${user} used FLAG Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        const game = new GTF({
            message: message,
            token: 'MTY0MjMzODQ2Mw.eOYPjVnKqez7WpGa5nmf18hIOl6txiiS.39eb602bf789f2d7', // *Required!! Get Your Api Token at https://dagpi.xyz/dashboard
            stopCommand: 'stop', // *Required!!
            winFooter: 'You Win!', // Set The Footer of the win message
            winColor: 'GREEN', // The embed color of the win message
            loseFooter: 'You Lose!', // Set The Footer of the lose message
            loseColor: 'RED', // The embed color of the lose message
            questionFooter: 'Guess the Flag!', // Set The Footer of the question message
            questionColor: 'BLUE', // The embed color of the question message
            winMessage: 'You Win!', // Set The Win Message
            loseMessage: 'You Lose!', // Set The Lose Message
            maxAttempts: 5, 
            wrongGuess: 'Wrong Guess!', // Set The Wrong Guess Message
            })
            game.start().catch(err => console.log(err));

      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`GUESSTHEFLAG\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
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