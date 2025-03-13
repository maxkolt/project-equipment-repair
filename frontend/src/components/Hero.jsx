import React from 'react';

// Пример массива категорий (используем статический импорт изображений)
import image1 from '../assets/images/images-removebg-preview.png';
import image2 from '../assets/images/removebg-preview.png';
import image3 from '../assets/images/Без_названия-removebg-preview.png';
import image4 from '../assets/images/диагностика-removebg-preview.png';
import image5 from '../assets/images/Без_названия__1_-removebg-preview.png';
import image6 from '../assets/images/кондиционер-removebg-preview.png';
import image7 from '../assets/images/вытяжка-removebg-preview.png';
import image8 from '../assets/images/кофеварка-removebg-preview.png';
import image9 from '../assets/images/пылисос-removebg-preview.png';
import image10 from '../assets/images/сушилка-removebg-preview.png';
import image11 from '../assets/images/тостер-removebg-preview.png';
import image12 from '../assets/images/установка-removebg-preview.png';
import image13 from '../assets/images/чайник-removebg-preview.png';
import image14 from '../assets/images/электоплита-removebg-preview.png';
import image15 from '../assets/images/телевизор-removebg-preview.png';

const categories = [
  { id: 1, title: 'Ремонт и обслуживание cтиральных машин', img: image1 },
  { id: 2, title: 'Ремонт и обслуживание посудомоечных машин', img: image2 },
  { id: 3, title: 'Ремонт и обслуживание холодильников', img: image3 },
  { id: 4, title: 'Диагностика поломок любых видов техники', img: image4 },
  { id: 5, title: 'Ремонт и обслуживание духовых шкафов', img: image5 },
  { id: 6, title: 'Ремонт и обслуживание кондиционеров', img: image6 },
  { id: 7, title: 'Ремонт и обслуживание вытяжек', img: image7 },
  { id: 8, title: 'Ремонт и обслуживание кофеварок', img: image8 },
  { id: 9, title: 'Ремонт и обслуживание пылесосов', img: image9 },
  { id: 10, title: 'Ремонт и обслуживание сушилок', img: image10 },
  { id: 11, title: 'Ремонт и обслуживание тостеров', img: image11 },
  { id: 12, title: 'Установка оборудования', img: image12 },
  { id: 13, title: 'Ремонт и обслуживание электрочайников', img: image13 },
  { id: 14, title: 'Ремонт и обслуживание электроплит', img: image14 },
  { id: 15, title: 'Ремонт и обслуживание телевизоров', img: image15 },
];

function Hero() {
  return (
    <section id="hero" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl md:font-bold mt-2 mb:mt-10 mb-8 mb:mb-16">
          ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И ОБСЛУЖИВАНИЕ БЫТОВОЙ ТЕХНИКИ
        </h1>
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
              {/* Заголовок */}
              <h3 className="text-lg">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;