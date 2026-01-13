import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  Package,
  HeartPulse,
  Shield,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Sales & Installation",
    description: "Complete sales and professional installation of diagnostic equipment from leading manufacturers.",
    features: [
      "Siemens ABG & Urine Analysers",
      "Vector Bio-Chemistry & Haematology systems",
      "Agappe POC and Acute Care solutions",
      "Randox Quality Controls",
      "Site preparation guidance",
      "Professional installation",
    ],
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Regular preventive maintenance to ensure optimal performance and longevity of your equipment.",
    features: [
      "Scheduled maintenance visits",
      "Performance optimization",
      "Parts replacement",
      "Calibration services",
      "Documentation & reports",
      "Extended equipment life",
    ],
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "Dedicated technical support team available for troubleshooting and repairs.",
    features: [
      "Phone & email support",
      "On-site service visits",
      "Quick response time",
      "Experienced technicians",
      "Genuine spare parts",
      "System upgrades",
    ],
  },
  {
    icon: HeartPulse,
    title: "Rapid Cards",
    description: "Supply of rapid cards for quick and accurate disease detection.",
    features: [
      "Dengue NS1, IgM/IgG",
      "Malaria Pf/Pv",
      "HIV 1/2 Antibody",
      "HCV Antibody",
      "HBsAg",
      "Typhoid & more",
    ],
  },
  {
    icon: Shield,
    title: "Quality Control Solutions",
    description: "Randox Quality Controls and EQA solutions for laboratory accuracy assurance.",
    features: [
      "Multi-analyte controls",
      "External Quality Assessment",
      "NABL compliance support",
      "Performance monitoring",
      "Peer comparison reports",
      "Accreditation assistance",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Comprehensive training programs for laboratory staff on equipment operation and maintenance.",
    features: [
      "Operator training",
      "Best practices workshops",
      "Troubleshooting guides",
      "Application training",
      "Refresher courses",
      "Documentation support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 text-primary-foreground text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From installation to maintenance, we provide end-to-end support for all your 
              diagnostic equipment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Complete Support Services
            </h2>
            <p className="text-muted-foreground">
              We provide comprehensive support throughout the lifecycle of your diagnostic equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`h-full animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Trusted Service Excellence
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Technicians</h4>
                    <p className="text-muted-foreground text-sm">
                      Our team of certified technicians has extensive experience with all major diagnostic equipment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quick Response Time</h4>
                    <p className="text-muted-foreground text-sm">
                      We understand the critical nature of healthcare and respond promptly to all service requests.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Genuine Parts</h4>
                    <p className="text-muted-foreground text-sm">
                      We use only genuine OEM parts to ensure the reliability and longevity of your equipment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">04</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Comprehensive Coverage Across Tamil Nadu</h4>
                    <p className="text-muted-foreground text-sm">
                      We provide complete service coverage across all of Tamil Nadu, including major cities: 
                      Chennai, Madurai, Coimbatore, Trichy, Thanjavur, Nagercoil, Salem, and Tirunelveli.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-6">
                  Need Service Support?
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Our technical team is ready to assist you with installation, maintenance, 
                  calibration, and troubleshooting. Contact us today.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <span className="text-primary-foreground">📞</span>
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Call Us</div>
                      <a href="tel:+919444208521" className="font-semibold hover:underline">
                        +91-9444208521
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <span className="text-primary-foreground">✉️</span>
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Email Us</div>
                      <a href="mailto:amshealthcarechennai@gmail.com" className="font-semibold hover:underline">
                        amshealthcarechennai@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="block mt-8">
                  <Button variant="white" className="w-full">
                    Request Service
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contact us today to discuss your requirements and discover how we can support your healthcare facility.
            </p>
            <Link to="/contact">
              <Button variant="white" size="xl">
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
