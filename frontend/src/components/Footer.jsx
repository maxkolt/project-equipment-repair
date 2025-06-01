import React from "react";

function Footer() {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <footer className="bg-black bg-opacity-90 text-gray-200 py-8">
      <div className="container mx-auto px-4">

        {/* Мобильная версия */}
        <div className="flex flex-col md:hidden space-y-4">
          <div className="flex justify-between space-x-4">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-2">Контакты</h3>
              <p className="text-sm">📞 <a href="tel:+74991307377" className="text-gray-200 hover:text-indigo-400">+7 499 130 73 77</a></p>
              <p className="text-sm text-gray-400">📆 Пн-Пт: с 8:00 до 22:00</p>
              <p className="text-sm text-gray-400">📆 Сб-Вс: с 9:00 до 22:00</p>
              <p className="text-sm mt-2">☎️ <a href="tel:+74991307377" className="text-gray-200 hover:text-indigo-400">+7 499 130 73 77</a></p>
              <p className="text-xs text-gray-300">📍 Мы работаем по Москве и Московской области</p>
            </div>

            <div className="w-1/2">
              <h3 className="text-lg font-semibold">Для физ. лиц</h3>
              <p className="text-sm">✉️ <a href="mailto:shop@miele-store.ru" className="text-gray-400 hover:text-indigo-400">shop@miele-store.ru</a></p>
              <h3 className="text-lg font-semibold mt-2">Для юр. лиц</h3>
              <p className="text-sm">✉️ <a href="mailto:bness@kvalitet.comp" className="text-gray-400 hover:text-indigo-400">bness@kvalitet.comp</a></p>
              <div className="mt-6 mb-6">
                <a href="mailto:ceo@company.com" className="bg-indigo-600 hover:bg-indigo-400 text-gray-300 p-1 rounded-lg transition">Написать руководству</a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <iframe title="Яндекс Карта" src="https://yandex.ru/map-widget/v1/?ll=37.722479%2C55.752504&z=16&pt=37.722479,55.752504,pm2rdl" width="100%" height="200" allowFullScreen className="rounded-lg shadow-lg"></iframe>
          </div>
        </div>

        {/* Десктоп */}
        <div className="hidden md:flex md:flex-nowrap justify-between space-x-8">
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-3">Контакты</h3>
            <p className="text-sm">📞 <a href="tel:+74991307377" className="hover:text-indigo-400">+7 499 130 73 77</a></p>
            <p className="text-sm text-gray-400">📆 Пн-Пт: с 8:00 до 22:00</p>
            <p className="text-sm text-gray-400">📆 Сб-Вс: с 9:00 до 22:00</p>
            <p className="text-sm mt-2">☎️ <a href="tel:+74991307377" className="hover:text-indigo-400">+7 499 130 73 77</a></p>
            <p className="text-sm text-gray-300">📍 Мы работаем по Москве и Московской области</p>
          </div>

          <div className="w-1/3 flex justify-center">
            <iframe title="Yandex Map" src="https://yandex.ru/map-widget/v1/?ll=37.722479%2C55.752504&z=16&pt=37.722479,55.752504,pm2rdl" width="120%" height="200" allowFullScreen className="rounded-lg shadow-lg"></iframe>
          </div>

          <div className="w-1/3 md:pl-[275px]">
            <h3 className="text-lg font-semibold mb-2">Для физических лиц</h3>
            <p className="text-sm">✉️ <a href="mailto:shop@miele-store.ru" className="text-gray-300 hover:text-indigo-400">shop@miele-store.ru</a></p>
            <h3 className="text-lg font-semibold mt-4">Для юридических лиц</h3>
            <p className="text-sm">✉️ <a href="mailto:business@kvalitet.company" className="text-gray-300 hover:text-indigo-400">business@kvalitet.company</a></p>
            <div className="mt-4">
              <a href="mailto:12345kolt@gmail.com" className="bg-indigo-600 hover:bg-indigo-400 text-white py-1 px-2 rounded-lg transition">Написать руководству</a>
            </div>
          </div>
        </div>
      </div>

      {/* Соцсети */}
      <div className="flex justify-center space-x-4 mt-6">
        <img src={`${publicUrl}/icons/instagram.png`} alt="Instagram" className="h-6" />
        <img src={`${publicUrl}/icons/telegram.png`} alt="Telegram" className="h-6" />
        <img src={`${publicUrl}/icons/telephone.png`} alt="Phone" className="h-6" />
        <img src={`${publicUrl}/icons/whatsapp.png`} alt="WhatsApp" className="h-6" />
      </div>

      {/* Подвал */}
      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        <p className="text-sm">&copy; {new Date().getFullYear()} MilesMails. Все права защищены.</p>
        <a href={`${publicUrl}/privacy-policy.pdf`} className="text-sm text-gray-200 hover:text-gray-400">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}

export default Footer;
