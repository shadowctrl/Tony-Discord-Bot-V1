const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "helpmore",
    category: "General",
    aliases: [ "hm" ],
    description: "Return all commands, or one specific command",
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
            console.log(`${user} used HELPMORE Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }

  const embed = new MessageEmbed()
    .setTitle(`${client.user.username} Help`)
    .setDescription(` Hello **<@${message.author.id}>**, I am <@${client.user.id}>.  \n\n**\`helpmore\` command!\n`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.embedColor)
    .setTimestamp()
    .setFooter({text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                
    let but1 = new MessageButton().setCustomId("home").setLabel("Home").setStyle("SUCCESS")
  
    let but2 = new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY");

    let but3 = new MessageButton().setCustomId("anime").setLabel("Anime").setStyle("PRIMARY");

    let but4 = new MessageButton().setCustomId("image").setLabel("Image").setStyle("PRIMARY");




     let _commands;
     let editEmbed = new MessageEmbed();
     
    const m = await message.reply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] });

    const collector = m.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === message.author.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
		 if(!m) return;
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true))] }).catch(() => {});
    });
    collector.on('collect', async (b) => {
       if(!b.deferred) await b.deferUpdate()
        if(b.customId === "home") {
           if(!m) return;
           return await m.edit({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
         if(b.customId == "general") {
          _commands = client.commands.filter((x) => x.category && x.category === "General").map((x) => `\`${x.name}\``);
          editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("General Commands").setFooter(`Total ${_commands.length} General commands.`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        if(b.customId == "anime") {
          _commands = client.commands.filter((x) => x.category && x.category === "Anime").map((x) => `\`${x.name}\``);
          editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Anime Commands").setFooter(`Total ${_commands.length} Anime commands.`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        if(b.customId == "image") {
          _commands = client.commands.filter((x) => x.category && x.category === "Image").map((x) => `\`${x.name}\``);
          editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Image Commands").setFooter(`Total ${_commands.length} Image commands.`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        
     });
   }
 }