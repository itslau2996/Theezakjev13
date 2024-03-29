module.exports = (client, Discord, message) => {
    const prefix = process.env.prefix
    const embed = new Discord.MessageEmbed()
        .setDescription('Hi, I am theezakje!\nMy prefix is currently `-`\nUse `-help` for the full list of commands!')
 
    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        message.channel.send({ embeds: [embed] });
    };
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const guildID = message.guild.id
    const channelID = message.channel.id

    if (guildID === '725009032577810453' && channelID != 791610364978659329) { //makkerserver - minigame channel
        return message.channel.send('please go to <#791610364978659329>')
    } else if (guildID === '843894832534781982' && channelID != '921671367299043328') { //test server - channel = test
        return message.channel.send('please go to <#921671367299043328>')
    } else if (guildID === '823261321926672444' && channelID != '823670681920340049') { //l&j - cmd channel
        return message.channel.send('please go to <#823670681920340049>')
    } else {
        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

        if (command) command.execute(client, message, args, Discord);
    }
}