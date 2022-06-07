const Command = require("../structures/command.js");
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: "hello",
	aliases: ['sup'],
	description: "Say hello to the bot",
	permission: "SEND_MESSAGES",
	async run(message, args, client, slash) {
		const embed = new MessageEmbed().setDescription(` Wassup bitchezzz`).setColor('#44b868');
		const m = await message.reply({ embeds: [embed] });
	}
});