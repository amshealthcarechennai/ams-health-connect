import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Globe, 
  Clock, 
  FileCheck,
  Beaker,
  Target,
  Users
} from "lucide-react";
import randoxLogo from "@/assets/randox-logo.png";

const acuseraControlCategories = [
  "Acusera Smart Controls",
  "Blood Gas Controls",
  "Cardiac Controls",
  "Clinical Chemistry Controls",
  "Coagulation and Haematology Controls",
  "Diabetes and Whole Blood Controls",
  "Immunoassay Controls",
  "Immunology / Protein Controls",
  "Infectious Disease (Serology) Controls",
  "Lipid Controls",
  "Molecular Infectious Disease Controls",
  "Novel Controls",
  "Speciality and Research Controls",
  "Therapeutic Drugs Controls",
  "Urine Controls",
  "Customised QC",
];

const qnosticsControlRange = [
  "Blood Borne Viruses",
  "Central Nervous System",
  "Drug Resistance",
  "Gastrointestinal Infections",
  "Respiratory Infections",
  "Sexually Transmitted Infections",
  "Transplant Associated Diseases",
  "Other",
];

const riqasProgrammes = [
  "Anti-Müllerian Hormone (AMH)",
  "Ammonia / Ethanol",
  "Anti-TSH Receptor",
  "Blood Gas",
  "Blood Typing",
  "BNP",
  "Cardiac",
  "Cardiac Plus",
];

const qcmdSchemes = [
  "Bloodborne Virus",
  "Central Nervous System",
  "Congenital Infections",
  "Drug Resistance",
  "Exotic/Emerging Diseases",
  "Gastrointestinal Diseases",
  "Immunocompromised Associated Diseases",
  "Multiple Pathogen/Syndromic",
  "Respiratory Diseases",
  "Sexually Transmitted Infections",
  "Transplant Associated Diseases",
  "Typing",
  "Other",
  "Pilot Studies",
];

export default function RandoxProductsPage() {
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
            <span className="text-foreground">Randox Products</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-healthcare-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img src={randoxLogo} alt="Randox" className="h-12 mb-6" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Randox Products
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                World-leading diagnostic solutions including quality controls, external quality assessment programs, 
                and open-channel reagents trusted by laboratories in over 145 countries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  145+ Countries
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  ISO Accredited
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  90,000+ Users
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="qc" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="qc" className="text-sm md:text-base">Quality Control (QC)</TabsTrigger>
              <TabsTrigger value="eqa" className="text-sm md:text-base">External Quality Assessment</TabsTrigger>
              <TabsTrigger value="reagents" className="text-sm md:text-base">Reagents</TabsTrigger>
            </TabsList>

            {/* Quality Control Tab */}
            <TabsContent value="qc" className="space-y-12">
              {/* Acusera Section */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    Acusera Quality Control
                  </h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Premium third-party quality controls designed to ensure optimal instrument performance 
                    and accurate patient results across your laboratory.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      icon: Shield,
                      title: "Superior Consolidation",
                      description: "Save money, time, and workload by streamlining QC processes"
                    },
                    {
                      icon: Target,
                      title: "Clinically Relevant Levels",
                      description: "Ensure accurate instrument performance and patient results"
                    },
                    {
                      icon: Clock,
                      title: "Unrivalled Stability",
                      description: "Longer working stability, minimising waste and QC costs"
                    },
                    {
                      icon: Beaker,
                      title: "Highly Commutable",
                      description: "QC mimics patient samples for accurate performance evaluation"
                    },
                    {
                      icon: CheckCircle,
                      title: "Trusted Third-Party Controls",
                      description: "Independent controls for multi-platform use"
                    },
                    {
                      icon: FileCheck,
                      title: "Advanced QC Data Management",
                      description: "Automated data management ensuring regulatory compliance"
                    },
                  ].map((benefit, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Control Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Acusera Internal Quality Control Range
                    </CardTitle>
                    <p className="text-muted-foreground">
                      390+ parameters ensuring flexibility and choice for your laboratory
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {acuseraControlCategories.map((category, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{category}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Qnostics Section */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    Randox Qnostics – Quality Controls
                  </h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Molecular quality controls for infectious disease testing, providing whole genome controls 
                    from extraction to detection.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: "Whole Pathogen", desc: "Whole genome controls from extraction to detection" },
                    { title: "True Third Party", desc: "Independent performance assessment supporting ISO 15189" },
                    { title: "Liquid for Ease-of-Use", desc: "Liquid frozen samples reducing handling time" },
                    { title: "Traceability", desc: "Traceable to international reference standards (ISO 17511)" },
                    { title: "Target Pathogen Provided", desc: "Coverage across multiple disease areas" },
                    { title: "Flexible", desc: "Supports routine monitoring, LOD, LOQ, and sensitivity" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Qnostics Control Range</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {qnosticsControlRange.map((item, index) => (
                        <Badge key={index} variant="secondary" className="px-4 py-2">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* EQA Tab */}
            <TabsContent value="eqa" className="space-y-12">
              {/* RIQAS Section */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    RIQAS – Randox International Quality Assessment Scheme
                  </h2>
                  <p className="text-muted-foreground max-w-3xl">
                    World's largest EQA provider with 90,000+ users in 140+ countries, offering comprehensive 
                    external quality assessment for clinical laboratories.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: Clock, title: "Save Time and Money", desc: "Efficient EQA programs streamline your workflow" },
                    { icon: Users, title: "Large Peer Groups", desc: "Compare performance with laboratories worldwide" },
                    { icon: FileCheck, title: "Timely Error Detection", desc: "72-hour reports for quick corrective action" },
                    { icon: Target, title: "Flexible Options", desc: "Customizable programs for your specific needs" },
                    { icon: Award, title: "ISO/IEC 17043:2023 Accredited", desc: "Internationally recognized accreditation" },
                    { icon: Beaker, title: "Commutable Samples", desc: "High-quality clinically relevant levels" },
                  ].map((benefit, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>RIQAS EQA Programmes</CardTitle>
                    <p className="text-muted-foreground">330+ parameters across 37 programmes</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {riqasProgrammes.map((item, index) => (
                        <Badge key={index} variant="outline" className="px-4 py-2">
                          {item}
                        </Badge>
                      ))}
                      <Badge variant="secondary" className="px-4 py-2">+ 29 more programmes</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* QCMD Section */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    QCMD – Molecular EQA
                  </h2>
                  <p className="text-muted-foreground max-w-3xl">
                    World-leading molecular EQA and proficiency testing scheme for infectious disease testing, 
                    with 15,000+ participants in 120+ countries.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        "15,000+ participants in 120+ countries",
                        "Flexible reporting frequency",
                        "Largest molecular EQA portfolio",
                        "ITEMS online EQA data management",
                        "ISO 17043 accredited",
                        "Comprehensive performance reports",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>EQA Schemes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {qcmdSchemes.map((item, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1.5 text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* RIQAS POC Section */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    RIQAS Point of Care (POC)
                  </h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Independent EQA designed to improve patient safety and accuracy of Point-of-Care Testing.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Ready-to-use liquid samples",
                    "Consolidated EQA programmes",
                    "Traffic-light reports",
                    "Commutable sample matrix",
                    "Independent performance assessment",
                    "Online user portal",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Reagents Tab */}
            <TabsContent value="reagents" className="space-y-8">
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Randox Diagnostic Reagents
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  Open-channel diagnostic reagents covering 100+ disease markers, designed for compatibility 
                  with a wide range of clinical chemistry analyzers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Award, title: "Superior Methodology", desc: "Advanced formulations for accurate results" },
                  { icon: Target, title: "Extensive Test Menu", desc: "100+ disease markers available" },
                  { icon: CheckCircle, title: "Proven Performance", desc: "Low CVs for reliable, consistent results" },
                  { icon: Globe, title: "Open Channel Compatibility", desc: "Works with multiple analyzer platforms" },
                  { icon: Shield, title: "Reduced Costs", desc: "Cost-effective solutions for your laboratory" },
                  { icon: Beaker, title: "Liquid Ready-to-Use", desc: "Convenient format minimizes preparation time" },
                ].map((benefit, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Interested in Randox Products?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how Randox quality control and EQA solutions can benefit your laboratory.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Enquire Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
