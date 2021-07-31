const Discord = require("discord.js");
const RunningServer = require("./server");
const { getGombal } = require('./store')
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot Started");
});

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith('ngab!')) {
    const content = message.content.toLowerCase().split(" ")[1]
    const mention = message.content.toLowerCase().split(" ")[2]
    let replyMessage;
    if (content && mention) {
      switch (content) {
        case 'gombal': replyMessage = getGombal(mention)
          break;
        default:
          break;
      }
    }
    message.channel.send(replyMessage)
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
const token = process.env['TOKEN']
client.login(token);
