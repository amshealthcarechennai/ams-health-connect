import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  HeartPulse,
  Shield,
  Zap,
  Syringe,
} from "lucide-react";
import siemensLogo from "@/assets/siemens-logo.png";
import randoxLogo from "@/assets/randox-logo.png";
import agappeLogo from "@/assets/agappe-logo.png";

const productCategories = [
  {
    id: "siemens",
    title: "Siemens Products",
    icon: Microscope,
    logo: siemensLogo,
    description: "World-class diagnostic solutions from Siemens Healthineers including Blood Gas Analyzers and Urine Analyzers for critical care and routine laboratory testing.",
    href: "/products/siemens",
    highlights: ["ePOC Blood Gas Analyzer", "Urine Analyzer – CLINITEK Status+"],
    color: "primary"
  },
  {
    id: "vector-biotek",
    title: "Vector BioTek Products",
    icon: FlaskConical,
    logo: null,
    description: "Comprehensive acute care solutions including biochemistry, electrolyte, haematology, and immunoassay analyzers designed for laboratories of all sizes.",
    href: "/products/vector-biotek",
    highlights: ["Biochemistry Analyzers", "Haematology Analyzers", "Electrolyte Analyzers", "Immunoassay Systems"],
    color: "secondary"
  },
  {
    id: "randox",
    title: "Randox Products",
    icon: Shield,
    logo: randoxLogo,
    description: "Industry-leading quality control, external quality assessment (EQA), and diagnostic reagent solutions for clinical laboratories worldwide.",
    href: "/products/randox",
    highlights: ["Quality Control", "External Quality Assessment (EQA)", "Diagnostic Reagents"],
    color: "primary"
  },
  {
    id: "agappe",
    title: "Agappe Products",
    icon: HeartPulse,
    logo: agappeLogo,
    description: "Point-of-care and acute care solutions featuring advanced analyzers for cardiac markers, diabetes management, and critical care testing.",
    href: "/products/agappe",
    highlights: ["Mispa Revo", "PATHFAST", "Mispa A1C", "Mispa HbX"],
    color: "secondary"
  },
  {
    id: "kin-diagnostics",
    title: "Point of Care – Kin Diagnostics (Swiftest)",
    icon: Zap,
    logo: null,
    description: "Innovative point-of-care testing solutions from Kin Diagnostics including immunofluorescence readers and dry clinical chemistry analyzers.",
    href: "/products/kin-diagnostics",
    highlights: ["iChroma II", "Swiftest Dry Chemistry Analyzer"],
    color: "primary"
  },
  {
    id: "inspire-gene",
    title: "Pre-Analytics – IG Inspire Gene",
    icon: Syringe,
    logo: null,
    description: "Premium pre-analytical solutions for arterial blood gas sample collection ensuring accurate and reliable diagnostic results.",
    href: "/products/inspire-gene",
    highlights: ["IG Artery ABG Syringes"],
    color: "secondary"
  },
];

export default function ProductsPage() {
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
              Our Products
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Diagnostic Solutions
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Explore our range of world-class diagnostic equipment and laboratory solutions 
              from globally recognized manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card 
                key={category.id} 
                className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4"
                style={{ borderTopColor: category.color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--secondary))' }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      category.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <category.icon className={`w-7 h-7 ${
                        category.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                    {category.logo && (
                      <img 
                        src={category.logo} 
                        alt={category.title} 
                        className="h-8 object-contain"
                      />
                    )}
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-6">
                    {category.description}
                  </p>
                  
                  <div className="mb-6 flex-1">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      Featured Products
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.highlights.map((item) => (
                        <span 
                          key={item} 
                          className={`text-xs px-3 py-1.5 rounded-full ${
                            category.color === 'primary' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-secondary/10 text-secondary'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to={category.href} className="mt-auto">
                    <Button variant="default" className="w-full gap-2 group-hover:gap-3 transition-all">
                      View Products
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
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
              Need Help Choosing the Right Solution?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Our expert team is here to help you find the perfect diagnostic solution for your needs.
            </p>
            <Link to="/contact">
              <Button variant="white" size="xl">
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
