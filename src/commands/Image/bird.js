const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
    name: "bird",
    category: "Image",
    aliases: [ "birds" ],
    description: "Sends random cute bird pics",
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
            console.log(`${user} used BIRD Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        const res = await fetch('http://shibe.online/api/birds');
        const img = (await res.json())[0];
        const embed = new MessageEmbed()
          .setTitle("Birds :heart_eyes:")
          .setColor(client.embedColor)
          .setTimestamp()
          .setImage(img)
        return message.channel.send({ embeds: [embed] }).catch(err => console.log(err));

      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`BIRD\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
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