const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { Anime } = require('djs-anime');

module.exports = {
    name: "cringe",
    category: "Anime",
    aliases: [ "cringes","bruh" ],
    description: "Sends random cringe anime pics",
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
            console.log(`${user} used CRINGE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        const gif = new Anime({
            message: message,
            embedFooter: "Cringeeee",
            embedTitle: "Cringe",
            embedColor: "#7122E3",
          })
          gif.cringe().catch(err => console.log(err));

      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`CRINGE\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
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