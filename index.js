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
      const command = message.content.toLowerCase().split(" ")[0]
      const content = command.split("!")[1]
      const mention = message.content.toLowerCase().split(" ")[1]



      if (content) {

        // Clear Text channel Commend just For Admin / Developer only on my Case
        if (content === 'clear') {
          const ADMIN_ROLE_ID = process.env['ADMIN_ROLE_ID']
          const DEVELOPER_ROLE_ID = process.env['DEVELOPER_ROLE_ID']
          const admin = message.member.roles.cache.has(ADMIN_ROLE_ID)
          const developer = message.member.roles.cache.has(DEVELOPER_ROLE_ID)

          if (!admin && !developer) {
            message.channel.send("This Feature has been Disabled");
          } else {
            (async () => {
              let deleted;
              do {
                deleted = await message.channel.bulkDelete(100);
              } while (deleted.size != 0);
            })();
          }
        }

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
            case 'help':
              return 'here !'
            default:
              break;
          }
        }

        if (content === "gombal" && !mention) {
          return message.channel.send({
            embed: {
              title: "GOBLOK !",
              description: 'ngap!gombal <@mention>',
              image: { url: 'https://cdn.nekos.life/slap/slap_014.gif' }
            }
          })
        }
      } else {
        message.channel.send("Sokap lu ? ");
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
