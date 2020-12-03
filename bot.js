require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('kevin-bot is ready to serve!!!')
})

client.on('message', msg => {
  if (msg.content === 'Jesus loves you!') {
    msg.react('😃');
    msg.react('💖');
    msg.reply(` wow! Jesus loves you too! 💖`);
  }
});

client.login(process.env.BOT_TOKEN)
