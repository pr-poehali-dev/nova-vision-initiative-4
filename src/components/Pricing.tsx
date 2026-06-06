const items = [
  {
    name: "Шашлык из свинины",
    cut: "Шейка",
    weight: "300 г",
    price: 450,
    tag: "Хит",
  },
  {
    name: "Шашлык из баранины",
    cut: "Корейка",
    weight: "300 г",
    price: 650,
    tag: "Премиум",
  },
  {
    name: "Шашлык из курицы",
    cut: "Бедро",
    weight: "300 г",
    price: 320,
    tag: "Лёгкий",
  },
  {
    name: "Люля-кебаб",
    cut: "Говядина + свинина",
    weight: "300 г",
    price: 400,
    tag: null,
  },
  {
    name: "Рёбрышки на углях",
    cut: "Свиные рёбра",
    weight: "400 г",
    price: 520,
    tag: null,
  },
  {
    name: "Овощи на мангале",
    cut: "Сезонные овощи",
    weight: "250 г",
    price: 220,
    tag: "Вегетарианское",
  },
];

export default function Pricing() {
  return (
    <div id="menu" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-neutral-500 mb-3 text-center">Всё готовится на живом огне</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 leading-tight">
          Меню и цены
        </h2>

        <div className="flex flex-col divide-y divide-neutral-800">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-6 gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white text-lg font-medium group-hover:text-orange-400 transition-colors duration-300">
                    {item.name}
                  </span>
                  {item.tag && (
                    <span className="text-xs uppercase tracking-wide px-2 py-0.5 border border-orange-600 text-orange-500">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-neutral-500 text-sm">{item.cut} · {item.weight}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-2xl font-bold text-orange-500">{item.price}</span>
                <span className="text-neutral-500 text-sm ml-1">₽</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#order"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-300"
          >
            Заказать сейчас
          </a>
        </div>
      </div>
    </div>
  );
}
