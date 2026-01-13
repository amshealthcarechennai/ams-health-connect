import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Clock,
  Shield,
  Target,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality & Accuracy",
    description: "We are committed to providing diagnostic solutions that meet the highest standards of quality and accuracy.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Safety",
    description: "Every product and service we offer is designed with patient safety as the top priority.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Our long-term partnerships are built on trust, reliability, and consistent performance.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated technical team providing installation, calibration, and maintenance support.",
  },
];

const highlights = [
  "Nearly a decade of experience in diagnostic and critical care solutions",
  "Authorized partner and supplier of Siemens, Vector Biotek, Agappe, and Randox",
  "Specialized expertise in critical care diagnostics and routine laboratory testing",
  "Strong focus on patient safety, diagnostic accuracy, and healthcare compliance",
  "Dedicated technical support team for installation, calibration, and maintenance",
  "Proven track record with multi-specialty hospitals and diagnostic chains",
];

const clients = [
  "Apollo Hospitals",
  "Gleneagles Hospitals – Chennai",
  "Kauvery Hospitals – Chennai",
  "Anderson Diagnostics",
  "Velammal Medical College & Hospitals – Madurai",
  "Meenakshi Medical Mission – Madurai",
  "Hospitals in Nagercoil",
  "Hospitals in Coimbatore",
  "Hospitals in Trichy",
  "Meenakshi Hospitals – Tanjavur",
  "Revvity Health Sciences Pvt Ltd – Chennai",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-14 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5 text-primary-foreground text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Trusted Healthcare Partner
            </h1>
            <p className="text-primary-foreground/80 text-base leading-relaxed">
              Since 2015, AMS Healthcare has been serving hospital needs and medical laboratory 
              requirements with a strong commitment to quality, accuracy, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                A Decade of Excellence in Healthcare
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                AMS Healthcare was established in 2015 with a vision to bridge the gap between 
                world-class diagnostic technology and healthcare institutions in Tamil Nadu. 
                Over the years, we have grown to become a trusted partner for leading hospitals, 
                medical colleges, and diagnostic centers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                As an authorized partner of globally recognized brands such as Siemens, Vector Biotek, 
                Agappe, and Randox, we bring cutting-edge diagnostic solutions that ensure accuracy, 
                reliability, and patient safety.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold text-foreground">10+</div>
                    <div className="text-muted-foreground text-xs">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold text-foreground">50+</div>
                    <div className="text-muted-foreground text-xs">Hospital Partners</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-xl border p-6 animate-slide-in-right">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Why Choose Us</h3>
              <ul className="space-y-3">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-14 gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-sm">
              Our core values guide every decision we make and every partnership we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <Card key={value.title} className={`h-full animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Served */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Clients</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
              Hospitals & Institutions Served
            </h2>
            <p className="text-muted-foreground text-sm">
              We are proud to partner with leading healthcare institutions across Tamil Nadu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center gap-3 bg-card rounded-lg border p-3 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-primary-foreground/80 text-base mb-6">
              Contact us today to learn how AMS Healthcare can support your diagnostic needs.
            </p>
            <Link to="/contact">
              <Button variant="white" size="lg">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
