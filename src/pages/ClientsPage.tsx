import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";

const clients = [
  {
    name: "Apollo Hospitals",
    location: "Chennai",
    type: "Multi-specialty Hospital",
  },
  {
    name: "Gleneagles Hospitals",
    location: "Chennai",
    type: "Multi-specialty Hospital",
  },
  {
    name: "Kauvery Hospitals",
    location: "Chennai",
    type: "Multi-specialty Hospital",
  },
  {
    name: "Anderson Diagnostics",
    location: "Chennai",
    type: "Diagnostic Center",
  },
  {
    name: "Velammal Medical College & Hospitals",
    location: "Madurai",
    type: "Medical College & Hospital",
  },
  {
    name: "Meenakshi Medical Mission",
    location: "Madurai",
    type: "Multi-specialty Hospital",
  },
  {
    name: "Leading Hospitals",
    location: "Nagercoil",
    type: "Multi-specialty Hospitals",
  },
  {
    name: "Leading Hospitals",
    location: "Coimbatore",
    type: "Multi-specialty Hospitals",
  },
  {
    name: "Leading Hospitals",
    location: "Trichy",
    type: "Multi-specialty Hospitals",
  },
  {
    name: "Meenakshi Hospitals",
    location: "Tanjavur",
    type: "Multi-specialty Hospital",
  },
  {
    name: "Revvity Health Sciences Pvt Ltd",
    location: "Chennai",
    type: "Healthcare Sciences",
  },
];

const regions = [
  { name: "Chennai", count: 4 },
  { name: "Madurai", count: 2 },
  { name: "Coimbatore", count: "Multiple" },
  { name: "Trichy", count: "Multiple" },
  { name: "Tanjavur", count: 1 },
  { name: "Nagercoil", count: "Multiple" },
];

export default function ClientsPage() {
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
              Our Clients
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Trusted by Leading Healthcare Institutions
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We are proud to partner with premier hospitals, medical colleges, and 
              diagnostic centers across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Hospitals & Institutions Served
            </h2>
            <p className="text-muted-foreground">
              From Chennai to Madurai, we serve leading healthcare institutions across the state.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card key={`${client.name}-${client.location}`} className={`animate-fade-in-up animation-delay-${(index % 3 + 1) * 100}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {client.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">{client.location}</p>
                      <p className="text-muted-foreground text-sm">{client.type}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Presence Across Tamil Nadu
            </h2>
            <p className="text-muted-foreground">
              We provide services and support to healthcare institutions throughout the state.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((region) => (
              <Card key={region.name} className="text-center">
                <CardContent className="p-6">
                  <div className="font-heading text-2xl font-bold text-primary mb-1">
                    {region.count}+
                  </div>
                  <div className="text-muted-foreground text-sm">Hospitals</div>
                  <div className="font-semibold text-foreground mt-2">{region.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Authorized Partner of Leading Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Siemens", "Vector Biotek", "Agappe", "Randox"].map((brand) => (
              <Card key={brand} className="text-center hover:shadow-card-hover transition-shadow">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-xl text-foreground">{brand}</div>
                  <div className="text-muted-foreground text-sm mt-1">Authorized Partner</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Become Our Partner
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join our growing network of healthcare partners. Contact us to discuss how we can support your institution.
            </p>
            <Link to="/contact">
              <Button variant="white" size="xl">
                Partner with Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
