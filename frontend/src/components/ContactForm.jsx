import React, { useState, useEffect } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://pro-pochini.ru';

const ContactForm = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");
  const [consentGiven, setConsentGiven] = useState(true); // по умолчанию галочка активна

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);
      return () => clearInterval(interval);
    } else {
      setLoadingDots("");
    }
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consentGiven) return;
    setIsLoading(true);
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      const result = await response.json();
      console.log('Ответ от сервера:', result);

      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 2000);

      e.target.reset();
      setConsentGiven(true); // сбросить чекбокс
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-10 px-2.5 sm:px-4" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl md:text-4xl md:font-semibold mt-8 mb-10">ОСТАВЬТЕ ЗАЯВКУ</h3>

        <form onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-gray-200 bg-opacity-30 p-6 shadow-lg rounded-lg mb-16">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="w-full p-3 mb-4 border bg-gray-50 border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            className="w-full p-3 mb-4 border bg-gray-50 border-gray-300 rounded-lg"
            required
          />

          <label className="flex items-start md:gap-2 gap-0 ml-1 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={consentGiven}
              onChange={() => setConsentGiven((prev) => !prev)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 flex items-center justify-center rounded border border-gray-300 ${
                consentGiven ? 'bg-indigo-600' : 'bg-white'
              }`}
            >
              {consentGiven && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              )}
            </div>
            <p className="text-sm md:mr-0 mr-5 text-gray-900 underline decoration-gray-400 underline-offset-2 leading-snug">
              Я даю согласие на обработку персональных данных
            </p>
          </label>


          <button
            type="submit"
            className={`bg-black bg-opacity-90 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-600 transition duration-300 w-auto mt-4 ${
              isLoading || !consentGiven ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isLoading || !consentGiven}
          >
            {isLoading ? `Загрузка${loadingDots}` : "Заказать мастера"}
          </button>
        </form>

        {notificationVisible && (
          <div className="flex justify-center items-center mt-10">
            <div
              className="bg-green-400 bg-opacity-80 text-white p-6 rounded-md shadow-lg text-2xl w-80 max-w-full mx-auto">
              Вам перезвонят!
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
