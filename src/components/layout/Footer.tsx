import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products#siemens", label: "Siemens ABG Analysers" },
  { href: "/products#vector", label: "Vector Biotek" },
  { href: "/products#agappe", label: "Agappe POC" },
  { href: "/products#randox", label: "Randox Controls" },
];

export default function Footer() {
  return (
    <footer className="bg-healthcare-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">AMS Healthcare</span>
                <span className="text-xs text-primary-foreground/70">Diagnostic Excellence</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Established in 2015, AMS Healthcare is a trusted partner for hospitals and diagnostic centers, 
              providing world-class medical laboratory solutions across Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:amshealthcarechennai@gmail.com"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">amshealthcarechennai@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919444208521"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91-9444208521</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} AMS Healthcare. All rights reserved.</p>
            <p>Trusted Healthcare Partner Since 2015</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
