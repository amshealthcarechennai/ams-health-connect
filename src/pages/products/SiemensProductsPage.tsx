import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Check, Zap, Shield, Clock, Wifi, FileText, Phone } from "lucide-react";
import siemensLogo from "@/assets/siemens-logo.jpg";
import epocImage from "@/assets/siemens-epoc.png";
import urineAnalyzerImage from "@/assets/siemens-urine-analyzer.jpg";

const SiemensProductsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-10 md:py-14 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Siemens Products</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src={siemensLogo} 
              alt="Siemens Healthineers" 
              className="h-12 md:h-16 object-contain"
            />
            <div>
              <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Siemens Products
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl">
                World-class diagnostic solutions from Siemens Healthineers — advancing clinical excellence through innovation in blood gas analysis and urinalysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ePOC Blood Gas Analyzer Section */}
      <section className="py-16 md:py-20" id="epoc">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Point-of-Care Blood Gas
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Arterial Blood Gas Analyzer – ePOC
              </h2>
              
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Improve outcomes and workflow while transforming care delivery across clinical pathways. 
                  The epoc® Blood Analysis System provides lab-quality results at the point of care—here and now.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The epoc system is a handheld, wireless solution that enables comprehensive blood analysis 
                  at the patient's side using a single room-temperature test card, delivering results in less than one minute.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, title: "Streamlined Workflow", desc: "Patient-side testing reduces complexity" },
                  { icon: Clock, title: "Fast Results", desc: "Results in less than one minute" },
                  { icon: Shield, title: "Easy Inventory", desc: "Single room-temperature test card" },
                  { icon: Wifi, title: "Real-Time Reporting", desc: "Wireless EMR/LIS connectivity" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <Card className="overflow-hidden border-0 shadow-xl">
                <img 
                  src={epocImage}
                  alt="Siemens ePOC Blood Gas Analyzer"
                  className="w-full h-64 md:h-80 object-contain bg-white p-4"
                />
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <Link to="/contact">
                      <Button variant="default" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Enquire Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="gap-2">
                      <FileText className="w-4 h-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-16">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Streamlined Patient-Testing Workflow",
                  desc: "By moving testing to the patient's side, caregivers, patients, and hospital administration benefit from reduced complexity, faster turnaround times, improved patient care, and greater operational efficiency."
                },
                {
                  title: "Accelerated Clinical Decision Making",
                  desc: "Lab-quality results at the bedside empower clinicians to make faster and more confident decisions, improving patient outcomes."
                },
                {
                  title: "Simplified Inventory Management",
                  desc: "A single, bar-coded, room-temperature-stable test card with a full test menu ensures efficient quality assurance and easier inventory control."
                },
                {
                  title: "Real-Time Results and Reporting",
                  desc: "Integrated wireless connectivity enables instant transmission of results to EMR/LIS/HIS systems, providing centralized oversight of decentralized testing."
                }
              ].map((benefit, i) => (
                <Card key={i} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">Clinical Use</h4>
            <p className="text-muted-foreground">
              Test results from the epoc® system correlate with leading point-of-care benchtop blood gas and chemistry analyzers, 
              ensuring reliable and accurate diagnostic outcomes in critical care, ICU, and emergency settings.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-border" />
      </div>

      {/* Urine Analyzer Section */}
      <section className="py-16 md:py-20" id="urine-analyzer">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 lg:sticky lg:top-32">
              <Card className="overflow-hidden border-0 shadow-xl">
                <img 
                  src={urineAnalyzerImage}
                  alt="Siemens CLINITEK Status+ Urine Analyzer"
                  className="w-full h-64 md:h-80 object-contain bg-white p-4"
                />
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <Link to="/contact">
                      <Button variant="default" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Enquire Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="gap-2">
                      <FileText className="w-4 h-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Urinalysis
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Urine Analyzer – CLINITEK Status+
              </h2>
              
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The analyzer automatically checks each test strip for humidity exposure, common sample interferences, 
                  and strip identification, ensuring accurate and clinically reliable results.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Key Advantages
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Auto-checks on every test for increased confidence",
                      "Automatic timing and reading for consistent interpretation",
                      "Connectivity-ready via optional Data Management System upgrade",
                      "Comprehensive POC urinalysis menu including kidney disease detection"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">Ease of Use</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Simple and intuitive touchscreen operation",
                    "Load-and-go testing with automatic timing",
                    "Fast in-office results in ~1 minute",
                    "Automatic printed reports"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">Improved Data Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Detects common sample interferences",
                    "Humidity exposure detection",
                    "Automatic test strip identification",
                    "Eliminates visual subjectivity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">Comprehensive Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Routine urinalysis with CLINITEK Multistix®",
                    "Albumin-to-Creatinine Ratio (ACR)",
                    "Protein-to-Creatinine Ratio testing",
                    "CLINITEST® hCG pregnancy testing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Assays */}
          <div className="mt-12">
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>Assays Supported</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Leukocyte", "Nitrite", "Protein", "Blood", "Glucose", "Ketone", "Bilirubin",
                    "Urobilinogen", "pH", "Specific Gravity", "Creatinine", "Protein-to-Creatinine Ratio",
                    "Albumin", "Albumin-to-Creatinine Ratio", "CLINITEST® hCG Pregnancy Test"
                  ].map((assay, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {assay}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Ready */}
          <div className="mt-8 p-6 bg-secondary/5 rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Future Ready</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Simple connectivity upgrade to CLINITEK Status® Connect System",
                "Barcode reading capability",
                "Seamless LIS/DMS integration"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Interested in Siemens Diagnostic Solutions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about Siemens ePOC Blood Gas Analyzer and Urine Analyzer 
            for your healthcare facility.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-5 h-5" />
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SiemensProductsPage;
