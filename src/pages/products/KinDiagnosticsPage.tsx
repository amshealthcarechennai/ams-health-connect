import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Zap, Target, Shield, Activity } from "lucide-react";

const iChromaTestPanels = [
  "Cardiac Markers (Troponin I, CK-MB, Myoglobin, NT-proBNP, D-Dimer)",
  "Inflammation (CRP, PCT, SAA)",
  "Hormones (TSH, T3, T4, Cortisol, hCG)",
  "Diabetes (HbA1c, Insulin, C-Peptide)",
  "Infectious Disease (Dengue, Malaria, HBsAg, Anti-HCV)",
  "Tumor Markers (AFP, PSA, CEA, CA125)",
  "Fertility (FSH, LH, Prolactin, Testosterone)",
  "Anemia (Ferritin, Vitamin B12, Folate)",
];

const swiftestTestPanels = [
  "Liver Function (ALT, AST, ALP, GGT, Bilirubin, Total Protein, Albumin)",
  "Kidney Function (BUN, Creatinine, Uric Acid)",
  "Lipid Profile (Cholesterol, Triglycerides, HDL, LDL)",
  "Electrolytes (Na+, K+, Cl-, Ca++, Li+)",
  "Glucose & HbA1c",
  "Cardiac Enzymes (CK, CK-MB, LDH)",
  "Pancreatic Function (Amylase, Lipase)",
  "General Chemistry (Total Protein, Albumin, Globulin)",
];

export default function KinDiagnosticsPage() {
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
            <span className="text-foreground">Point of Care – Kin Diagnostics</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-healthcare-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Activity className="w-4 h-4 mr-2" />
              Kin Diagnostics (Swiftest)
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Point of Care Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Cutting-edge immunofluorescence and dry chemistry analyzers from Kin Diagnostics, 
              delivering rapid, accurate point-of-care testing for diverse clinical applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2">Immunofluorescence</Badge>
              <Badge variant="outline" className="px-4 py-2">Dry Chemistry</Badge>
              <Badge variant="outline" className="px-4 py-2">Electrolyte Analysis</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* iChroma II Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Immunofluorescence Reader</Badge>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                iChroma II
              </h2>
              <p className="text-muted-foreground mb-6">
                Advanced immunofluorescence reader providing rapid, quantitative results for a comprehensive 
                range of diagnostic parameters including cardiac markers, hormones, inflammation, and infectious disease.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, label: "Results in 3-15 minutes" },
                  { icon: Target, label: "Quantitative & qualitative tests" },
                  { icon: Shield, label: "POCT certified performance" },
                  { icon: Activity, label: "Wide test menu" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-foreground mb-4">Key Specifications:</h3>
              <div className="space-y-2 mb-6">
                {[
                  "Fluorescence immunoassay technology",
                  "Touchscreen LCD display",
                  "Built-in thermal printer",
                  "Barcode scanner compatible",
                  "USB and LIS connectivity",
                  "Multiple sample types (whole blood, serum, plasma)",
                  "On-board quality control management",
                ].map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle>iChroma II Test Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {iChromaTestPanels.map((panel, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{panel}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Swiftest Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="h-fit order-2 lg:order-1">
              <CardHeader>
                <CardTitle>Swiftest Test Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {swiftestTestPanels.map((panel, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-background">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{panel}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4">Dry Clinical Chemistry</Badge>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Swiftest Dry Chemistry & Electrolyte Analyzer
              </h2>
              <p className="text-muted-foreground mb-6">
                Compact dry chemistry analyzer delivering comprehensive clinical chemistry and electrolyte 
                testing with minimal sample volume and rapid turnaround times.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, label: "Results in 6-12 minutes" },
                  { icon: Target, label: "Low sample volume (6-15µL)" },
                  { icon: Shield, label: "No liquid reagents needed" },
                  { icon: Activity, label: "Integrated electrolytes" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-foreground mb-4">Key Features:</h3>
              <div className="space-y-2 mb-6">
                {[
                  "Dry chemistry technology – no reagent preparation",
                  "Multi-layer film slides for accurate results",
                  "Integrated electrolyte module",
                  "Room temperature reagent storage",
                  "Minimal maintenance requirements",
                  "Whole blood, serum, or plasma samples",
                  "Compact design for POCT settings",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Choose Kin Diagnostics?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for the demands of modern healthcare, delivering reliable results when time matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Rapid Results", desc: "Get actionable results in minutes, not hours" },
              { icon: Target, title: "High Accuracy", desc: "Laboratory-quality results at point of care" },
              { icon: Shield, title: "Easy Operation", desc: "Minimal training required for reliable use" },
              { icon: Activity, title: "Comprehensive Menu", desc: "Wide range of tests on single platform" },
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Ready to Enhance Your Point-of-Care Testing?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us to learn how Kin Diagnostics solutions can improve patient care at your facility.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Request a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
