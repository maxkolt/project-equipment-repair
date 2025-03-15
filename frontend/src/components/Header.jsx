import React from 'react';

function Header() {
  return (
    <header className="bg-black bg-opacity-90 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4">

        {/* Логотип (скрываем на мобильных, показываем на больших экранах) */}
        <div className="hidden sm:flex items-center space-x-2">
          <h1 className="font-bold text-indigo-500 text-4xl">MilesMails</h1>
        </div>

        {/* Надпись о скидке - по центру между логотипом и кнопками на больших экранах */}
        <p className="text-lg text-gray-300 mb-2 sm:mb-0 sm:flex sm:text-center">
          Скидка 10% при заказе с сайта!
        </p>

        {/* Меню иконок - В РЯД на всех экранах */}
        <nav className="flex flex-row w-full sm:w-auto justify-center space-x-4">
          {/* Телефон */}
          <a
            href="tel:1234567890"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-[0px_1px_15px_rgba(0,0,0,0.4)]"
          >
            <img src="/icons/telephone.png" alt="Phone" className="w-6 h-6"/>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/yourChannel"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-[0px_1px_15px_rgba(0,0,0,0.4)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/telegram.png" alt="Telegram" className="w-6 h-6"/>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/yourNumber"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-[0px_1px_15px_rgba(0,0,0,0.4)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6"/>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourProfile"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-[0px_1px_15px_rgba(0,0,0,0.4)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6"/>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
