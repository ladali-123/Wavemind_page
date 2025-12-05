import { Award, BookOpen, Clock, MessageCircle, Target, Users } from 'lucide-react';

export default function WhyTrustUs() {
  const reasons = [
    {
      icon: Target,
      title: '100% Topic Clarity Guarantee',
      description: 'Agar samajh nahi aaya toh extra session bilkul free',
    },
    {
      icon: Award,
      title: 'Expert Educators – Class 11 Specialization',
      description: 'Specially trained teachers jo Class 11 Physics ko perfectly jaante hain',
    },
    {
      icon: Clock,
      title: 'Time-Saving Smart Revision Techniques',
      description: 'Short tricks aur formulas yaad rakhne ke easy methods',
    },
    {
      icon: BookOpen,
      title: 'High-Scoring Numerical Problem Methods',
      description: 'Exam me full marks ke liye proven solving techniques',
    },
    {
      icon: MessageCircle,
      title: 'Doubt Solving Anytime',
      description: 'Flexible timing - aapki convenience ke hisaab se sessions',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#375A78] to-[#375A78] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Student Favorite
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Students{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#375A78] to-yellow-500">
              Love Learning
            </span>{' '}
            With WaveMindEdu?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of Class 11 students ne apne Physics doubts clear kiye. Ab aapki baari!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 
              border-transparent hover:border-blue-200 group"
            >
              <div className="bg-gradient-to-br from-[#375A78] to-[#375A78] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}

          <div className="bg-gradient-to-br from-[#375A78] via-[#375A78] to-[#375A78] rounded-2xl p-8 shadow-2xl
           text-white md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">5000+</h3>
              <p className="text-lg font-semibold mb-4">Happy Students</p>
              <p className="text-white">
                Join thousands of successful students who cleared their Physics doubts with us
              </p>
            </div>
          </div>
        </div>

        {/* REVIEW SECTION REMOVED */}
      </div>
    </section>
  );
}
