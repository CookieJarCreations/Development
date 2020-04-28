const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = 'paste token here'

bot.on('ready', () => {
    console.log("This bot is online yo!")
})

bot.login(TOKEN)
