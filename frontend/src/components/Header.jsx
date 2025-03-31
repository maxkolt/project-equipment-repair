import React from 'react';

function Header() {
  return (
    <header className="bg-black bg-opacity-90 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto p-4">

        {/* Мобильная версия */}
        <div className="flex flex-col sm:hidden space-y-3">

          {/* Скидка + Номер в одну строку */}
          <div className="flex flex-wrap justify-center items-center text-center gap-x-2 text-gray-300 text-base font-medium">
            <span>Скидка 10% при заказе с сайта!</span>
            <a
              href="tel:+74991307377"
              className="text-indigo-300 mr-1 font-semibold hover:text-indigo-200 transition"
            >
              +7&nbsp;499&nbsp;130-73-77
            </a>
          </div>

          {/* Логотип + иконки */}
          <div className="flex justify-between items-center">
            {/* Логотип */}
            <h1 className="font-bold text-indigo-600 text-3xl">MilesMails</h1>

            {/* Иконки */}
            <nav className="flex space-x-4">
              {/*<a href="tel:+74991307377" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">*/}
              {/*  <img src="/icons/telephone.png" alt="Phone" className="w-5 h-5" />*/}
              {/*</a>*/}
              <a href="https://t.me/+74991307377" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
                <img src="/icons/telegram.png" alt="Telegram" className="w-5 h-5" />
              </a>
              <a href="https://wa.me/+74991307377" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>
            </nav>
          </div>
        </div>


        {/* Планшеты и десктопы */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Логотип */}
          <h1 className="font-bold text-indigo-600 text-4xl">MilesMails</h1>

          {/* Надпись */}
          <p className="text-lg text-gray-300">Скидка 10% при заказе с сайта!</p>

          {/* Иконки */}
          <nav className="flex space-x-4">
            <a href="tel:1234567890" className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
              <img src="/icons/telephone.png" alt="Phone" className="w-6 h-6" />
            </a>
            <a href="https://t.me/yourChannel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
              <img src="/icons/telegram.png" alt="Telegram" className="w-6 h-6" />
            </a>
            <a href="https://wa.me/yourNumber" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-400 bg-opacity-25 hover:opacity-70 transition shadow-md">
              <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Header;
