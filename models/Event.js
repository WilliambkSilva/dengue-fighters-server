import { DataTypes } from 'sequelize'

import database from '../db.js'
import User from './User.js'
const Event = database.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    usuarioCriador: {
      type: DataTypes.INTEGER,
      references: {
        model: User, // Nome do modelo, não o nome da tabela
        key: 'id'
      }
    },
    nomeEvento: DataTypes.STRING,
    dataEvento: DataTypes.STRING,
    localEvento: DataTypes.STRING,
    descricaoEvento: DataTypes.STRING
  });

export default Event