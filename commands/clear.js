module.exports = {
  name : 'clear',
  description : 'clear chat channel',
  execute : (message) => {    
      const ADMIN_ROLE_ID = process.env['ADMIN_ROLE_ID']
      const DEVELOPER_ROLE_ID = process.env['DEVELOPER_ROLE_ID']
      const admin = message.member.roles.cache.has(ADMIN_ROLE_ID)
      const developer = message.member.roles.cache.has(DEVELOPER_ROLE_ID)

      if (!admin && !developer) {
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
}