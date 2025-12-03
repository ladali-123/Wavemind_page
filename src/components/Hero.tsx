import { BookOpen, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('doubt-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
              Class 11 Physics Doubt Solving
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Class 11 Physics Ka Syllabus Complete Ho Gaya…
              <span className="text-yellow-400"> Lekin Kuch Topics Samajh Nahi Aaye?</span>
              <br />
              <span className="text-yellow-300">WaveMindEdu Karega Sab Clear!</span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Bas apna doubt bataiye — Live 1-on-1 explanation, numerical support, aur quick revision sessions ke saath aapka har Physics concept crystal clear ho jayega!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Submit Your Doubt – Free Session
              </button>
              <button
                onClick={scrollToForm}
                className="bg-white hover:bg-gray-100 text-blue-700 font-bold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Start Learning Now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg transform rotate-12">
                100% FREE
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <BookOpen className="w-16 h-16 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-yellow-400 rounded-full p-2">
                      <Zap className="w-5 h-5 text-blue-900" />
                    </div>
                    <span className="text-lg font-medium">Live 1-on-1 Sessions</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-yellow-400 rounded-full p-2">
                      <Zap className="w-5 h-5 text-blue-900" />
                    </div>
                    <span className="text-lg font-medium">Expert Physics Teachers</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-yellow-400 rounded-full p-2">
                      <Zap className="w-5 h-5 text-blue-900" />
                    </div>
                    <span className="text-lg font-medium">Instant Doubt Clearing</span>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg mt-6 font-semibold">
                    Join 5000+ Happy Students
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg">
              45-60 Min Sessions
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
