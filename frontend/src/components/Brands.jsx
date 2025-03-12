import React from 'react';

// Пример списка логотипов
const brandLogos = [
  { id: 1, name: 'BORK', img: require('../assets/BORK.png') },
  { id: 2, name: 'Electrolux', img: require('../assets/elektrilux.png') },
  { id: 3, name: 'AEG', img: require('../assets/aeg.png') },
  { id: 4, name: 'Samsung', img: require('../assets/Samsung.png') },
  { id: 5, name: 'LG', img: require('../assets/lg.png') },
  { id: 6, name: 'Philips', img: require('../assets/philipsh.png') },
  { id: 7, name: 'Bosch', img: require('../assets/bosch.png') },
  { id: 8, name: 'Miele', img: require('../assets/miele.png') },
  { id: 9, name: 'Panasonic', img: require('../assets/panasonic.png') },
  { id: 10, name: 'Xiaomi', img: require('../assets/xiaomi.png') },
  { id: 11, name: 'BEKO', img: require('../assets/Beko.png') },
  { id: 12, name: 'Hansa', img: require('../assets/Hansa.png') },
  { id: 13, name: 'Indesit', img: require('../assets/indesit.png') },
  { id: 14, name: 'Gefest', img: require('../assets/Gefest.png') },
  { id: 15, name: 'Haier', img: require('../assets/Haier.png') },
  { id: 16, name: 'Siemens', img: require('../assets/Siemens.png') },
];

function Brands() {
  return (
    <section id="brands" className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl md:font-semibold text-center mt-8 mb-16">ПРОИЗВОДИТЕЛИ ТЕХНИКИ С КОТОРЫМИ МЫ РАБОТАЕМ </h3>
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
