const express = require('express');
const router = express.Router();
const Lead = require('../models/leadModel');

// Маршрут для создания новой заявки
router.post('/', async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ message: 'Пожалуйста, укажите имя и телефон' });
    }
    const newLead = await Lead.create({ name, phone });
    res.status(201).json({ message: 'Заявка успешно отправлена', lead: newLead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
