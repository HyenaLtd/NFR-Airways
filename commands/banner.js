const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");
      const msg = args.join(" ");
      let announcement = message.guild.channels.find(`name`, "events");
      message.delete().catch();
      let sEmbed = new Discord.RichEmbed()
      .setAuthor(`Banner by ${message.author.username}`, message.guild.iconURL)
      .setDescription(msg)
      .setColor("#0000FF")
      .setFooter("Events")
      .setImage("https://cdn.discordapp.com/attachments/707855386325024773/707864349083172924/banner-3.png")
      announcement.send(sEmbed);

}

module.exports.help = {
  name: "banner"
}
