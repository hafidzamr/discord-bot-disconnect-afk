const Discord = require("discord.js");
const client = new Discord.Client();
const RunningServer = require("./server");

client.on("ready", () => {
  console.log("Bot Started");
});

client.on("voiceStateUpdate", (oldState, newState) => {
  if (newState.channelID === newState.guild.afkChannelID) {
    setTimeout(() => {
      newState.member.voice.kick();
    }, 5000);
  }
});

RunningServer();

const token = process.env['TOKEN']

client.login(token);
