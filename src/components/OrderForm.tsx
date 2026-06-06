import { useState } from "react";

const MEAT_TYPES = [
  "Свинина",
  "Баранина",
  "Курица",
];

const ORDERS_URL = "https://functions.poehali.dev/1cb57b01-175e-4bcb-9e7b-6b869b3569c8";

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", meat_type: "", portions: 1, comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(ORDERS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Что-то пошло не так");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-5xl mb-4">🔥</div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">Заказ принят!</h3>
        <p className="text-neutral-600">Мы свяжемся с вами в ближайшее время для подтверждения.</p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", meat_type: "", portions: 1, comment: "" }); }}
          className="mt-6 text-sm uppercase tracking-wide underline text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Сделать ещё один заказ
        </button>
      </div>
    );
  }

  return (
    <div id="order" className="bg-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-neutral-400 mb-3 text-center">Доставка за 45 минут</p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-10 leading-tight">
          Заказать шашлык
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-neutral-500">Ваше имя</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Иван"
              required
              className="border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-neutral-500">Телефон</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+7 (900) 000-00-00"
              required
              type="tel"
              className="border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-neutral-500">Вид мяса</label>
            <select
              name="meat_type"
              value={form.meat_type}
              onChange={handleChange}
              required
              className="border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 transition-colors bg-white appearance-none"
            >
              <option value="">Выберите мясо...</option>
              {MEAT_TYPES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-neutral-500">Количество порций</label>
            <input
              name="portions"
              value={form.portions}
              onChange={handleChange}
              type="number"
              min={1}
              max={50}
              required
              className="border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-neutral-500">Комментарий (необязательно)</label>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Адрес доставки, пожелания..."
              rows={3}
              className="border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-orange-600 hover:bg-orange-500 disabled:bg-neutral-300 text-white uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-300 mt-2"
          >
            {status === "loading" ? "Отправляем..." : "Оформить заказ"}
          </button>
        </form>
      </div>
    </div>
  );
}
