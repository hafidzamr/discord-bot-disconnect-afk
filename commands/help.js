module.exports = {
  name : 'help',
  description : 'show all command',
  execute : (message) => {    
    message.channel.send({
      embed: {
        title: 'Ngab Command List',
        description: 'ngab!<namaCommand> untuk menggunakan command',
        fields:[
          {
            name: '> clear',
            value: 'untuk menghapus chat channels, hanya bisa digunakan oleh role admin'
          },
          {
            name: '> gombal',
            value: 'ngab!gombal <mention> untuk menampilkan kata kata gombalan'
          },
          {
            name: '> help',
            value: 'ngab!help untuk menampilkan command list bot Ngab'
          },
          {
            name: '> ping',
            value: 'untuk menampilkan ping per ms'
          },
          {
            name: '> tebak',
            value: 'untuk bermain tebak tebakan, tapi masih belum bisa digunakan'
          },
        ],
        image: { url: 'https://media.giphy.com/media/mCmc21BKYUuC2A6p8H/giphy.gif' }
      }
    })
  }
}