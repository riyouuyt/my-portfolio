import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Footer: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Terjadi kesalahan saat mengirim feedback. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative mt-auto bg-[#C9E6F0] border-t border-gray-200 pt-8 pb-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {/* Bagian About */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10">
            <h3 className="relative text-lg font-bold text-blue-900 mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-14">
              About
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Personal portfolio showcasing my work experience and project in Data Analyst/Scientist.
            </p>
          </div>

          {/* Kontak Info */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10">
            <h3 className="relative text-lg font-bold text-blue-900 mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-14">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Email: bagusariobimo7@gmail.com</li>
              <li className="text-gray-600">Tangerang Selatan, Banten, Indonesia</li>
            </ul>
          </div>

          {/* Form Feedback */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10 lg:col-span-2">
            <h3 className="relative text-lg font-bold text-blue-900 mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-14">
              Feedback
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email tidak valid'
                    }
                  })}
                  type="email"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  {...register('message', { required: 'Pesan tidak boleh kosong' })}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-lg ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Tulis feedback Anda..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-lg font-medium text-white ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 transition-colors'
                }`}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Feedback'}
              </button>

              {isSubmitted && (
                <p className="text-green-600 text-sm mt-2">Terima kasih atas feedback Anda!</p>
              )}
              {submitError && (
                <p className="text-red-500 text-sm mt-2">{submitError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;