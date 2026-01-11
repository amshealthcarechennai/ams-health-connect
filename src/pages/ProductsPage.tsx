import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Microscope,
  FlaskConical,
  TestTube2,
  HeartPulse,
  Shield,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const productCategories = [
  {
    id: "siemens",
    title: "Siemens Products",
    icon: Microscope,
    products: [
      {
        name: "Siemens ePOC Blood Gas Analyzer",
        description: "Handheld, wireless blood gas testing system designed for point-of-care environments. Delivers lab-quality results in critical care, ICU, emergency, and operating room settings.",
        features: [
          "Results in under 1 minute",
          "Wireless connectivity",
          "Comprehensive test menu",
          "Portable and easy to use",
          "Integrated quality management",
        ],
        applications: "ICU, Emergency, OR, NICU, Transport Medicine",
        link: "https://www.siemens-healthineers.com/en-in/blood-gas/blood-gas-systems/epoc-nxs",
      },
      {
        name: "Siemens Urine Analyzer",
        description: "Advanced urine analysis solutions for routine and specialized testing in clinical laboratories.",
        features: [
          "High throughput testing",
          "Automated workflow",
          "Accurate results",
          "Easy maintenance",
        ],
        applications: "Clinical Laboratories, Hospital Labs, Diagnostic Centers",
      },
    ],
  },
  {
    id: "vector",
    title: "Vector Biotek Products",
    icon: FlaskConical,
    products: [
      {
        name: "Bio-Chemistry Analyzers",
        description: "Comprehensive biochemistry solutions for clinical chemistry testing, including fully automated and semi-automated analyzers.",
        features: [
          "Wide range of parameters",
          "High precision and accuracy",
          "User-friendly interface",
          "Low maintenance",
          "Quality reagents available",
        ],
        applications: "Hospital Labs, Diagnostic Centers, Research Labs",
        link: "https://vector.thebeacongroup.co.in/products",
      },
      {
        name: "Haematology Analyzers",
        description: "Advanced haematology systems for complete blood count analysis and related testing.",
        features: [
          "3-part and 5-part differential",
          "High sample throughput",
          "Compact design",
          "Easy operation",
          "Reliable results",
        ],
        applications: "Hospital Labs, Clinics, Blood Banks",
        link: "https://vector.thebeacongroup.co.in/products",
      },
    ],
  },
  {
    id: "rapid",
    title: "Rapid Cards",
    icon: TestTube2,
    products: [
      {
        name: "Infectious Disease Rapid Tests",
        description: "Quick and accurate rapid diagnostic cards for detection of various infectious diseases.",
        features: [
          "Results in 10-15 minutes",
          "No equipment required",
          "Easy to use",
          "Room temperature storage",
          "High sensitivity & specificity",
        ],
        tests: [
          "Dengue NS1, IgM/IgG",
          "Malaria Pf/Pv",
          "HIV 1/2 Antibody",
          "HCV Antibody",
          "HBsAg",
          "Typhoid IgM/IgG",
        ],
        applications: "Hospitals, PHCs, Clinics, Emergency Departments",
      },
    ],
  },
  {
    id: "agappe",
    title: "Agappe Products",
    icon: HeartPulse,
    products: [
      {
        name: "Point-of-Care Solutions",
        description: "Comprehensive POC testing solutions for rapid, accurate diagnostics at the patient's bedside.",
        features: [
          "Cardiac markers",
          "Diabetes management",
          "Coagulation testing",
          "Critical care parameters",
          "Easy-to-use devices",
        ],
        applications: "ICU, Emergency, Cardiology, Diabetes Clinics",
        link: "https://www.agappe.com/in/point-of-care-testing.html",
      },
      {
        name: "Acute Care Solutions",
        description: "Advanced acute care testing systems for rapid critical care diagnostics.",
        features: [
          "Blood gas analysis",
          "Electrolyte testing",
          "Metabolite panels",
          "Compact systems",
          "Quick turnaround time",
        ],
        applications: "ICU, OR, Emergency, NICU",
        link: "https://www.agappe.com/in/point-of-care-testing.html",
      },
    ],
  },
  {
    id: "randox",
    title: "Randox Controls",
    icon: Shield,
    products: [
      {
        name: "Quality Controls",
        description: "Comprehensive quality control solutions for clinical laboratories ensuring accuracy and reliability of test results.",
        features: [
          "Multi-analyte controls",
          "Wide range of parameters",
          "Stable and consistent",
          "Long shelf life",
          "Global traceability",
        ],
        applications: "All Clinical Laboratories",
        link: "https://www.randox.com/",
      },
      {
        name: "EQA Programs",
        description: "External Quality Assessment programs for laboratory proficiency testing and accreditation compliance.",
        features: [
          "Comprehensive coverage",
          "Regular assessment cycles",
          "Detailed reports",
          "Peer comparison",
          "Accreditation support",
        ],
        applications: "NABL Accredited Labs, Hospital Labs",
        link: "https://www.randox.com/",
      },
      {
        name: "Reagents",
        description: "High-quality reagents for clinical chemistry, immunoassay, and specialized testing.",
        features: [
          "High purity",
          "Consistent performance",
          "Wide compatibility",
          "Competitive pricing",
        ],
        applications: "Clinical Chemistry Labs, Immunology Labs",
        link: "https://www.randox.com/",
      },
    ],
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

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-background" : "gradient-section"}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {category.products.map((product) => (
                <Card key={product.name} className="h-full">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{product.description}</p>

                    {product.features && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {"tests" in product && product.tests && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Available Tests</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.tests.map((test) => (
                            <span
                              key={test}
                              className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                            >
                              {test}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap gap-3">
                      <Link to="/contact">
                        <Button variant="default">
                          Enquire Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      {product.link && (
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline">
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

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
