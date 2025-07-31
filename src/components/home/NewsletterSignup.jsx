import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 text-white bg-secondary md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Connected</h2>
            <p className="mb-8 text-lg text-white/80">
              Subscribe to our newsletter for updates on programs, events, success stories, and ways to get involved.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 mb-6 text-white rounded-md bg-accent"
              >
                <p className="font-medium">Thank you for subscribing to our newsletter!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col mb-2 space-y-4 md:space-y-0 md:flex-row md:space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 font-medium text-white transition-colors rounded-md bg-primary hover:bg-primary-dark disabled:opacity-70"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
              </form>
            )}

            <p className="mt-4 text-sm text-white/70">
              We respect your privacy and will never share your information with third parties.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
