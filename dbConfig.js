const Sequelize = require('sequelize')
const connection = new Sequelize('null', 'null', 'null', {
  dialect: 'sqlite',
  storage: './APPDATA.sqlite',
  logging: false,
  define: {
    timestamps: false
  }
});

const db = {}

db.Sequelize = Sequelize
db.connection = connection

db.site = connection.define('site', {
  name: {
    type : Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: false,
  underscored: true
})

//exporting db object
module.exports = db
