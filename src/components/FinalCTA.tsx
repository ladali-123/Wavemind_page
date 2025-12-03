import { MessageCircle, Send, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('doubt-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl">
            <Sparkles className="w-5 h-5 mr-2" />
            Take Action Now
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Confusion Mat Rakhiye –{' '}
            <span className="text-yellow-400">
              Aaj Hi Apna Doubt Clear Kariye!
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Exam ka time aa raha hai. Har din precious hai. Apna Physics doubt aaj submit karein aur kal se confident ho jaaye!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Send className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Submit Your Doubt</h3>
            <p className="text-blue-100 text-center mb-6">
              Free session book karein aur apne Physics problems ko goodbye bolein
            </p>
            <button
              onClick={scrollToForm}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Submit Doubt – Free Session
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Talk to Educator</h3>
            <p className="text-blue-100 text-center mb-6">
              Directly educator se baat karke apne doubts discuss karein
            </p>
            <a
              href="tel:+919876543210"
              className="block w-full bg-white hover:bg-gray-100 text-blue-700 font-bold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-center"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24 Hours</div>
              <div className="text-blue-100">Response Time</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-white/20"></div>

            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100% Free</div>
              <div className="text-blue-100">First Session</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-white/20"></div>

            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200 text-lg">
            Join thousands of students who are now confident in their Physics preparation! 🚀
          </p>
        </div>
      </div>

      <footer className="relative mt-16 pt-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-blue-200">
            <p className="mb-2">© 2024 WaveMindEdu. All rights reserved.</p>
            <p className="text-sm">Empowering students to achieve excellence in Physics</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
