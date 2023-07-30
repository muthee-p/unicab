'use client'

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}


  
const Faq = () => {
  const faqItems: FAQItem[] = [
    {
    question: ' How do I request a ride using your service?',
    answer: 'Requesting a ride with our service is simple and convenient. All you need to do is download our mobile app, create an account, and enter your pickup location and destination. The app will then display available drivers in your area, along with the estimated time of arrival and fare. Select your preferred ride option, confirm your request, and you\'re\ all set! You can track your driver in real-time and receive notifications throughout the journey.',
  },
  {
    question: ' How are fares calculated for rides?',
    answer: 'Fares are calculated based on several factors, including the distance of the trip, the duration, the time of day, and demand in the area. Our app uses GPS technology to calculate the most efficient route between your pickup and drop-off locations. The fare will be displayed before you confirm your ride request, so you\'ll\ always know the estimated cost upfront. Additionally, surge pricing may apply during periods of high demand, and you will be notified about any surge pricing before confirming your ride.',
  },
  {
    question: 'What safety measures are in place for drivers and riders?',
    answer: 'We prioritize safety for all users. We conduct comprehensive background checks on drivers and provide a rating system for both drivers and riders. Additionally, we have an in-app emergency button and customer support team available 24/7.',
  },
  {
    question: 'How do I sign up as a driver on Unicab?',
    answer: ' Signing up as a driver is easy! Simply download the app, click on the "Driver Sign-Up" button, and follow the step-by-step registration process. You\'\ll need to provide some personal information, vehicle details, and complete a background check.',
  },
  {
    question: 'Can I use UniCab in different cities or countries?',
    answer: 'Your safety is our top priority. All drivers on our platform undergo a thorough background check and screening process before they are approved to drive. Our app provides you with the driver\'s\ photo, name, and license plate number, so you can easily identify your driver. Additionally, you can share your ride details with friends or family, allowing them to track your journey in real-time. We also offer an in-app emergency button to connect you directly to emergency services if needed. If you ever encounter any issues during your ride, please don\'t\ hesitate to contact our support team, and we\'ll\ assist you promptly.',
  },
  {
    question: 'Can I choose my working hours as a driver?',
    answer: 'Yes! As a driver, you have the flexibility to choose your own working hours. You can go online or offline whenever it suits you best.',
  },
];



  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className=" max-w-5xl md:max-w-4xl md:w-[40rem] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className=''>
        {faqItems.map((q, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full md:p-4 bg-gray-100 rounded-md focus:outline-none"
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