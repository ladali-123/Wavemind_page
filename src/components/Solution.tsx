import { BookOpen, Calculator, FileText, RefreshCw, Target, Video } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Video,
      title: 'Live 1-on-1 Topic Explanation',
      description: 'Personal attention ke saath har topic ko samjhein',
      color: 'blue',
    },
    {
      icon: BookOpen,
      title: 'Easy Language Me Complete Topic Breakdown',
      description: 'Complex concepts ko simple Hindi-English me explain karenge',
      color: 'yellow',
    },
    {
      icon: Calculator,
      title: 'Numerical Solving Support',
      description: 'Step-by-step numerical problems ko solve karna seekhein',
      color: 'green',
    },
    {
      icon: RefreshCw,
      title: 'Quick Revision Sessions',
      description: 'Exam se pehle fast revision aur important points',
      color: 'purple',
    },
    {
      icon: FileText,
      title: 'Assignments + Practice Questions',
      description: 'Regular practice ke liye curated problems',
      color: 'red',
    },
    {
      icon: Target,
      title: 'Guaranteed Topic Clarity',
      description: '100% samajh guarantee ya aapka session free',
      color: 'blue',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
    },
    yellow: {
      bg: 'bg-yellow-100',
      icon: 'text-yellow-600',
      border: 'border-yellow-200',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    green: {
      bg: 'bg-green-100',
      icon: 'text-green-600',
      border: 'border-green-200',
      gradient: 'from-green-500 to-green-600',
    },
    purple: {
      bg: 'bg-purple-100',
      icon: 'text-purple-600',
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600',
    },
    red: {
      bg: 'bg-red-100',
      icon: 'text-red-600',
      border: 'border-red-200',
      gradient: 'from-red-500 to-red-600',
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#1A2F42] to-[#375A78] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Complete Solution
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            WaveMindEdu Aapke Har Doubt Ka{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              Perfect Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning support jo aapko Physics me expert bana dega
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`mt-6 h-1 bg-gradient-to-r ${colors.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#375A78] via-[#375A78] to-[#375A78] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-yellow-400">
              <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                Aaj Hi Start Karein! 🚀
              </h3>
              <p className="text-xl text-yellow-400">
                First doubt-solving session completely FREE
              </p>
            </div>
            <button
              onClick={() => document.getElementById('doubt-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
