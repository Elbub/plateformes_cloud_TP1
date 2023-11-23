const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  process.env.PGHOST + ":" + process.env.PGPORT + "/" + process.env.PGDATABASE, // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
