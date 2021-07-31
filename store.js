module.exports = {
  getGombal: (mention) => {
    gombalList = [
      `Eh ${mention} pinjem flashdisk dong, aku pengen transfer data cintaku buat kamu`,
      `${mention} lebih istimewa dari Komet Halley yg muncul 76 tahun sekali. karena ${mention} muncul satu kali dalam hidupku dan tak tergantikan`,
      `Cuma tiga cinta yang tdk akan pernah berakhir: cinta ibu pd anaknya,cinta fitri dan cintaku padamu ${mention}`,
      `Sejak kenal kamu, bawaanya pengen belajar terus deh. Belajar jadi yang terbaik buat kamu. ${mention}`,
      `Dulu belajar untuk menuntut ilmu setinggi2nya, kalo sekarang aku belajar untuk menuntut cintamu setinggi2nya ${mention}`
    ]
    const itemRandom = gombalList[Math.floor(Math.random() * gombalList.length)];

    return itemRandom
  }

}