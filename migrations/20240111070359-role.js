module.exports = {
  async up(db, client) {
    await db.collection('roles').insertMany([
      { name: 'Admin' },
      { name: 'User' }
    ])
  },

  async down(db, client) {
    await db.collection('roles').deleteMany()
  }
};
