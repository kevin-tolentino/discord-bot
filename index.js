require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

const command = require('./command');

client.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('kevin-bot is ready to serve!!!');

  // command utilizing command function defined in command.js
  command(client, 'kintro', (message) => {
    message.channel.send(`Greetings ${message.member}! My name is kevin-bot!!! I was created by Kevin Tolentino`);
  });

  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(`${guild.name} has a total of ${guild.memberCount} members.`);
    });
  });

  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch()
        .then((results) => {
          message.channel.bulkDelete(results);
        })
        .catch((error) => console.error(error));
    }
  });

  command(client, 'status', (message) => {
    const content = message.content.replace('!status ', '');

    client.user.setPresence({
      activity: {
        name: content,
        type: 'WATCHING',
      },
    });
  });
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
