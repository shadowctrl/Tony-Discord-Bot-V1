const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    category: "General",
    aliases: [ "av","avatars"],
    description: "Displays avatar PNG/GIF",
    args: false,
    usage: "<TAG || Displays Your Profile>",
    permission: [],
    owner: false,
    nsfw: false,
    cooldown: 10000,
    execute: async (message, args, client, prefix) => {
      try{
        try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used AVATAR Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
        
        
        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .setColor("#7122E3")
                .setImage(message.author.displayAvatarURL({ format: 'png',size: 512 }));
            return message.reply({embeds: [embed]});
        }

        const mention = message.mentions.members.first();
        const Embed = new Discord.MessageEmbed()
            .setTitle(message.mentions.users.first().username)
            .setColor("#7122E3")
            .setImage(mention.user.displayAvatarURL({ format: 'png',size: 512 }));
        return message.reply({embeds: [Embed]});
      
      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`AVATAR\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
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

        


