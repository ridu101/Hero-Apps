import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative left-1/2 mt-20 w-screen -translate-x-1/2 bg-[#F6F6F6] text-[#102A43]">
      {/* Gradient top line */}
      <div className="h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2]"></div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              HERO<span className="text-[#7C3AED]">.IO</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#627382]">
              We create simple, useful and productive applications that make
              everyday life smarter and easier.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#627382]">
              <Link className="hover:text-[#632EE3]" to="/">
                Home
              </Link>

              <Link className="hover:text-[#632EE3]" to="/apps">
                All Apps
              </Link>

              <Link className="hover:text-[#632EE3]" to="/installation">
                Installation
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#627382]">
              <a className="hover:text-[#632EE3]" href="#">
                Help Center
              </a>

              <a className="hover:text-[#632EE3]" href="#">
                Privacy Policy
              </a>

              <a className="hover:text-[#632EE3]" href="#">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-4 space-y-3 text-sm text-[#627382]">
              <p>Email: support@hero.io</p>
              <p>Phone: +880 1234-567890</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 text-sm text-[#627382] sm:flex-row">
          <p>© 2026 HERO.IO. All rights reserved.</p>

          <p>
            Designed with <span className="text-red-500">♥</span> by Ridwan
            Ahmed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;