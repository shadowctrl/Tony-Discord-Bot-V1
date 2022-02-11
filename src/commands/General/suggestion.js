const { MessageEmbed,MessageButton } = require('discord.js');
const db = require("../../schema/suggest.js")

module.exports={
    name:'suggestion',
    category:"General",
    aliases: [ "suggest"],
    description: "Suggest idea's for server.",
    usage:"-suggest <content-here>",
    Permission:[],
    owner: false,
    nsfw: false,
    cooldown: 10000,
    async execute(message,args,client,prefix)
    {   
        if (args.length == 0)
        {
            return message.reply("Kindly specify your content to suggest")
        }

        var args=args.join(" ")
        
        const data = await db.findOne({Guild: message.guildId});
        
        if (data)
        {   
        
            var channel=data.c_id;
            var count=data.suggest_id+=1;
            
            const server_embed = new MessageEmbed()
                .setTitle("💡 Suggestio/Report")
                .addFields(
                    {name:"status", value:`200`,inline:true},
                    {name:"Suggest/Report No", value:`${count}`,inline:true},
                    {name:"content", value:`${args}`,inline:true},
                    {name:"by", value:`<@${message.author.id}>`,inline:true}
                    )
                .setColor(client.embedColor)
                .setTimestamp()

            const user_embed = new MessageEmbed()
                    .setTitle(`Suggestion/Report No: ${count}`)
                    .setDescription(`<@${message.author.id}> Your suggesstion/report has been successfullly posted`)
                    .setColor(client.embedColor)
                    .setTimestamp()
        
        try{
        
            channel=await message.guild.channels.cache.get(channel);
            await channel.send({ embeds:[server_embed]});
        
        }
        
        catch
        {
                return message.reply("Suggestion not enabled in this server ")
        
        }

            await message.channel.send({embeds:[user_embed]});
            await data.save();
        }
        
        else
        {
            return message.reply("Suggestion not enabled in this server ")
        }        

    }
   
}
