import { Award, BookOpen, GraduationCap, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID (UNCHANGED) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              About WaveMindEdu
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              India's Most{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
                Trusted Platform
              </span>{' '}
              for Class 11 Physics
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">WaveMindEdu</strong> ek trusted learning platform hai Class 11 & 12 ke students ke liye. Humara mission hai Physics ko itna easy aur relatable banana ki har student confidently exam me top score kar sake.
              </p>

              <p>
                Hum <strong className="text-blue-800">personalized doubt-solving</strong>,
                 <strong className="text-blue-800">concept clarity sessions<br/></strong>, 
                 aur <strong className="text-blue-900">modern teaching techniques</strong>
                  use karte hain — jisse aapki understanding aur score dono improve ho.
              </p>

              <p>
                Humari team me experienced educators hain jo specifically Class 11 curriculum ko 
                deeply samajhte hain. Har teacher student-friendly approach rakhta hai aur complex topics 
                ko simple language me explain karta hai.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-green-50 px-6 py-3 rounded-lg border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-700">Live Classes Available</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
                <Award className="w-5 h-5 text-[#375A78]" />
                <span className="font-semibold text-[#375A78]">Certified Teachers</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD (UNCHANGED) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-3xl blur-3xl opacity-20"></div>

            <div className="relative bg-gradient-to-br from-[#375A78] to-[#243F57] rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-yellow-400 p-4 rounded-full">
                    <GraduationCap className="w-12 h-12 text-blue-900" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  Our Teaching Philosophy
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg">
                    <Target className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div className="text-white">
                      <h4 className="font-semibold mb-1">Personalized Learning</h4>
                      <p className="text-blue-100 text-sm">Har student ke level ke hisaab se teaching</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg">
                    <BookOpen className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div className="text-white">
                      <h4 className="font-semibold mb-1">Conceptual Clarity</h4>
                      <p className="text-blue-100 text-sm">Ratta nahi, samajh ke saath learning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg">
                    <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div className="text-white">
                      <h4 className="font-semibold mb-1">Fast Results</h4>
                      <p className="text-blue-100 text-sm">Quick doubt resolution aur instant clarity</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* IMPACT/NUMBERS SECTION REMOVED */}

      </div>
    </section>
  );
}
