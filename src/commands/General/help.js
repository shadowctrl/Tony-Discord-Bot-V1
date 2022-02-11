const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    category: "General",
    aliases: [ "h" ],
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
            console.log(`${user} used HELP Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }

  const embed = new MessageEmbed()
    .setTitle(`${client.user.username} Help`)
    .setDescription(` Hello **<@${message.author.id}>**, I am <@${client.user.id}>.  \n\nA Discord Music Bot With Many Awesome Features, \nSupport Many Sources \n\n\`🎵\`•Music\n\`ℹ️\`•information\n\`⚙️\`•Config\n\`🎮\`•Games\n\n *Choose an category below button to see commands* \n *use \`helpmore\` to view more commands*\n`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.embedColor)
    .setTimestamp()
    .setFooter({text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                
    let but1 = new MessageButton().setCustomId("home").setLabel("Home").setStyle("SUCCESS")
  
    let but2 = new MessageButton().setCustomId("music").setLabel("Music").setStyle("PRIMARY")
  
    let but3 = new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY");

    let but4 = new MessageButton().setCustomId("config").setLabel("Config").setStyle("PRIMARY");

    //let but5 = new MessageButton().setCustomId("anime").setLabel("Anime").setStyle("PRIMARY");

    let but5 = new MessageButton().setCustomId("games").setLabel("Games").setStyle("PRIMARY");


     let _commands;
     let editEmbed = new MessageEmbed();
     
    const m = await message.reply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] });

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
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true), but5.setDisabled(true))] }).catch(() => {});
    });
    collector.on('collect', async (b) => {
       if(!b.deferred) await b.deferUpdate()
        if(b.customId === "home") {
           if(!m) return;
           return await m.edit({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] })
        }
        if(b.customId === "music") {
         _commands = client.commands.filter((x) => x.category && x.category === "Music").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Music Commands").setFooter(`Total ${_commands.length} music commands.`);
           if(!m) return;
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] })
        }
         if(b.customId == "general") {
         _commands = client.commands.filter((x) => x.category && x.category === "General").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("General Commands").setFooter(`Total ${_commands.length} General commands.`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] })
         }
         if(b.customId == "config") {
         _commands = client.commands.filter((x) => x.category && x.category === "Config").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Config Commands").setFooter(`Total ${_commands.length} Config commands.`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] })
        }
        if(b.customId == "games") {
          _commands = client.commands.filter((x) => x.category && x.category === "Games").map((x) => `\`${x.name}\``);
              editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Anime Commands").setFooter(`Total ${_commands.length} Games commands.`)
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4, but5)] })
         }
     });
   }
 }
