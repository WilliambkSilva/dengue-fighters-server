import { Sequelize } from "sequelize"

const database = 'df_database'
const username = 'root'
const password = 'admin'


const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize