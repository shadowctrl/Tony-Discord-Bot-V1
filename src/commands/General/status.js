const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "General",
    aliases: [ "stats" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    nsfw: false,
    cooldown: 10000,
    execute: async (message, args, client, prefix) => {
      try {
            const date = new Date();
            let user = message.author.username;
            console.log(`${user} used STATUS Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
        const embed = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setThumbnail(message.client.user.displayAvatarURL())
            .setDescription(`${about} **Status**
**= STATISTICS =**
**• Servers** : ${scount}
**• Channels** : ${ccount}
**• Users** : ${mcount}
**• Discord.js** : v${version}
**• Node** : ${process.version}
**= SYSTEM =**
**• Platfrom** : ${os.type}
**• Uptime** : ${duration1}
**• CPU** :
> **• Cores** : ${cpu.cores}
> **• Model** : ${os.cpus()[0].model} 
> **• Speed** : ${os.cpus()[0].speed} MHz
**• MEMORY** :
> **• RAM** : ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mb
`);
         message.reply({embeds: [embed]});
    }
	}