import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Apa itu ARIMA Game Store?",
      answer: "ARIMA Game Store adalah platform terbaik untuk membeli berbagai macam game favorit Anda, mulai dari aksi, petualangan, hingga simulasi."
    },
    {
      question: "Bagaimana cara membeli game di Toko Game?",
      answer: "Anda dapat membeli game dengan memilih game yang diinginkan, menambahkannya ke keranjang, dan menyelesaikan pembayaran melalui metode yang tersedia."
    },
    {
      question: "Apakah ada diskon untuk pembelian game?",
      answer: "Ya, kami sering menawarkan diskon dan promo menarik untuk berbagai game. Pastikan untuk memeriksa halaman promo kami secara berkala."
    },
    {
      question: "Apakah Toko Game menyediakan game untuk semua platform?",
      answer: "Ya, kami menyediakan game untuk berbagai platform seperti PC, PlayStation, Xbox, dan lainnya."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0f0220] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight text-center">
          <strong className="font-extrabold">FAQ</strong>
        </h1>
        <p className="text-sm md:text-xl mb-12 text-gray-300 text-center">
          Temukan jawaban untuk pertanyaan umum tentang <stong>ARIMA Game Store</stong> di bawah ini.
        </p>
        <div className="space-y-8">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-[#1a0333] p-6 rounded-lg shadow-lg">
            <summary className="text-xl md:text-2xl font-bold mb-4 cursor-pointer">
              {faq.question}
            </summary>
            <p className="text-gray-300 mt-2">{faq.answer}</p>
          </details>
        ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/bg-stars.png')] opacity-10 pointer-events-none" />
    </section>
  );
};

export default FAQ;