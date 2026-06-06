export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Только свежее мясо, живой огонь и проверенные маринады.
          Каждая порция — как будто вы на природе у мангала.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-orange-600 font-bold text-lg">✓</span>
            <span>Свежее мясо каждый день — без заморозки</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-orange-600 font-bold text-lg">✓</span>
            <span>Маринад по домашним рецептам — секрет вкуса</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-orange-600 font-bold text-lg">✓</span>
            <span>Доставка горячим в течение 45 минут</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Посмотреть меню
        </button>
      </div>
    </div>
  );
}