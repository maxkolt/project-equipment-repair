import React from "react";

const advantages = [
  { title: "Быстрый ремонт", description: "Мы устраним поломку в кратчайшие сроки." },
  { title: "Гарантия качества", description: "Все услуги предоставляются с гарантией." },
  { title: "Доступные цены", description: "Лучшие цены без скрытых платежей." },
  // Этот блок будет показываться только на md и выше (планшеты, десктопы)
  {
    title: "Выезд мастера на дом",
    description: "Наши специалисты приедут к вам в любое время.",
    hideOnMobile: true,
  },
];

const Advantages = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Наши преимущества</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {advantages.map((advantage, index) => {
            const className = `w-[280px] p-6 bg-white shadow-lg rounded-lg ${
              advantage.hideOnMobile ? "hidden md:block" : ""
            }`;
            return (
              <div key={index} className={className}>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
