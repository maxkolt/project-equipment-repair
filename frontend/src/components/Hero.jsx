import React from 'react';

// Пример массива категорий (используем статический импорт изображений)
import image1 from '../assets/img/suhilka.jpg';
import image2 from '../assets/img/posudamoika.jpg';
import image3 from '../assets/img/xolodilnik.jpg';
import image4 from '../assets/img/remont.jpg';
import image5 from '../assets/img/duxovka.jpg';
import image6 from '../assets/img/kondicionerdom.jpg';
import image7 from '../assets/img/vitejka.jpg';
import image8 from '../assets/img/kofevarka1.jpg';
import image9 from '../assets/img/stiralnaia.40.jpg';
import image10 from '../assets/img/Ustanovka.jpg';
import image11 from '../assets/img/indukcionplita.jpg';
import image12 from '../assets/img/boiler.jpg';

const categories = [
  {id: 1, title: 'Ремонт и обслуживание электроплит', img: image11},
  {id: 2, title: 'Ремонт и обслуживание посудомоек', img: image2},
  {id: 3, title: 'Ремонт и обслуживание духовых шкафов', img: image5},
  {id: 4, title: 'Ремонт и обслуживание вытяжек', img: image7},
  {id: 5, title: 'Ремонт и обслуживание cтиральных машин', img: image1},
  {id: 6, title: 'Ремонт и обслуживание кофеварок', img: image8},
  {id: 7, title: 'Ремонт и обслуживание сушилок', img: image9},
  {id: 8, title: 'Ремонт и обслуживание холодильников', img: image3},
  {id: 9, title: 'Диагностика поломок любых видов техники', img: image4},
  {id: 10, title: 'Ремонт и обслуживание бойлеров', img: image12},
  {id: 11, title: 'Ремонт и обслуживание кондиционеров', img: image6},
  {id: 12, title: 'Установка оборудования', img: image10},
];

function Hero() {
  return (
    <section id="hero" className="bg-gray-100 py-8">
      <div className="container mx-auto md:px-4 px-1 text-center">
        <h1 className="text-3xl md:text-4xl md:font-bold mt-2 mb:mt-10 mb-8 mb:mb-16">
          ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И ОБСЛУЖИВАНИЕ БЫТОВОЙ ТЕХНИКИ
        </h1>
        {/* Грид с адаптивностью */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[0.3rem] md:gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-50 rounded-sm shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center overflow-hidden group"
            >
              {/* Изображение */}
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-48 object-cover"
              />

              {/* Плашка заголовка */}
              <div
                className="w-full bg-gray-900 opacity-80 transition-opacity duration-300 group-hover:opacity-90 flex items-center justify-center h-20 mt-0">
                {/* Заголовок */}
                <h3 className="md:text-lg text-white text-center p-2.5">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;