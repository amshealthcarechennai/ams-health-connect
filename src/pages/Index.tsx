import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { 
  ArrowRight, 
  Shield, 
  Award, 
  Users, 
  Clock,
  Microscope,
  Stethoscope,
  FlaskConical,
  HeartPulse
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const stats = [
  { number: "10+", label: "Years Experience", icon: Clock },
  { number: "50+", label: "Hospital Partners", icon: Users },
  { number: "100+", label: "Products", icon: FlaskConical },
  { number: "1000+", label: "Installations", icon: Award },
];

const productCategories = [
  {
    title: "Siemens Healthineers",
    description: "ABG Analysers & Urine Analysers for critical care and routine testing",
    icon: Microscope,
    href: "/products#siemens",
  },
  {
    title: "Vector Biotek",
    description: "Bio-Chemistry and Haematology solutions for comprehensive lab testing",
    icon: FlaskConical,
    href: "/products#vector",
  },
  {
    title: "Agappe POC",
    description: "Point-of-Care and Acute Care solutions for rapid diagnostics",
    icon: HeartPulse,
    href: "/products#agappe",
  },
  {
    title: "Randox Controls",
    description: "Quality Controls, EQA, and Reagents for accuracy assurance",
    icon: Shield,
    href: "/products#randox",
  },
];

const services = [
  "Sales & Installation of Diagnostic Equipment",
  "Preventive Maintenance & Calibration",
  "Technical Support & Training",
  "Laboratory Reagents & Consumables",
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern healthcare laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-healthcare-navy/95 via-healthcare-navy/80 to-healthcare-navy/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Stethoscope className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground font-medium">Trusted Healthcare Partner Since 2015</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Advanced Diagnostic Solutions for{" "}
              <span className="text-accent">Modern Healthcare</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              AMS Healthcare delivers world-class medical laboratory equipment and diagnostic solutions 
              to leading hospitals and healthcare institutions across Tamil Nadu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-xl border p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Trusted Partner in Healthcare Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 2015, AMS Healthcare has been at the forefront of providing innovative diagnostic 
                solutions to hospitals, medical colleges, and diagnostic centers. As an authorized partner 
                of globally recognized brands like Siemens, Vector Biotek, Agappe, and Randox, we deliver 
                unmatched quality and reliability.
              </p>
              <ul className="space-y-3 mb-8">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <div className="space-y-4">
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardContent className="p-6">
                    <Shield className="w-10 h-10 mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2">Quality Assurance</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Compliance with international healthcare standards
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2">Expert Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Dedicated technical team for all your needs
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2">10+ Years</h3>
                    <p className="text-muted-foreground text-sm">
                      A decade of trusted healthcare partnerships
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-accent-foreground border-0">
                  <CardContent className="p-6">
                    <Award className="w-10 h-10 mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2">Certified Partner</h3>
                    <p className="text-accent-foreground/80 text-sm">
                      Authorized distributor of leading brands
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Diagnostic Solutions
            </h2>
            <p className="text-muted-foreground">
              We offer a complete range of diagnostic equipment and laboratory solutions 
              from world-renowned manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link key={category.title} to={category.href}>
                <Card className={`group h-full cursor-pointer hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Partner with Us for Excellence in Healthcare
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join 50+ leading hospitals and healthcare institutions who trust AMS Healthcare 
              for their diagnostic needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white" size="xl">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
