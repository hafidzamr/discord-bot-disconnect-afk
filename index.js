const Discord = require("discord.js");
const RunningServer = require("./server");
const { getGombal } = require('./store')
const client = new Discord.Client();
const MessageEmbed = new Discord.MessageEmbed

client.on("ready", () => {
  console.log("Bot Started");
});

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith('ngab!')) {
    try {
      const content = message.content.toLowerCase().split(" ")[1]
      const mention = message.content.toLowerCase().split(" ")[2]
      let replyMessage;

      if (content) {
        if (content === 'clear') {
          (async () => {
            let deleted;
            do {
              deleted = await message.channel.bulkDelete(100);
            } while (deleted.size != 0);
          })();
        }
        if (mention) {
          switch (content) {
            case 'gombal': replyMessage = getGombal(mention)
              break;
            default:
              break;
          }
          message.channel.send({
            embed: {
              description: replyMessage,
              image: { url: 'https://cdn.nekos.life/hug/hug_016.gif' }
            }
          })
        }
      }
    } catch (err) {
      console.log(err)
    }
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
