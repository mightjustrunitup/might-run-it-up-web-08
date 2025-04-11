
import React, { useState } from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Rocket, 
  Target, 
  Users, 
  CheckCircle,
  LineChart,
  Globe,
  TrendingUp,
  BarChart2,
  Briefcase,
  PieChart,
  Award
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceDetails = [
    {
      id: 0,
      icon: <BarChart3 size={36} className="text-gold" />,
      name: "Strategic Consulting",
      description: "Comprehensive business analysis and strategic guidance to optimize operations and drive growth.",
      benefits: [
        "Detailed business performance analysis",
        "Competitive landscape evaluation",
        "Strategic roadmap development",
        "Implementation support and guidance"
      ],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 1,
      icon: <Rocket size={36} className="text-gold" />,
      name: "Market Expansion",
      description: "Data-driven market entry and development strategies to accelerate growth and capture new opportunities.",
      benefits: [
        "Market opportunity assessment",
        "Entry strategy development",
        "Partnership and acquisition guidance",
        "International expansion planning"
      ],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      icon: <Target size={36} className="text-gold" />,
      name: "Digital Transformation",
      description: "Leverage cutting-edge technology to revolutionize your business processes and customer experiences.",
      benefits: [
        "Digital maturity assessment",
        "Technology stack evaluation",
        "Implementation roadmap",
        "Change management support"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      icon: <Users size={36} className="text-gold" />,
      name: "Brand Development",
      description: "Create compelling brand experiences that resonate with your audience and drive customer loyalty.",
      benefits: [
        "Brand positioning strategy",
        "Visual identity development",
        "Customer experience design",
        "Marketing strategy integration"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <Hero
        title="Our Premium Services"
        subtitle="Comprehensive business solutions tailored to your unique challenges and goals."
        backgroundImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
      />

      {/* Core Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">What We Offer</span>
            <h2 className="heading-lg mt-2 mb-6">Core Services</h2>
            <p className="text-gray-700 text-lg">
              Our comprehensive suite of services is designed to address your most pressing business
              challenges and capitalize on emerging opportunities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDetails.map((service, index) => (
              <AnimatedSection
                key={service.name}
                direction="up"
                delay={(index + 1) * 100}
                className={`card-luxury h-full cursor-pointer transition-all duration-300 ${
                  activeTab === service.id ? "ring-2 ring-gold shadow-xl" : ""
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  className={`text-navy hover:text-gold p-0 justify-start ${
                    activeTab === service.id ? "text-gold" : ""
                  }`}
                  variant="link"
                  onClick={() => setActiveTab(service.id)}
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-gold uppercase font-semibold tracking-wider">Service Spotlight</span>
              <h2 className="heading-lg mt-2 mb-6">{serviceDetails[activeTab].name}</h2>
              <p className="text-gray-700 mb-6 text-lg">
                {serviceDetails[activeTab].description}
              </p>
              <div className="space-y-4 mb-8">
                {serviceDetails[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-gold mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="btn-primary">
                <Link to="/contact">
                  Request a Consultation <ArrowRight size={18} />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={serviceDetails[activeTab].image}
                  alt={serviceDetails[activeTab].name}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">Our Methodology</span>
            <h2 className="heading-lg mt-2 mb-6 text-white">The MightJustRunItUp Approach</h2>
            <p className="text-gray-300 text-lg">
              Our proven methodology ensures we deliver consistent, high-quality results for every client engagement.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                icon: <Globe size={36} className="text-gold mb-4" />,
                description: "We conduct a comprehensive analysis of your business, market position, and competitive landscape."
              },
              {
                step: "02",
                title: "Strategize",
                icon: <LineChart size={36} className="text-gold mb-4" />,
                description: "We develop tailored strategies aligned with your business objectives and market opportunities."
              },
              {
                step: "03",
                title: "Implement",
                icon: <TrendingUp size={36} className="text-gold mb-4" />,
                description: "We execute strategies with precision, adapting to changing conditions and emerging insights."
              },
              {
                step: "04",
                title: "Optimize",
                icon: <BarChart2 size={36} className="text-gold mb-4" />,
                description: "We continuously measure results, refine approaches, and ensure sustainable long-term success."
              }
            ].map((step, index) => (
              <AnimatedSection
                key={step.title}
                direction="up"
                delay={(index + 1) * 100}
              >
                <div className="bg-navy-light p-8 rounded-lg relative h-full">
                  <span className="absolute -top-6 -left-6 bg-gold w-12 h-12 rounded-lg flex items-center justify-center text-navy font-bold text-xl">
                    {step.step}
                  </span>
                  {step.icon}
                  <h3 className="font-display text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">Industries</span>
            <h2 className="heading-lg mt-2 mb-6">Specialized Expertise</h2>
            <p className="text-gray-700 text-lg">
              We bring deep industry knowledge and specialized expertise to help you navigate complex challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase size={36} className="text-navy" />,
                industry: "Financial Services",
                description: "Navigate regulatory challenges, optimize operations, and drive digital innovation."
              },
              {
                icon: <PieChart size={36} className="text-navy" />,
                industry: "Technology",
                description: "Accelerate product development, optimize go-to-market strategies, and scale operations."
              },
              {
                icon: <Award size={36} className="text-navy" />,
                industry: "Luxury & Retail",
                description: "Enhance brand positioning, optimize customer experiences, and expand market presence."
              }
            ].map((industry, index) => (
              <AnimatedSection
                key={industry.industry}
                direction="up"
                delay={(index + 1) * 100}
              >
                <div className="card-luxury border-t-4 border-gold h-full">
                  <div className="p-4 rounded-full bg-gray-100 w-fit mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-4">{industry.industry}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <AnimatedSection direction="right">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to elevate your business?
                  </h2>
                  <p className="text-gray-200 text-lg">
                    Schedule a consultation to discuss how our services can help you achieve your business objectives.
                  </p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-2 text-center lg:text-right">
                <AnimatedSection direction="left" delay={200}>
                  <Button asChild className="btn-secondary btn-lg">
                    <Link to="/contact">
                      Schedule a Consultation <ArrowRight size={18} />
                    </Link>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
