const Discord = require("discord.js");
const RunningServer = require("./server");
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')) 
const contentList = [];

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  contentList.push(command.name);
}

client.on("ready", () => {
  console.log("Bot Started");
});

client.on("message", (message) => {
  if (!message.content.toLowerCase().startsWith('ngab!') || message.author.bot) return;

    const command = message.content.toLowerCase().split(" ")[0]
    const content = command.split("!")[1]

    if (contentList.includes(content)) {
      switch (content) {
        case 'clear':
          return client.commands.get(content).execute(message);
        case 'help':
          return client.commands.get(content).execute(message);
        case 'ping':
          return client.commands.get(content).execute(message,client);
        case 'gombal':
          return client.commands.get(content).execute(message);
        case 'tebak':
          return client.commands.get(content).execute(message);
        default:
          break;
      }

    } else {
      message.channel.send({ 
        embed: {
          title: "GOBLOK !",
          description: 'GAK ADA COMMANDNYA !',
          image: { url: 'https://cdn.nekos.life/slap/slap_014.gif' }
        }
      })
    }
})


client.on("voiceStateUpdate", (oldState, newState) => {
  if (newState.channelID === newState.guild.afkChannelID) {
    setTimeout(() => {
      newState.member.voice.kick();
    }, 3000);
  }
});

RunningServer();
const token = `ODcwODk3NzE5OTE1NDc0OTg0.YQTctA.N4hwEO9qnuTHz3LPdFxFvD3cJtA`
client.login(token);
