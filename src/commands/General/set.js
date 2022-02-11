const { MessageEmbed,MessageButton } = require('discord.js');
const db = require("../../schema/suggest.js")

module.exports={
    name:'set',
    category:"General",
    aliases: [  ],
    description: "sets channel for suggestion",
    usage:"-set suggestion <channel-id> ",
    permission:["ADMINISTRATOR"],
    owner: false,
    nsfw: false,
    cooldown: 10,
    async execute(message,args,client,prefix)
    {  
      
       if (args.length == 2)
        {
            //find guild by id from db
            if (args[0] == "suggest" || args[0] == "suggestion")
                var pass=0
            else
                return message.reply("kindly specify a valid option")
            var chl=args[1].replace(/\D/g,'');
            var new_channel=message.guild.channels.cache.get(chl);
        
            if (!new_channel)
                return message.reply(`It seems channel_id specified not found in this server.. Please Specify a valid channel_id and **make sure bot can view channel #${chl}**`);
        }

        else 
            return message.reply("Kindly specify valid options. **Example: -set suggestion 939507690445627485**");
        
        const data = await db.findOne({ Guild: message.guildId});
        if (data)
        {
        if (data.c_id == chl)
        {
            return message.reply("Cannot set same channel for suggestions...")
        }

        data.old_channel=data.c_id;
        data.c_id=chl;
        await data.save()

        const embed = new MessageEmbed()
            .setDescription(`Channel <#${chl}> has been successfully set for suggesstions and reports`)
            .setColor("RANDOM")
            .setFooter({text: "Facing any issues? use -report"})
            .setTimestamp();
            return message.reply({embeds: [embed]});
        }
        else{

        const newdata= new db({
            Guild: message.guildId,
            c_id: chl,
            old_channel: "none",
            suggest_id: 0,
        })
        await newdata.save();
        const embed = new MessageEmbed()
            .setDescription(`Channel ${chl} has been successfully set for suggesstions`)
            .setColor("RANDOM")
            .setFooter({text: "Facing any issues? use -report"})
            .setTimestamp();
        return message.reply({embeds: [embed]});
        
        
    }     


    }
}
