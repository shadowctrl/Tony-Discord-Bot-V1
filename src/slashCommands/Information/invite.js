const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
      try {
            const date = new Date();
            let user = interaction.member.user.username;
            console.log(`${user} used INVITE Slash Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        await interaction.deferReply({
            ephemeral: false
        });

           
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
            .setColor('#303236')
            .addField('**Invite Tony to your server**', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=1514512313847&scope=bot%20applications.commands)`, true)
           await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}
