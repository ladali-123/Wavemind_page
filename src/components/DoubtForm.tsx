import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function DoubtForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    topic: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('doubt_submissions')
        .insert([
          {
            full_name: formData.fullName,
            mobile: formData.mobile,
            physics_topic: formData.topic,
          },
        ]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({ fullName: '', mobile: '', topic: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Submission failed. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="doubt-form" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Free Doubt Check-In
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Apna Doubt Bataye –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
                Free Check-In
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bas 2 minute me form bharein aur expert teacher aapko call karenge. Pehla session completely FREE hai!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-lg text-gray-700">Quick 24-hour response guaranteed</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-lg text-gray-700">No payment required upfront</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-lg text-gray-700">Expert Class 11 Physics teachers</span>
              </div>
            </div>

            <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <p className="text-yellow-800 font-semibold text-lg">
                💡 Pro Tip: Jitne specific aap doubt batayenge, utni behtar explanation milegi!
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-3xl blur-2xl opacity-20"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Doubt Submitted Successfully! 🎉
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Humari team aapko jaldi se contact karegi. Stay tuned!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Submit Another Doubt
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Submit Your Physics Doubt
                  </h3>

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900"
                      placeholder="Apna naam enter karein"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-semibold text-gray-700 mb-2">
                      Physics Topic (Which topic you didn't understand?) *
                    </label>
                    <textarea
                      id="topic"
                      name="topic"
                      required
                      value={formData.topic}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-gray-900"
                      placeholder="Example: Newton's Laws, Rotational Motion, Waves, etc."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Your Doubt
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to receive a call from our team
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
