import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import agappeLogo from "@/assets/agappe-logo.png";
import mispaRevo from "@/assets/mispa-revo.png";
import mispaChemDx from "@/assets/mispa-chemdx.jpg";
import mispaHbx from "@/assets/mispa-hbx.jpg";
import pathfast from "@/assets/pathfast.png";
import mispaA1c from "@/assets/mispa-a1c.png";

const products = [
  {
    name: "Mispa Revo",
    image: mispaRevo,
    category: "Point of Care",
    description: "Advanced compact immunoassay analyzer designed for rapid and accurate point-of-care testing with intuitive touchscreen interface.",
    features: [
      "Compact desktop design",
      "Touchscreen interface",
      "Multiple test parameters",
      "Quick turnaround time",
      "Easy-to-use operation",
      "Built-in quality control",
    ],
    applications: ["Emergency Care", "ICU", "Clinics", "Small Laboratories"],
  },
  {
    name: "Mispa Chem Dx",
    image: mispaChemDx,
    category: "Clinical Chemistry",
    description: "Fully automated clinical chemistry analyzer with centrifugal disc technology for high-throughput laboratory testing.",
    features: [
      "Centrifugal disc technology",
      "High throughput capacity",
      "Compact footprint",
      "Automated operation",
      "Wide test menu",
      "Quality control management",
    ],
    applications: ["Clinical Laboratories", "Hospital Labs", "Diagnostic Centers", "Research Labs"],
  },
  {
    name: "Q-3 Plus",
    category: "Electrolyte Analyzer",
    description: "Advanced electrolyte analyzer providing rapid and accurate measurement of critical electrolyte parameters.",
    features: [
      "Rapid analysis time",
      "Multiple electrolyte parameters",
      "Low sample volume",
      "Maintenance-free electrodes",
      "User-friendly interface",
      "Compact design",
    ],
    applications: ["ICU", "Emergency", "Dialysis Centers", "Point of Care"],
  },
  {
    name: "Mispa HbX",
    image: mispaHbx,
    category: "Hemoglobin Analyzer",
    description: "Portable hemoglobin and hematocrit analyzer for rapid on-site testing with reference range display.",
    features: [
      "Portable design",
      "Rapid results",
      "Reference range display",
      "Low sample volume",
      "Battery operated option",
      "Data storage capability",
    ],
    applications: ["Blood Banks", "Camps", "Clinics", "Remote Testing"],
  },
  {
    name: "PATHFAST",
    image: pathfast,
    category: "Immunoassay System",
    description: "Compact immunoanalyzer delivering rapid, reliable results for cardiac markers, inflammation, and other critical parameters.",
    features: [
      "STAT immunoassay testing",
      "Cardiac marker panels",
      "Rapid turnaround time",
      "Compact desktop design",
      "Barcode scanning",
      "Multiple sample types",
    ],
    applications: ["Cardiac Care", "Emergency Medicine", "ICU", "STAT Labs"],
  },
  {
    name: "Mispa A1C",
    image: mispaA1c,
    category: "Diabetes Management",
    description: "Portable HbA1c analyzer for diabetes monitoring with NGSP certified accurate results.",
    features: [
      "NGSP certified",
      "Portable design",
      "Quick results",
      "Small sample volume",
      "Memory storage",
      "Easy operation",
    ],
    applications: ["Diabetes Clinics", "Primary Care", "Endocrinology", "Health Camps"],
  },
];

export default function AgappeProductsPage() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">Agappe Products</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-healthcare-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* <img src={agappeLogo} alt="Agappe" className="h-8 mb-6" /> */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Agappe Products
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Advanced point-of-care and clinical chemistry solutions designed for accuracy, speed, and 
              reliability in diverse healthcare settings from small clinics to large hospitals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">Point of Care</Badge>
              <Badge variant="secondary" className="px-4 py-2">Clinical Chemistry</Badge>
              <Badge variant="secondary" className="px-4 py-2">Immunoassay</Badge>
              <Badge variant="secondary" className="px-4 py-2">Diabetes Care</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-muted/50 to-muted p-8 flex items-center justify-center min-h-[280px]">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-56 w-auto object-contain"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">{product.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{product.category}</Badge>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {product.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, i) => (
                            <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Footer */}
                <div className="px-6 py-4 bg-muted/30 border-t flex justify-end gap-3">
                  <Link to="/contact">
                    <Button variant="default" size="sm">
                      Enquire Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Need Help Selecting the Right Agappe Product?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team can help you choose the perfect diagnostic solution for your clinical needs.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Contact Our Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
