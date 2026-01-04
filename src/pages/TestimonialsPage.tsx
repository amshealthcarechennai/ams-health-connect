import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Chief Pathologist",
    organization: "Apollo Hospitals, Chennai",
    content: "AMS Healthcare has been our trusted partner for diagnostic equipment for over 5 years. Their Siemens ABG analyzers have significantly improved our critical care diagnostics, and their service support is exceptional.",
    rating: 5,
  },
  {
    name: "Dr. Priya Venkatesh",
    position: "Lab Director",
    organization: "Kauvery Hospitals, Chennai",
    content: "The Vector Biotek analyzers supplied by AMS Healthcare have transformed our laboratory operations. The equipment is reliable, and their technical team provides prompt support whenever needed.",
    rating: 5,
  },
  {
    name: "Dr. Suresh Babu",
    position: "Head of Laboratory",
    organization: "Velammal Medical College, Madurai",
    content: "We have been using Randox quality controls from AMS Healthcare for our NABL accreditation. Their EQA programs and consistent supply have been instrumental in maintaining our laboratory standards.",
    rating: 5,
  },
  {
    name: "Dr. Lakshmi Narayanan",
    position: "Clinical Director",
    organization: "Anderson Diagnostics",
    content: "The rapid diagnostic cards from AMS Healthcare have been invaluable for our quick turnaround requirements. Their product quality and reliability are unmatched in the market.",
    rating: 5,
  },
  {
    name: "Dr. Mohammed Irfan",
    position: "Medical Superintendent",
    organization: "Meenakshi Medical Mission, Madurai",
    content: "AMS Healthcare's preventive maintenance program has ensured zero downtime for our critical diagnostic equipment. Their proactive approach and expertise make them an ideal healthcare partner.",
    rating: 5,
  },
  {
    name: "Dr. Anitha Ramachandran",
    position: "Laboratory Head",
    organization: "Gleneagles Hospitals, Chennai",
    content: "The Agappe POC solutions from AMS Healthcare have revolutionized our bedside testing capabilities. Fast results, reliable equipment, and excellent after-sales support.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
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
              Testimonials
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Hear from healthcare professionals who trust AMS Healthcare for their 
              diagnostic equipment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`h-full animate-fade-in-up animation-delay-${(index % 3 + 1) * 100}`}>
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.organization}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Healthcare Institutions
            </h2>
            <p className="text-muted-foreground">
              Our commitment to quality and service has earned us the trust of top hospitals 
              and diagnostic centers across Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Hospital Partners</div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years of Trust</div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Installations</div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Growing List of Satisfied Clients
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Experience the AMS Healthcare difference. Contact us today to learn more about our products and services.
            </p>
            <Link to="/contact">
              <Button variant="white" size="xl">
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
