module.exports = {
  async up(db, client) {
    const role = await db.collection('roles').findOne({ name: 'Admin' })
    
    await db.collection('users').insertOne({
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'admin@gmail.com',
      password: 'Admin@12345',
      profile: '',
      role: role['_id'],
      DOB: '20-05-2000'
    })
  },

  async down(db, client) {
    await db.collection('user').deleteOne({ email: 'admin@12345' })
  }
};
