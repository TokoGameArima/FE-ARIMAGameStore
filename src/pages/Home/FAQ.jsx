import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ARIMA Game Store?",
      answer: "ARIMA Game Store is the best platform to purchase a variety of your favorite games, ranging from action, adventure, to simulation."
    },
    {
      question: "How do I purchase games on ARIMA Game Store?",
      answer: "You can purchase games by selecting the desired game, adding it to the cart, and completing the payment through the available methods."
    },
    {
      question: "Are there discounts for game purchases?",
      answer: "Yes, we often offer discounts and exciting promotions for various games. Make sure to check our promo page regularly."
    },
    {
      question: "Does the Game Store provide games for all platforms?",
      answer: "Yes, we provide games for various platforms such as PC, PlayStation, Xbox, and others."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0f0220] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 data-aos="zoom-in" className="text-4xl md:text-6xl font-semibold mb-6 leading-tight text-center">
          <strong className="font-extrabold">FAQ</strong>
        </h1>
        <p data-aos="fade-up" className="text-sm md:text-xl mb-12 text-gray-300 text-center">
          Find answers to common questions about <strong>ARIMA Game Store</strong> below.
        </p>
        <div className="space-y-8">
        {faqs.map((faq, index) => (
          <details data-aos="fade-right" key={index} className="bg-[#1a0333] p-6 rounded-lg shadow-lg">
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