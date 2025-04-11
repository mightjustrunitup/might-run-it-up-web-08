
import React from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Briefcase, Rocket, Target, Users, Award, Zap } from "lucide-react";

const Index = () => {
  return (
    <>
      <Hero
        title="Elevate Your Business to New Heights"
        subtitle="Strategic solutions that accelerate growth and maximize potential for forward-thinking companies."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
        buttonText="Discover Our Services"
        buttonLink="/services"
        showScrollDown={true}
      />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="bg-gradient-to-tr from-navy to-navy-light rounded-lg h-[400px] md:h-[500px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                    alt="Team meeting"
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                  <div className="bg-gold p-4 md:p-8 rounded-lg shadow-lg">
                    <span className="font-display text-4xl font-bold text-navy">10+</span>
                    <p className="text-navy mt-2 font-medium">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <span className="text-gold uppercase font-semibold tracking-wider">About Us</span>
              <h2 className="heading-lg mt-2 mb-6">Your Partner in Business Excellence</h2>
              <p className="text-gray-700 mb-6 text-lg">
                MightJustRunItUp is a premier business consultancy dedicated to helping ambitious
                organizations transform challenges into opportunities and potential into results.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                With over a decade of experience delivering strategic solutions across industries,
                our team of experts combines analytical precision with creative innovation to drive
                meaningful growth.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/about">
                  Learn More About Us <ArrowRight size={18} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">Our Services</span>
            <h2 className="heading-lg mt-2 mb-6">Comprehensive Business Solutions</h2>
            <p className="text-gray-700 text-lg">
              We offer a range of premium services designed to address your unique business challenges
              and capitalize on emerging opportunities in your market.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <BarChart3 size={36} className="text-gold" />, 
                title: "Strategic Consulting", 
                description: "Comprehensive business analysis and strategic guidance to optimize operations." 
              },
              { 
                icon: <Rocket size={36} className="text-gold" />, 
                title: "Market Expansion", 
                description: "Accelerate growth with data-driven market entry and development strategies." 
              },
              { 
                icon: <Target size={36} className="text-gold" />, 
                title: "Digital Transformation", 
                description: "Leverage cutting-edge technology to revolutionize your business processes." 
              },
              { 
                icon: <Users size={36} className="text-gold" />, 
                title: "Brand Development", 
                description: "Create compelling brand experiences that resonate with your audience." 
              }
            ].map((service, index) => (
              <AnimatedSection 
                key={service.title} 
                direction="up" 
                delay={(index + 1) * 100}
              >
                <div className="card-luxury h-full flex flex-col">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button 
                    asChild 
                    variant="link" 
                    className="text-navy hover:text-gold p-0 justify-start"
                  >
                    <Link to="/services">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">Why Choose Us</span>
            <h2 className="heading-lg mt-2 mb-6 text-white">The MightJustRunItUp Advantage</h2>
            <p className="text-gray-300 text-lg">
              What sets us apart is our unwavering commitment to excellence and a personalized approach
              to every client relationship.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={36} className="text-gold" />,
                title: "Industry Expertise",
                description: "Our team brings decades of specialized experience across multiple industries."
              },
              {
                icon: <Zap size={36} className="text-gold" />,
                title: "Innovative Approach",
                description: "We combine proven methodologies with cutting-edge strategies for optimal results."
              },
              {
                icon: <Briefcase size={36} className="text-gold" />,
                title: "Tailored Solutions",
                description: "Every engagement is customized to address your unique business challenges."
              }
            ].map((item, index) => (
              <AnimatedSection
                key={item.title}
                direction="up"
                delay={(index + 1) * 100}
                className="bg-navy-light p-8 rounded-lg"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <AnimatedSection direction="right">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to transform your business potential?
                  </h2>
                  <p className="text-gray-200 text-lg">
                    Schedule a consultation with our experts to discuss how we can help you achieve your business goals.
                  </p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-2 text-center lg:text-right">
                <AnimatedSection direction="left" delay={200}>
                  <Button asChild className="btn-secondary btn-lg">
                    <Link to="/contact">
                      Get Started Today <ArrowRight size={18} />
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

export default Index;
