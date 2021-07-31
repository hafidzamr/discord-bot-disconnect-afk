module.exports = {
  getGombal: (mention) => {
    gombalList = [
      `Eh ${mention} pinjem flashdisk dong, aku pengen transfer data cintaku buat kamu`,
      `${mention} kamu lebih istimewa dari Komet Halley yg muncul 76 tahun sekali. karena kamu muncul satu kali dalam hidupku dan tak tergantikan`,
      `Cuma tiga cinta yang tdk akan pernah berakhir: cinta ibu pd anaknya,cinta fitri dan cintaku padamu. ${mention}`,
      `Sejak kenal kamu, bawaanya pengen belajar terus deh. Belajar jadi yang terbaik buat kamu. ${mention}`,
      `Dulu belajar untuk menuntut ilmu setinggi2nya, kalo sekarang aku belajar untuk menuntut cintamu setinggi2nya. ${mention}`,
      `Aku yakin kita sebenernya ga saling suka, tapi saling sayang. ${mention}`,
      `Sekeras-kerasnya Ibu Kota Jakarta, masih lebih keras tekadku untuk mendapatkan cintamu~. ${mention}`,
      `senyuman kamu tuh ibarat SUSU BENDERA nikmat nya hingga tetes terakhir. ${mention}`,
      `kenal kamu kaya kenal jelangkung. sekali datang ga pernah bisa pergi dari hidupku. ${mention}`,
      `nternet bikin hidup lebih mudah,kalo kamu bikin hidup lebih indah. ${mention}`,
      `Anjing menggonggong khafilah berlalu. tiap hari bengong mikirin kamu melulu. ${mention}`
    ]

    gifList = [
      'https://cdn.nekos.life/kiss/kiss_054.gif',
      'https://cdn.nekos.life/kiss/kiss_108.gif',
      'https://cdn.nekos.life/kiss/kiss_014.gif',
      'https://cdn.nekos.life/kiss/kiss_113.gif',
      'https://cdn.nekos.life/kiss/kiss_094.gif',
      'https://cdn.nekos.life/kiss/kiss_094.gif',
      'https://cdn.nekos.life/kiss/kiss_075.gif'
    ]


    const randomGombal = gombalList[Math.floor(Math.random() * gombalList.length)];
    const randomGif = gifList[Math.floor(Math.random() * gifList.length)];
    return [randomGombal, randomGif]
  }

}