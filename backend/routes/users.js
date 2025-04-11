var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

// POST create user
router.post('/', async (req, res, next) => {
  const { nome, sobrenome, cpf, rg, data_rg, expedidor_rg, email, senha, telefone, /*newSenha*/ } = req.body;
  
  try {
    // Fazer o hash da senha antes de salvar
    const hashedSenha = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        sobrenome,
        cpf,
        rg,
        data_rg: new Date(data_rg),
        expedidor_rg,
        email,
        senha: hashedSenha,  // Salvar a senha hashada
        telefone,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email, CPF ou RG já cadastrado.' });
    }
    next(error);
  }
});


/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

/* POST create user. */
router.post('/', async (req, res, next) => {
  const { nome, sobrenome, cpf, rg, data_rg, expedidor_rg, email, senha, telefone } = req.body;
  console.log(req.body);

  try {
    const user = await prisma.user.create({
      data: {
        nome,
        sobrenome,
        cpf,
        rg,
        data_rg: new Date(data_rg), // Certifique-se que a data está no formato correto
        expedidor_rg,
        email,
        senha,
        telefone,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      // Conflito, geralmente quando um valor único já existe
      return res.status(400).json({ error: 'Email, CPF ou RG já cadastrado.' });
    }
    next(error);
  }
});

router.post('/entrar', async (req, res, next) => {
  const { email, senha } = req.body;

  try {
    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: 'Email ou senha incorretos.' });
    }

    // Comparar a senha
    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Email ou senha incorretos.' });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    // Enviar o token no response
    res.json({ token });
  } catch (error) {
    next(error);
  }
});
const jwt = require('jsonwebtoken');

// DELETE delete user
router.delete('/', async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Usuário não autenticado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.userId;

    console.log(decoded)
    console.log("User ID:", userId);  // Adicione esse log para verificar o valor de 'userId'

    if (!userId) {
      return res.status(400).json("User ID is required");
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    res.status(200).json({ message: "Conta deletada com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar conta." });
  }
});

router.put("/", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Usuário não autenticado." });
  }

  try {
    // Decodificar o token para obter o userId
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.userId;

    if (!userId) {
      return res.status(400).json({ message: "ID do usuário não encontrado no token." });
    }

    // Obter os novos dados do corpo da requisição
    const { nome, senha } = req.body;

    if (!nome && !senha) {
      console.log('eae')
      return res.status(400).json({ message: "Nenhum dado fornecido para atualização." });
    }

    // Criar objeto de dados a serem atualizados
    const dataToUpdate = {};
    if (nome) dataToUpdate.nome = nome;
    if (senha) {
      // Hash da nova senha, se fornecida
      const hashedSenha = await bcrypt.hash(senha, 10);
      dataToUpdate.senha = hashedSenha;const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

// 🔐 POST - Criar usuário
router.post('/', async (req, res, next) => {
  const { nome, sobrenome, cpf, rg, data_rg, expedidor_rg, email, senha, telefone } = req.body;

  try {
    const hashedSenha = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        sobrenome,
        cpf,
        rg,
        data_rg: new Date(data_rg),
        expedidor_rg,
        email,
        senha: hashedSenha,
        telefone,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email, CPF ou RG já cadastrado.' });
    }
    next(error);
  }
});

// 🔓 POST - Login
router.post('/login', async (req, res, next) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Email ou senha incorretos.' });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha); // ✅ Corrigido aqui

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Email ou senha incorretos.' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    next(error);
  }
});

// 📄 GET - Listar todos os usuários
router.get('/', async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// 🗑️ DELETE - Deletar usuário autenticado
router.delete('/', async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Usuário não autenticado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.userId;

    if (!userId) {
      return res.status(400).json({ error: "ID do usuário não encontrado." });
    }

    await prisma.user.delete({ where: { id: userId } });
    res.status(200).json({ message: "Conta deletada com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar conta." });
  }
});

// ✏️ PUT - Atualizar dados do usuário autenticado
router.put("/", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Usuário não autenticado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.userId;

    const { nome, senha } = req.body;

    if (!nome && !senha) {
      return res.status(400).json({ message: "Nenhum dado fornecido para atualização." });
    }

    const dataToUpdate = {};
    if (nome) dataToUpdate.nome = nome;
    if (senha) {
      const hashedSenha = await bcrypt.hash(senha, 10);
      dataToUpdate.senha = hashedSenha;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: dataToUpdate,
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Erro na atualização do usuário:", error);
    res.status(500).json({ message: "Erro ao atualizar informações." });
  }
});

module.exports = router;

    }

    // Atualizar o usuário no banco de dados
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: dataToUpdate,
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Erro na atualização do usuário:", error);
    res.status(500).json({ message: "Erro ao atualizar informações." });
  }
});

  console.log('teste para comitar');

module.exports = router;