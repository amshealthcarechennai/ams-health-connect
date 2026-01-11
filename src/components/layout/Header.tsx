import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/ams-healthcare-logo.jpeg";

const productSubMenu = [
  { href: "/products/randox", label: "Randox Products" },
  { href: "/products/agappe", label: "Agappe Products" },
  { href: "/products/kin-diagnostics", label: "Point of Care – Kin Diagnostics" },
  { href: "/products/inspire-gene", label: "Pre-Analytics – IG Inspire Gene" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products", hasSubmenu: true },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [location.pathname]);

  const isProductsActive = location.pathname.startsWith("/products");

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:amshealthcarechennai@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              amshealthcarechennai@gmail.com
            </a>
            <a href="tel:+919444208521" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              +91-9444208521
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Trusted Healthcare Partner Since 2015
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="AMS Healthcare Logo" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-foreground">AMS Healthcare</span>
                <span className="text-xs text-muted-foreground">Diagnostic Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.href} 
                  className="relative"
                  onMouseEnter={() => link.hasSubmenu && setIsProductsOpen(true)}
                  onMouseLeave={() => link.hasSubmenu && setIsProductsOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                      (link.hasSubmenu ? isProductsActive : location.pathname === link.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                    {link.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Products Dropdown */}
                  {link.hasSubmenu && isProductsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-xl border py-2 z-50">
                      {productSubMenu.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            location.pathname === item.href
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-card border-t shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between",
                        isProductsActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileProductsOpen && "rotate-180")} />
                    </button>
                    {isMobileProductsOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {productSubMenu.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                              "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                              location.pathname === item.href
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="mt-2">
              <Button variant="default" className="w-full">
                Get in Touch
              </Button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
