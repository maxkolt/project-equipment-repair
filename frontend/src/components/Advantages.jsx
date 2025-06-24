import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const advantages = [
  { title: "Бесплатная диагностика", description: "Мы бесплатно проведем диагностику вашей техники." },
  { title: "Ремонт за 24 часа", description: "Мы быстро устраним все неисправности!" },
  { title: "Гарантия до 1 года", description: "Предоставляем гарантию на все выполненные работы." },
  { title: "Выезд мастера на дом", description: "Наши специалисты приедут к вам в любое время." },
  { title: "Срочный выезд мастера", description: "Возможен срочный вызов в течение часа." },
  { title: "Скидка 10% на первый ремонт", description: "Акция для новых клиентов!" }
];

const Advantages = () => {
  return (
    <section className="bg-gray-100 py-20" id="advantages">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl md:text-4xl md:font-semibold mb-14" data-aos="fade-up">
          НАШИ ПРИЕМУЩЕСТВА
        </h3>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {/* Отображаем только первые 4 на мобилках, все на md+ */}
          {advantages.map((adv, index) => (
            <div
              key={index}
              className={`
                bg-white p-6 shadow-lg rounded-lg w-[280px]
                ${index > 3 ? 'block md:block hidden' : ''}
              `}
              data-aos="fade-up"
            >
              <CheckIcon className="w-10 h-10 text-green-500 mb-3"/>
              <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
