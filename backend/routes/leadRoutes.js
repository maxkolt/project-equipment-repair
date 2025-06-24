const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const fetch = require('node-fetch'); // если нет — поставь npm install node-fetch

// Получение всех лидов
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Добавление нового лида + отправка в Telegram
router.post('/', async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: 'Введите имя и телефон' });
  }

  try {
    const newLead = new Lead({ name, phone });
    await newLead.save();

    // Отправка в Telegram
    const message = `📞 Новый лид:\n👤 Имя: ${name}\n📱 Телефон: ${phone}`;
    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    res.status(201).json(newLead);
  } catch (error) {
    console.error('Ошибка при сохранении или отправке в Telegram:', error);
    res.status(500).json({ message: 'Ошибка при сохранении' });
  }
});

module.exports = router;
