const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "General",
    description: "Check Ping Bot",
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
            console.log(`${user} used PING Command TIME: ${date.toLocaleString()}`);
        } catch (err) {
            console.log(err);
        }
      
  await message.reply({ content: "Pinging..." }).then(async (msg) => {
  const ping = msg.createdAt - message.createdAt;
  const api_ping = client.ws.ping;

  const PingEmbed = new MessageEmbed()
    .setAuthor({ name: "Pong", iconURL: client.user.displayAvatarURL()})
    .setColor(client.embedColor)
    .addField("Bot Latency", `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, true)
    .addField("API Latency", `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, true)
    .setFooter({ text: `Requested by ${message.author.username}`, iconURL:  message.author.avatarURL({ dynamic: true })})
    .setTimestamp();

  await msg.edit({
    content: "\`🏓\`",
    embeds: [PingEmbed]
  })
 })
 }
}