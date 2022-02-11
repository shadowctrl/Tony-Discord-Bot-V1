const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "General",
    aliases: [ "addme" ],
    description: "invite TONY to your server!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    nsfw: false,
    cooldown: 5000,
   execute: async (message, args, client, prefix) => {
     try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used INVITE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
         
         
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=1514512313847&scope=bot%20applications.commands`),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/eBqcxj3D9b")
			);

          const mainPage = new MessageEmbed()
            .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`})
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setColor('#303236')
            .addField('**Invite TONY to your server**', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=1514512313847&scope=bot%20applications.commands)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
}
