import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, FileText, Beaker, Droplet, Activity, TestTube } from "lucide-react";

// Import product images
import unikon480 from "@/assets/unikon-480.jpg";
import unikon230 from "@/assets/unikon-230.jpg";
import unikon120 from "@/assets/unikon-120.jpg";
import unikonVchemNext from "@/assets/unikon-vchem-next.jpg";
import unikonLyte5 from "@/assets/unikon-lyte-5.jpg";
import unikonLyte3 from "@/assets/unikon-lyte-3.jpg";
import unikon23s from "@/assets/unikon-23s.jpg";

const categories = [
  { id: "biochemistry", label: "Biochemistry", icon: Beaker },
  { id: "electrolyte", label: "Electrolyte", icon: Droplet },
  { id: "haematology", label: "Haematology", icon: Activity },
  { id: "immunoassay", label: "Immunoassay", icon: TestTube },
];

const biochemistryProducts = [
  {
    name: "UNIKON 480",
    image: unikon480,
    description: "Fully automated, random access biochemistry analyzer delivering up to 400 tests/hour with high accuracy.",
    features: [
      "Up to 400 tests/hour throughput",
      "Large cooled reagent tray",
      "Teflon-coated mixer",
      "Ceramic piston dispenser",
      "Closed optical system for long-term precision"
    ]
  },
  {
    name: "UNIKON 230",
    image: unikon230,
    description: "Automated random access analyzer designed for low-to-high workloads with 24-hour onboard refrigeration.",
    features: [
      "24-hour onboard refrigeration",
      "STAT sample loading",
      "Ceramic piston dispensing",
      "Closed optical system",
      "Suitable for routine and advanced testing"
    ]
  },
  {
    name: "UNIKON 120",
    image: unikon120,
    description: "Compact automated biochemistry analyzer for low-to-medium workloads.",
    features: [
      "Precision reagent/sample probes",
      "Onboard cooling",
      "Accurate inventory management",
      "Reliable routine testing performance",
      "Compact design"
    ]
  },
  {
    name: "UNIKON VCHEM NEXT",
    image: unikonVchemNext,
    description: "3-in-1 semi-auto biochemistry analyzer supporting clinical chemistry, turbidimetry, and coagulation testing.",
    features: [
      "Clinical chemistry testing",
      "Turbidimetry capability",
      "Coagulation testing",
      "Dual cuvette system",
      "Dedicated coagulation software"
    ]
  }
];

const haematologyProducts = [
  {
    name: "UNIKON 5 NEXT",
    image: null,
    description: "High-end hematology analyzer offering 49 parameters including Retic analysis.",
    features: [
      "49 parameters with Retic analysis",
      "2D and 3D scatter plots",
      "Low sample volume requirement",
      "Eco-friendly reagents",
      "Advanced laser scattering technology"
    ]
  },
  {
    name: "UNIKON 5",
    image: null,
    description: "Compact 5-PDA hematology analyzer with Tri-Angle Laser Scatter technology.",
    features: [
      "5-part differential analysis",
      "Tri-Angle Laser Scatter technology",
      "High precision platelet analysis",
      "Large result storage",
      "Full data and graphics"
    ]
  },
  {
    name: "UNIKON 3",
    image: null,
    description: "Routine hematology analyzer with throughput up to 80 samples/hour.",
    features: [
      "80 samples/hour throughput",
      "Large touchscreen interface",
      "Minimal sample volume",
      "Extensive result storage",
      "User-friendly operation"
    ]
  },
  {
    name: "UNIKON 23S",
    image: unikon23s,
    description: "Cost-effective hematology analyzer requiring only 9 µL sample volume.",
    features: [
      "Only 9 µL sample volume",
      "Ideal for pediatric testing",
      "Double chamber analysis",
      "Reliable routine testing",
      "Cost-effective operation"
    ]
  },
  {
    name: "BC 30",
    image: null,
    description: "Space-saving 3-PDA hematology analyzer with double chamber accuracy.",
    features: [
      "3-part differential analysis",
      "Double chamber accuracy",
      "Large data storage",
      "Two-reagent operation",
      "Space-saving design"
    ]
  }
];

const hba1cProducts = [
  {
    name: "UNIKON GH+",
    image: null,
    description: "IEC HPLC-based analyzer for rapid HbA1c testing with 130-second test time.",
    features: [
      "130-second test time",
      "IEC HPLC-based technology",
      "Dual-wavelength detection",
      "Superior fraction separation",
      "Stable pressure control"
    ]
  }
];

const electrolyteProducts = [
  {
    name: "UNIKON LYTE 5",
    image: unikonLyte5,
    description: "Advanced electrolyte analyzer measuring Na⁺, K⁺, Cl⁻, iCa²⁺, and pH.",
    features: [
      "Na⁺, K⁺, Cl⁻, iCa²⁺, pH measurement",
      "Multi-biosensor technology",
      "Maintenance-free electrodes",
      "Closed reagent packs",
      "High accuracy"
    ]
  },
  {
    name: "UNIKON LYTE 3",
    image: unikonLyte3,
    description: "Compact electrolyte analyzer for Na⁺, K⁺, and Cl⁻ testing.",
    features: [
      "Na⁺, K⁺, Cl⁻ testing",
      "Efficient microfluidic design",
      "Reliable performance",
      "Compact footprint",
      "Easy operation"
    ]
  }
];

const poctProducts = [
  {
    name: "UNIKON PRIMA",
    image: null,
    description: "Compact quantitative point-of-care analyzer with Android OS.",
    features: [
      "Android OS interface",
      "Multiplex testing capability",
      "Built-in thermal printer",
      "Patient data management",
      "Portable design"
    ]
  }
];

const immunoassayProducts = [
  {
    name: "MAGLUMI X8",
    image: null,
    description: "High-throughput CLIA analyzer delivering up to 600 tests/hour.",
    features: [
      "600 tests/hour throughput",
      "Magnetic microbead separation",
      "Contamination-free operation",
      "High sensitivity",
      "Walk-away testing"
    ]
  },
  {
    name: "MAGLUMI X6",
    image: null,
    description: "Fully automated CLIA system offering walk-away testing.",
    features: [
      "Walk-away testing",
      "High sample capacity",
      "Uninterrupted workflow",
      "Fully automated operation",
      "Comprehensive menu"
    ]
  },
  {
    name: "MAGLUMI X3",
    image: null,
    description: "Space-efficient CLIA analyzer with continuous loading.",
    features: [
      "Continuous sample loading",
      "Minimal light interference",
      "Intuitive monitoring",
      "Space-efficient design",
      "Reliable results"
    ]
  },
  {
    name: "MAGLUMI 2000",
    image: null,
    description: "High-sensitivity CLIA system with 24-hour ready operation.",
    features: [
      "24-hour ready operation",
      "Extended reagent stability",
      "High sensitivity",
      "Broad test menu",
      "Reliable performance"
    ]
  },
  {
    name: "MAGLUMI 800",
    image: null,
    description: "Compact CLIA analyzer for small-to-medium laboratories.",
    features: [
      "Extensive test menu",
      "Bi-directional LIS connectivity",
      "Compact design",
      "Easy operation",
      "Cost-effective"
    ]
  }
];

const ProductCard = ({ product }: { product: typeof biochemistryProducts[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
      {product.image ? (
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
      ) : (
        <div className="text-6xl font-bold text-muted-foreground/20">
          {product.name.split(' ')[0]}
        </div>
      )}
    </div>
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{product.name}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
      <ul className="space-y-1.5 mb-6 flex-1">
        {product.features.slice(0, 4).map((feature, i) => (
          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-auto">
        <Link to="/contact" className="flex-1">
          <Button variant="default" size="sm" className="w-full gap-1">
            <Phone className="w-3 h-3" />
            Enquire
          </Button>
        </Link>
        <Button variant="outline" size="sm" className="gap-1">
          <FileText className="w-3 h-3" />
          Brochure
        </Button>
      </div>
    </CardContent>
  </Card>
);

const VectorBioTekPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Vector BioTek Products</span>
          </div>
          
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Vector BioTek Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive acute care solutions including biochemistry, electrolyte, haematology, and immunoassay analyzers 
              designed for laboratories of all sizes.
            </p>
          </div>

          {/* Category Quick Links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border hover:border-primary hover:text-primary transition-colors"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Biochemistry Section */}
      <section className="py-16 md:py-20" id="biochemistry">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Beaker className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Biochemistry Analyzers
              </h2>
              <p className="text-muted-foreground">Clinical chemistry solutions for all laboratory needs</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {biochemistryProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Electrolyte Section */}
      <section className="py-16 md:py-20 bg-muted/30" id="electrolyte">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Droplet className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Electrolyte Analyzers
              </h2>
              <p className="text-muted-foreground">Precise electrolyte measurement solutions</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {electrolyteProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
            {poctProducts.map((product, i) => (
              <ProductCard key={`poct-${i}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Haematology Section */}
      <section className="py-16 md:py-20" id="haematology">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Haematology Analyzers
              </h2>
              <p className="text-muted-foreground">Complete blood count and differential analysis</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {haematologyProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>

          {/* HbA1c Analyzer */}
          <div className="mt-12">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">HbA1c Analyzer</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hba1cProducts.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Immunoassay Section */}
      <section className="py-16 md:py-20 bg-muted/30" id="immunoassay">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <TestTube className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Immunoassay Systems
              </h2>
              <p className="text-muted-foreground">CLIA-based immunoassay analyzers</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {immunoassayProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Need Help Choosing the Right Analyzer?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team of experts can help you select the perfect Vector BioTek solution for your laboratory requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-5 h-5" />
              Contact Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default VectorBioTekPage;
