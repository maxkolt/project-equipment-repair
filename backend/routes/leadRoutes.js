const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead'); // Проверь правильность пути

// ✅ Получение всех лидов
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// ✅ Добавление нового лида
router.post('/', async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: 'Введите имя и телефон' });
  }

  try {
    const newLead = new Lead({ name, phone });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при сохранении' });
  }
});

module.exports = router;
