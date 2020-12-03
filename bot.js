require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('kevin-bot is ready to serve!')
})

client.login(process.env.BOT_TOKEN)
