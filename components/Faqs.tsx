'use client'

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}


  
const Faq = () => {
  const faqItems: FAQItem[] = [
    {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 3',
    answer: 'Answer 3',
  },
];



  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div>
        {faqItems.map((q, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              onClick={() => handleClick(index)}
            >
              <span>{q.question}</span>
              <svg
                className={`h-6 w-6 transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-gray-200 rounded-md mt-2">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq