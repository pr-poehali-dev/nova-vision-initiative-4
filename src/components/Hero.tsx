import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/dd1ee26a-e5f4-4364-b6f1-b791d8efa315/files/c4cff3ec-97dd-4d22-ae05-6a4caad0def4.jpg"
          alt="Шашлык на мангале"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[5]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 opacity-80">Настоящий вкус живого огня</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ШАШЛЫК
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Сочное мясо на углях, маринованное по домашним рецептам.
          Доставка горячим прямо к вашему столу.
        </p>
        <a
          href="#order"
          className="inline-block bg-orange-600 hover:bg-orange-500 text-white uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-300"
        >
          Заказать сейчас
        </a>
      </div>
    </div>
  );
}