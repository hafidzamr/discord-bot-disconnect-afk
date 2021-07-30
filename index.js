const Discord = require("discord.js");
const RunningServer = require("./server");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot Started");
});

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
