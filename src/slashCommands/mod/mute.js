const { MessageEmbed, Permissions } = require('discord.js');
const { read } = require('fs');
const ms = require('ms');
const { format } = require('path/posix');

module.exports = {
    name: "mute",
    description: "Mute ",
    //permission=["MANAGE_MESSAGES"],
    options: [
        {
            name:"member",
            description:"specify a member",
            required:true,
            type:"USER"
        },
        {
            name: 'duration',
            description: "duration of mute in Minute",
            required: true,
            type:"NUMBER",
        },
        {
            name: 'format',
            description: "duration format",
            required:true,
            type:"NUMBER",
            choices: [
                {
                    name: "seconds",
                    value:1
                },
                {
                    name: "minute",
                    value: 2,
                },
                {
                    name: "hour",
                    value: 3,
                },
                {
                    name: "day",
                    value: 4,
                }
            ]
        },
        
        
        {
            name: 'reason',
            description: "reason for mute",
            type:"STRING"
        }
    ],


    async run(client,interaction)

    { 
        if (!interaction.member.permissions.has("MANAGE_MESSAGES"))
        {
            return await interaction.reply("You can't use this command");
        }

        const member = interaction.options.getUser('member');
        
        const guild_member=interaction.guild.members.cache.get(member.id);
        
        const duration = interaction.options.getNumber('duration');
        
        const format = interaction.options.getNumber('format');

        var reason = interaction.options.getString('reason');

        const embed_mp = new MessageEmbed()
            .setColor("DARK_RED")
            .setDescription(`**Make sure my role is top in server roles**. You cannot timeout ${member}`)
            .setTimestamp();
 
        if (!guild_member.moderatable)
            return interaction.reply({ embeds: [embed_mp]});
            
        
        switch (format)
        {
            case 1:
                var ms = duration * 1000;
                break;
            case 2:
                var ms = duration * 60000 ;    
                break;
            case 3:
                var ms = duration * 60000 * 60;
                break;
            case 4:
                var ms = duration * 60000 * 60 * 24;
                break;
            default:
                var ms =duration * 1000;
                break;
        }       

       
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`${member} has been timedout` )
            .addField("By",`${interaction.member}`,true)
            .addField("Reason",`${reason}`,true)
            .setFooter({text:"https://cutt.ly/tonydiscordbot"})
            .setURL("https://cutt.ly/tonydiscordbot")
            .setTimestamp();

            if (ms)
            {   
                if(!reason) reason = "Not Specified";
                await interaction.deferReply();
                guild_member.timeout(ms,reason);
                await interaction.editReply({embeds: [embed]});
            } 
            else{
                await interaction.deferReply();
                interaction.editReply("Kindly Specify a valid time");
            }

    }


}