import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Organization Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">The Opportunity League</h3>
            <p className="mb-4 text-gray-300">
              Empowering youth through education, sports, leadership, and advocacy.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 transition-colors rounded-full bg-dark-light hover:bg-primary">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 transition-colors rounded-full bg-dark-light hover:bg-primary">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 transition-colors rounded-full bg-dark-light hover:bg-primary">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 transition-colors rounded-full bg-dark-light hover:bg-primary">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 transition-colors rounded-full bg-dark-light hover:bg-primary">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="transition-colors hover:text-primary">Our Programs</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About Us</Link></li>
              <li><Link to="/events" className="transition-colors hover:text-primary">Events</Link></li>
              <li><Link to="/get-involved" className="transition-colors hover:text-primary">Get Involved</Link></li>
              <li><Link to="/donate" className="transition-colors hover:text-primary">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Opportunity Way</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">
                <a href="tel:+12125551234" className="transition-colors hover:text-primary">
                  (212) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@opportunityleague.org" className="transition-colors hover:text-primary">
                  info@opportunityleague.org
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Stay Updated</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates on programs, events, and success stories.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-dark rounded-l-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-primary rounded-r-md hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-dark-light">
          <p className="text-gray-400">
            &copy; {currentYear} The Opportunity League. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-primary">Terms of Service</Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-primary">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
