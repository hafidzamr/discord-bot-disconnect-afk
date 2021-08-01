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
    const command = message.content.toLowerCase().split(" ")[0]
    const content = command.split("!")[1]
    const mention = message.content.toLowerCase().split(" ")[1]

    const contentList = ['gombal', 'help', 'clear', 'ping'];

    if (contentList.includes(content)) {
      // Clear Text channel Command just For Admin / Developer only on my Case
      if (content === 'clear') {
        const ADMIN_ROLE_ID = process.env['ADMIN_ROLE_ID']
        const DEVELOPER_ROLE_ID = process.env['DEVELOPER_ROLE_ID']
        const admin = message.member.roles.cache.has(ADMIN_ROLE_ID)
        const developer = message.member.roles.cache.has(DEVELOPER_ROLE_ID)

        if (!admin && !developer && !message.author.username.toLowerCase() === 'apit') {
          message.channel.send("Only Administrator can use this command");
        } else {
          (async () => {
            let deleted;
            do {
              try {
                deleted = await message.channel.bulkDelete(100);
              } catch (err) {
                console.log(err)
              }
            } while (deleted.size != 0);
          })();
        }
      }

      // Without Mention content
      switch (content) {
        case 'help':
          return message.channel.send({
            embed: {
              title: "Still on Development",
              description: 'Not yet ready !',
              image: { url: 'https://media.giphy.com/media/l46Cgwa9YZNNrEQla/giphy.gif' }
            }
          })
        case 'ping':
          return message.channel.send(`${Math.round(client.ws.ping)}ms`);
        default:
          break;
      }

      // With Mention content
      const listContentWithMention = ["gombal"]
      if (mention) {
        const gombalContent = getGombal(mention);
        switch (content) {
          case 'gombal':
            return message.channel.send({
              embed: {
                description: gombalContent[0],
                image: { url: gombalContent[1] }
              }
            })
          default:
            break;
        }
      }

      if (listContentWithMention.includes(content) && !mention) {
        return message.channel.send({
          embed: {
            title: "....",
            description: 'ngap!gombal <@mention>',
            image: { url: 'https://cdn.nekos.life/slap/slap_014.gif' }
          }
        })
      }

    } else {
      message.channel.send({
        embed: {
          image: { url: 'https://media.giphy.com/media/elKJA7rrkN0W6CSvmJ/giphy.gif' }
        }
      })
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
