import React, { useState } from 'react';

const Qna = () => {
  const qnaData = [
    {
      question: "What is the overall turnaround time for a Shopify project?",
      answer: "Shopify projects take 45-90 days depending on complexity."
    },
    {
      question: "Why should I choose Shopify for my e-commerce store?",
      answer: "It is scalable, secure, and user-friendly."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => setOpenIndex(index === openIndex ? null : index);

  return (
    <div className="container py-5">
      <h2 className="mb-4">FAQs</h2>
      {qnaData.map((item, index) => (
        <div className="mb-3" key={index}>
          <button
            className="btn btn-outline-primary w-100 text-start"
            onClick={() => toggle(index)}
          >
            {item.question}
          </button>
          {openIndex === index && (
            <div className="border p-3 bg-light">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Qna;
