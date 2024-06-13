import User from "../models/User.js"
import sequelize from "../db.js"

const CreateUserDb = async (req, res) => {
  const data = req.body
  try {
    await sequelize.sync()
    const newUser = await User.create(data)
    res.status(201).send('Usuário cadastrado com sucesso!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default CreateUserDb