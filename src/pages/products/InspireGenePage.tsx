import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Syringe, Shield, Target, Beaker } from "lucide-react";
import igSyringe from "@/assets/ig-artery-syringe.jpeg";

const advantages = [
  "Ensures high-quality Arterial blood Gas Samples",
  "Prevents sample dilution",
  "Minimizes calcium binding effects",
  "Guarantees clot-free blood samples (arterial/venous)",
  "Enhances the operational efficiency of Blood Gas analysers",
];

const features = [
  "IG Artery – the solution for precise Arterial blood sampling with 3ml blood sample volume (Pre-set draw volume 1.6ml)",
  "Each unit is sterilized to the highest quality standard for safety assurance",
  "With a coating of 80 IU dry electrolyte/Ca++ balanced heparin",
  "The hard rubber luer cap guarantees no sample spillage, secures samples from air contamination, and prioritizes operator safety",
  "Experience seamless blood draws with our high-quality cyan coloured plunger designed to facilitate a smooth sampling process",
  "Trust IG Artery for efficient and secure blood sampling",
];

const standoutPoints = [
  {
    title: "Versatility",
    description: "IG Artery Sampler is equipped with a universal luer tip, guaranteeing seamless compatibility with all standard needles.",
  },
  {
    title: "Precision",
    description: "Designed for a range of tests such as Blood Gas, pH, Electrolytes, Metabolites, and Oximetry parameters.",
  },
  {
    title: "Compatibility",
    description: "IG Artery Sampler ensures precise sample collection and seamless testing across various blood gas analysers available globally.",
  },
  {
    title: "Accuracy",
    description: "Crafted from specialized plastic, IG Artery Sampler quality minimizes diffusional effects from blood samples, leading to accurate test results.",
  },
  {
    title: "Innovation",
    description: "The IG Artery Plunger, distinguished by its unique cyan colour with high quality plastic, symbolises the importance and need of fresh samples, calm patients, and clear sample sites.",
  },
];

const workflowSteps = [
  { step: 1, text: "Arterial blood samples to be analysed within 25 minutes from the time of withdrawal" },
  { step: 2, text: "Open the cap of the syringe" },
  { step: 3, text: "Do not push the plunger upwards. Insert the needle to draw blood from Artery or draw the blood directly from the A-Line without needle" },
  { step: 4, text: "Draw the blood from Artery or from A-Line" },
  { step: 5, text: "Check and tap the syringe to remove air bubbles" },
  { step: 6, text: "Remove air bubbles if any – gently on the tissue paper" },
  { step: 7, text: "Close the Cap of the syringe" },
  { step: 8, text: "Mix the syringe upwards and downwards gently, roll the syringe gently by keeping in the palm" },
  { step: 9, text: "Place the syringe in the Blood Gas analyser for analysis" },
];

export default function InspireGenePage() {
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
            <span className="text-foreground">Pre-Analytics – IG Inspire Gene</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-healthcare-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Syringe className="w-4 h-4 mr-2" />
                IG Inspire Gene
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                IG Artery ABG Syringes
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                IG Artery brings a cutting-edge solution to the table for arterial blood sample collection, 
                whether it's from A-Line or through arterial puncture.
              </p>
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-lg mb-6">
                <p className="text-primary font-medium">
                  Dry Electrolyte Balanced Lithium Heparin 80 IU
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-4 py-2">3ml Sample Volume</Badge>
                <Badge variant="outline" className="px-4 py-2">Pre-set Draw 1.6ml</Badge>
                <Badge variant="outline" className="px-4 py-2">80 IU Heparin</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-8">
                <img 
                  src={igSyringe}
                  alt="IG Artery ABG Syringe"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Advantages of Using IG Artery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Precision-engineered for optimal arterial blood gas sample collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why IG Artery Stands Out */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Here's Why IG Artery Sampler Stands Out
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standoutPoints.map((point, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {index === 0 && <Target className="w-6 h-6 text-primary" />}
                    {index === 1 && <Beaker className="w-6 h-6 text-primary" />}
                    {index === 2 && <Shield className="w-6 h-6 text-primary" />}
                    {index === 3 && <CheckCircle className="w-6 h-6 text-primary" />}
                    {index === 4 && <Syringe className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Syringe className="w-5 h-5 text-primary" />
                Features of IG Artery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pre-Analytics Workflow */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Pre-Analytics Workflow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these steps for optimal arterial blood gas sample collection
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {workflowSteps.map((item) => (
                <Card key={item.step} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <CardContent className="p-6 pt-12">
                    <p className="text-sm text-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Interested in IG Artery ABG Syringes?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our pre-analytics solutions for arterial blood gas testing.
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
