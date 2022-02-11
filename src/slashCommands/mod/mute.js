const { MessageEmbed } = require('discord.js');
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
        const member = interaction.options.getUser('member');
        const guild_member=interaction.guild.members.cache.get(member.id);
        
        const duration = interaction.options.getNumber('duration');
        const format = interaction.options.getNumber('format');
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
        }       

        var reason = interaction.options.getString('reason');
       
        const embed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`User ${member} has been timedout` )
            .setTimestamp();

            if (ms)
            {   
                if(!reason) reason = "Not Specified";

                guild_member.timeout(ms,reason);
                await interaction.reply({embeds: [embed]});
            } 
            else{
                interaction.reply("Kindly Specify a valid time");
            }

    }


}