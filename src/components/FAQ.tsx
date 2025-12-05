import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Kya doubt solving session free hai?',
      answer: 'Haan, pehla doubt-check-in completely free hai. Aap apna doubt submit karein aur humari team aapko call karegi. First session me aapka doubt clear karne ki full koshish karenge bilkul free me.',
    },
    {
      question: 'Kya mujhe complete chapter bhi padhaaya jayega?',
      answer: 'Haan, bilkul! Agar zarurat ho toh full chapter explanation + numerical practice bhi milti hai. Hum sirf doubt solving tak limited nahi hain - complete topic mastery ke liye dedicated sessions bhi provide karte hain.',
    },
    {
      question: 'Ye online hoga ya offline?',
      answer: 'Sessions online hote hain — aap ghar se comfortable pace me seekh sakte hain. Zoom ya Google Meet ke through live video classes hoti hain jaha aap real-time me teacher ke saath interact kar sakte hain.',
    },
    {
      question: 'Ek session kitne minutes ka hota hai?',
      answer: '45–60 minutes (topic ke hisab se flexible timing). Simple doubts 30-40 minutes me clear ho jaate hain, jabki complex topics ke liye 60 minutes tak session chal sakta hai. Hum ensure karte hain ki aapka doubt fully clear ho.',
    },
    {
      question: 'Kya main multiple topics bhej sakta hoon?',
      answer: 'Bilkul! Aap jitne topics chahen doubt form me list kar sakte hain. Hum aapke saare doubts ko priority ke hisaab se organize karenge aur systematically clear karenge. Multiple sessions bhi arrange kar sakte hain agar zarurat ho.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Got Questions?
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Aapke mann me jo bhi sawaal hain, yaha answer mil jayega
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 border border-yellow-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Humari team se directly baat karein. Hum aapki har query ka solution denge!
            </p>
            <button
              onClick={() => document.getElementById('doubt-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#375A78] to-[#243F57] hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
