import React from 'react';

// Пример списка логотипов
const brandLogos = [
  { id: 1, name: 'BORK', img: require('../assets/logo/BORK.png') },
  { id: 2, name: 'Electrolux', img: require('../assets/logo/elektrilux.png') },
  { id: 3, name: 'Miele', img: require('../assets/logo/miele1.png') },
  { id: 4, name: 'Haier', img: require('../assets/logo/Haier.png') },
  { id: 5, name: 'BEKO', img: require('../assets/logo/Beko.png') },
  { id: 6, name: 'Hansa', img: require('../assets/logo/Hansa.png') },
  { id: 7, name: 'Samsung', img: require('../assets/logo/Samsung.png') },
  { id: 8, name: 'AEG', img: require('../assets/logo/aeg.png') },
  { id: 9, name: 'Panasonic', img: require('../assets/logo/panasonic.png') },
  { id: 10, name: 'Xiaomi', img: require('../assets/logo/xiaomi.png') },
  { id: 11, name: 'LG', img: require('../assets/logo/lg.png') },
  { id: 12, name: 'Philips', img: require('../assets/logo/philipsh.png') },
  { id: 13, name: 'Indesit', img: require('../assets/logo/indesit.png') },
  { id: 14, name: 'Siemens', img: require('../assets/logo/Siemens.png') },
  { id: 15, name: 'Bosch', img: require('../assets/logo/bosch1.png') },
  { id: 16, name: 'Gefest', img: require('../assets/logo/Gefest.png') },

];

function Brands() {
  return (
    <section id="brands" className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl md:font-semibold text-center mt-8 mb-12">ПРОИЗВОДИТЕЛИ ТЕХНИКИ С КОТОРЫМИ МЫ РАБОТАЕМ </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center">
          {brandLogos.map((brand) => (
            <div key={brand.id} className="p-2 hover:scale-105 transition-transform">
              <img src={brand.img} alt={brand.name} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
