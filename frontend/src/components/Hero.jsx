import React from 'react';

// Пример массива категорий (исправлено свойство title вместо name)
const categories = [
  { id: 1, title: 'Ремонт и обслуживание cтиральных машин', img: require('../assets/images/images-removebg-preview.png')},
  { id: 2, title: 'Ремонт и обслуживание посудомоечных машин', img: require('../assets/images/посудомойка-removebg-preview.png')},
  { id: 3, title: 'Ремонт и обслуживание холодильников', img: require('../assets/images/Без_названия-removebg-preview.png')},
  { id: 4, title: 'Диагностика поломок любых видов техники', img: require('../assets/images/диагностика-removebg-preview.png')},
  { id: 5, title: 'Ремонт и обслуживание духовых шкафов', img: require('../assets/images/Без_названия__1_-removebg-preview.png')},
  { id: 6, title: 'Ремонт и обслуживание кондиционеров', img: require('../assets/images/кондиционер-removebg-preview.png')},
  { id: 7, title: 'Ремонт и обслуживание вытяжек', img: require('../assets/images/вытяжка-removebg-preview.png') },
  { id: 8, title: 'Ремонт и обслуживание кофеварок', img: require('../assets/images/кофеварка-removebg-preview.png')},
  { id: 9, title: 'Ремонт и обслуживание пылесосов', img: require('../assets/images/пылисос-removebg-preview.png')},
  { id: 10, title: 'Ремонт и обслуживание сушилок', img: require('../assets/images/сушилка-removebg-preview.png')},
  { id: 11, title: 'Ремонт и обслуживание тостеров', img: require('../assets/images/тостер-removebg-preview.png')},
  { id: 12, title: 'Установка оборудования', img: require('../assets/images/установка-removebg-preview.png')},
  { id: 13, title: 'Ремонт и обслуживание электрочайников', img: require('../assets/images/чайник-removebg-preview.png')},
  { id: 14, title: 'Ремонт и обслуживание электроплит', img: require('../assets/images/электоплита-removebg-preview.png')},
  { id: 15, title: 'Ремонт и обслуживание телевизоров', img: require('../assets/images/телевизор-removebg-preview.png') },

];

function Hero() {
  return (
    <section id="hero" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-3xl md:text-4xl md:font-bold mt-2 mb:mt-10 mb-8 mb:mb-16">
          ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И ОБСЛУЖИВАНИЕ БЫТОВОЙ ТЕХНИКИ
        </h5>
        {/* Грид с адаптивностью */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-50 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              {/* Изображение с object-contain, чтобы не обрезалось */}
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-48 object-contain mb-4"
              />
              {/* Заголовок и описание */}
              <h3 className="text-lg">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
