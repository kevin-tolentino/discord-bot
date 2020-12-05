require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('kevin-bot is ready to serve!!!');
});

client.on('message', (msg) => {
  if (msg.content === 'Jesus loves you!') {
    msg.react('😃');
    msg.react('💖');
    msg.reply(' wow! Jesus loves you too! 💖');
  }

  if (msg.content === 'Introduce yourself kevin-bot!') {
    msg.react('👋');
    msg.channel.send(`Greetings ${msg.member}! My name is kevin-bot!!!`);
  }

  if (msg.content === 'kevin-bot is gonna go under some construction now~') {
    msg.react('👋');
    msg.channel.send('See you all! I\'ll be back some other time! I\'m gonna go into maintenance 👋');
  }
});

client.login(process.env.BOT_TOKEN);
