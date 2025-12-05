import { AlertCircle, BookX, Calculator, Clock, Frown, TrendingDown } from 'lucide-react';

export default function ProblemStatement() {
  const problems = [
    { icon: BookX, text: 'Kuch topics class me samajh hi nahi aaye' },
    { icon: TrendingDown, text: 'Numerical weak lag rahe hain' },
    { icon: AlertCircle, text: 'Concept clear nahi ho raha' },
    { icon: Clock, text: 'Revision ka time kam bacha hai' },
    { icon: Frown, text: 'Exam tension ho rahi hai' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#375A78] mb-4">
            Class 11 Physics <span className="text-[#375A78]">Difficult Lag Rahi Hai?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="order-2 md:order-1">
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
                >
                  <div className="bg-red-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 font-medium pt-1">{problem.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-[#375A78] to-[#375A78] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 sm:p-4 rounded-full flex-shrink-0">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Fikar Mat Kijiye!</p>
                  <p className="text-base sm:text-xl text-blue-100">
                    WaveMindEdu aapka Physics expert guide hai!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-yellow-100 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
                  <div className="bg-blue-100 w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <Frown className="w-14 h-14 sm:w-20 sm:h-20 text-[#375A78]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Physics Problems?
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Har student ko kabhi na kabhi Physics difficult lagti hai. But worry not!
                  </p>

                  {/* Responsive cards */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-3 sm:p-3 rounded-lg">
                      <div className="text-2xl sm:text-2xl font-bold text-red-600">60%</div>
                      <div className="text-sm sm:text-base text-gray-600 mt-1">Students struggle</div>
                    </div>
                    <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                      <div className="text-2xl sm:text-2xl font-bold text-yellow-600">45m</div>
                      <div className="text-sm sm:text-base text-gray-600 mt-1">Avg confusion</div>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                      <div className="text-2xl sm:text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm sm:text-base text-gray-600 mt-1">We solve it!</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
