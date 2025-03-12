import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);  // Состояние для уведомления
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const [loadingDots, setLoadingDots] = useState(""); // Анимация точек

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500); // Интервал смены точек (0.5 сек)

      return () => clearInterval(interval);
    } else {
      setLoadingDots(""); // Сброс точек после завершения загрузки
    }
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
    };

    try {
      // Отправка данных на сервер
      const response = await fetch('https://electronics-repair-app.onrender.com/api/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Логируем ответ от сервера
      const result = await response.json();
      console.log('Ответ от сервера:', result);

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      // Показываем уведомление о успешной отправке
      setNotificationVisible(true);

      // Скрываем уведомление через 2 секунды
      setTimeout(() => setNotificationVisible(false), 2000);

      // Очищаем форму
      e.target.reset();

    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-10" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl md:text-4xl md:font-semibold mt-8 mb-10">ОСТАВТЕ ЗАЯВКУ</h3>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 p-6 shadow-lg rounded-lg mb-10">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          {/* Кнопка отправки с индикатором загрузки */}
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-400 transition duration-300 w-auto mt-4"
            disabled={isLoading} // Деактивируем кнопку во время загрузки
          >
            {isLoading ? `Загрузка${loadingDots}` : "Заказать мастера"}
          </button>
        </form>

        {/* Уведомление о успешной отправке */}
        {notificationVisible && (
          <div className="flex justify-center items-center mt-10">
            <div
              className="bg-green-500 bg-opacity-70 text-white p-6 rounded-md shadow-lg text-2xl w-80 max-w-full mx-auto">
              Вам перезвонят!
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
