import User from "../models/User";

class UserController {
  async store(req, res) {
    // verificando se o email já existe
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  // Alteração de dados do usuário
  async update(req, res) {
    return res.json({
      ok: true,
    });
  }
}

export default new UserController();