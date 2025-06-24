import React from "react";

function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Блок, который на мобильных выстраивает (Контакты + Email) в одну строку, а карту под ними */}
        <div className="flex flex-col md:hidden space-y-4">
          {/* Контейнер для (Контакты + Email) в одну строку */}
          <div className="flex justify-between space-x-4">
            {/* Контакты */}
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-2">Контакты</h3>
              <p className="text-sm">
                📞{" "}
                <a href="tel:+79255961151" className="hover:text-indigo-400">
                  +7 499 130 73 77
                </a>
              </p>
              <p className="text-sm">📆 Пн-Пт: с 8:00 до 22:00</p>
              <p className="text-sm">📆 Сб-Вс: с 9:00 до 22:00</p>
              <p className="text-sm mt-2">
                ☎️{" "}
                <a href="tel:+79255961151" className="hover:text-indigo-400">
                  +7 925 596 11 51
                </a>
              </p>
              <p className="text-sm text-gray-400">Бесплатно по России</p>
            </div>

            {/* Email */}
            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Для физ. лиц</h3>
              <p className="text-sm">
                ✉️{" "}
                <a href="mailto:12345kolt@gmail.com" className="hover:text-indigo-400">
                  12345kolt@gmail.com
                </a>
              </p>
              <h3 className="text-lg font-semibold mt-4">Для юр. лиц</h3>
              <p className="text-sm">
                ✉️{" "}
                <a href="mailto:kolt12max@mail.ru" className="hover:text-indigo-400">
                  kolt12max@mail.ru
                </a>
              </p>
              <div className="mt-4 mb-6">
                <a
                  href="mailto:12345kolt@gmail.com"
                  className="bg-indigo-600 hover:bg-indigo-400 text-white px-1 rounded-lg transition"
                >
                  Написать руководству
                </a>
              </div>
            </div>
          </div>

          {/* Карта под ними */}
          <div className="flex justify-center">
            <iframe
              title="Яндекс Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.722479%2C55.752504&z=16&pt=37.722479,55.752504,pm2rdl"
              width="100%"
              height="200"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* На больших экранах (md+) – прежняя раскладка (пример) */}
        <div className="hidden md:flex md:flex-nowrap justify-between space-x-8">
          {/* Контакты */}
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-3">Контакты</h3>
            <p className="text-sm">
              📞{" "}
              <a href="tel:+79255961151" className="hover:text-indigo-400">
                +7 499 130 73 77
              </a>
            </p>
            <p className="text-sm">📆 Пн-Пт: с 8:00 до 22:00</p>
            <p className="text-sm">📆 Сб-Вс: с 9:00 до 22:00</p>
            <p className="text-sm mt-2">
              ☎️{" "}
              <a href="tel:+79255961151" className="hover:text-indigo-400">
                +7 499 130 73 77
              </a>
            </p>
            <p className="text-sm text-gray-400">Бесплатно по России</p>
          </div>

          {/* Карта по центру */}
          <div className="w-1/3 flex justify-center">
            <iframe
              title="Yandex Map"
              src="https://yandex.ru/map-widget/v1/?ll=37.722479%2C55.752504&z=16&pt=37.722479,55.752504,pm2rdl"
              width="120%"
              height="200"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Email справа */}
          <div className="w-1/3 md:pl-[275px]">
            <h3 className="text-lg font-semibold mb-2">Для физических лиц</h3>
            <p className="text-sm">
              ✉️{" "}
              <a href="mailto:kolt12max@mail.ru" className="hover:text-indigo-400">
                kolt12max@mail.ru
              </a>
            </p>
            <h3 className="text-lg font-semibold mt-4">Для юридических лиц</h3>
            <p className="text-sm">
              ✉️{" "}
              <a href="mailto:kolt12max@mail.ru" className="hover:text-indigo-400">
                kolt12max@mail.ru
              </a>
            </p>
            <div className="mt-4">
              <a
                href="mailto:12345kolt@gmail.com"
                className="bg-indigo-600 hover:bg-indigo-400 text-white py-1 px-2 rounded-lg transition"
              >
                Написать руководству
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижний блок с копирайтом и политикой конфиденциальности */}
      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        <p className="text-sm">&copy; {new Date().getFullYear()} MilesMails. Все права защищены.</p>
        <a href="/privacy-policy.pdf" className="text-sm text-gray-200 hover:text-gray-400">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

export default Footer;
