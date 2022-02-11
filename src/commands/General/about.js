const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "General",
    aliases: [ "botinfo","botstats" ],
    description: "See description about Tony Bot",
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
            console.log(`${user} used ABOUT Command TIME: ${date.toLocaleString()}`);
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

        let ram = ((process.memoryUsage().heapUsed / 1024 / 1024) + (process.memoryUsage().heapTotal / 1024 / 1024)).toFixed(2);
        const embed = new MessageEmbed();
        embed.setColor('RANDOM');
        embed.setAuthor(
          {
            name: client.user.username,
            icon_url: client.user.displayAvatarURL()
          }
        )
        embed.addFields(
            {
              name: 'Developers',
              value: '```! Murali Anand#5615 & Raghava#4530```',
            },
            {
              name: 'Channels',
              value: `\`\`\`${client.channels.cache.size}\`\`\``,
              inline: true,
            },
            {
              name: 'Users',
              value: `\`\`\`${client.users.cache.size}\`\`\``,
              inline: true,
            },
            {
              name: 'Servers',
              value: `\`\`\`${client.guilds.cache.size}\`\`\``,
              inline: true,
            },
            {
              name: 'RAM usage',
              value: `\`\`\`${ram}MB\`\`\``,
              inline: true,
            },
            {
              name: 'Server OS',
              value: `\`\`\`Kali Linux\`\`\``,
              inline: true,
            },
            {
              name: 'API latency',
              value: `\`\`\`${client.ws.ping} ms\`\`\``,
              inline: true,
            },
                  
        );
        return message.reply({embeds: [embed], components: [row]});
      } catch(err) {
        client.channels.cache.get("939144661627441193").send(`**ERROR!** \n${err}\nCommand \`ABOUT\` \nChannel: \`${message.channel.id} (${message.channel.name})\`\nServer: \`${message.guild.name}\``);
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
