module.exports = {
  name : 'tebak',
  description : 'tebak tebakan receh',
  execute : (message, client) => {    
      //penambahan tebakan disini langsung [pertanyaan, jawaban]  
      const listTebakan = [
          ['Penyanyi yang sering gak sadar diri?', 'pingsan mambo']
      ]
      const randomTebakan = listTebakan[Math.floor(Math.random() * listTebakan.length)];
      message.channel.send({
        embed: {
          description: randomTebakan[0],
          image: { url: 'https://cdn.nekos.life/slap/slap_014.gif' }
        }
      })
  }
}