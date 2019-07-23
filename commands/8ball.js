const Discord = require('discord.js');

module.exports = {
  name: '8ball',
  category: "Fun",
  description: 'Ask a question! 8ball will answer it.',
  usage: '[question]',
  cooldown: 5,
  async execute(bot, message, args) {
    if (!args[0]) return message.channel.send(":x: | You have to ask a question to 8ball!");

    const yes = ['Truth','Thats true','Yes, yes it is','Of course'];
    const maybe = ['Hmm...','Maybe??','I dunno','I wish i knew that','Im not sure'];
    const no = ['Nope.','Lies!','Uhh... No','Not really','I dont think thats true'];
    const chance = Math.floor(Math.random() * 3);

    var ballEmbed = Discord.RichEmbed()
    .setTimestamp()
    .setFooter("Requested by " + message.author.username, message.author.avatarURL)

    if (chance === 0) {
      ballEmbed.setTitle("**Yes!**")
      ballEmbed.color("GREEN")
      ballEmbed.setDescription(yes[Math.floor(Math.random() * yes.lenght)])
    } else if (chance === 1) {
      ballEmbed.setTitle("**Maybe...**")
      ballEmbed.color("GOLD")
      ballEmbed.setDescription(maybe[Math.floor(Math.random() * yes.lenght)])
    } else if (chance === 2) {
      ballEmbed.setTitle("**No.**")
      ballEmbed.color("RED")
      ballEmbed.setDescription(no[Math.floor(Math.random() * yes.lenght)])
    }
    message.channel.send(ballEmbed)
  }
};