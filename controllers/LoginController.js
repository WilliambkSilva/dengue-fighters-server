import User from "../models/User.js";

async function checkUser(email, password) {
  // Buscar o usuário pelo email
  const user = await User.findOne({ where: { email } });

  // Se o usuário não existir, retornar null
  if (!user) {
      return null;
  }

  // Checar se a senha está correta
  const isPasswordCorrect = (password === user.password)

  // Se a senha estiver correta, retornar o usuário, senão, retornar null
  return isPasswordCorrect ? user : null;
}



const Login = async (req, res) => {
  const {email, password} = req.body
  const statusLogin = await checkUser(email, password)
  res.send(statusLogin)
}

export default Login