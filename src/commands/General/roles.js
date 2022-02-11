const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "roles",
    category: "General",
    aliases: [ "role"],
    description: "Displays all Roles",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    nsfw: false,
    cooldown: 10000,
    execute: async (message, args, client, prefix) => {
      try{
        try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used ROLES Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        let roleCount = message.guild.roles.cache.map(x => "<@&" + x.id + ">").join(" ")

        const embed = new MessageEmbed();
        embed.setColor('#7122E3');
        embed.setTitle(`${message.guild.name} Roles`);
        embed.setDescription(roleCount)
        //embed.setImage(`${user.displayAvatarURL()}?size=1024`);

        return message.reply({embeds: [embed]});
      
      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`ROLES\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
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
