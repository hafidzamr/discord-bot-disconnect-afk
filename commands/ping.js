 module.exports = {
  name : 'ping',
  description : 'check ping',
  execute : (message, client) => {    
    message.channel.send(`${Math.round(client.ws.ping)}ms`);
  }
}