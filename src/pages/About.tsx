
import React from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Trophy, LineChart, Users, Clock, Briefcase } from "lucide-react";

const About = () => {
  return (
    <>
      <Hero
        title="About MightJustRunItUp"
        subtitle="Our story of transforming businesses and delivering exceptional results."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="text-gold uppercase font-semibold tracking-wider">Our Story</span>
              <h2 className="heading-lg mt-2 mb-6">A Legacy of Excellence</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Founded in 2013, MightJustRunItUp began with a simple yet powerful vision: to help businesses unlock their full potential through strategic thinking and flawless execution.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                What started as a boutique consultancy has grown into a respected industry leader with a global client base spanning multiple industries. Throughout our journey, we've maintained our core commitment to client success and business excellence.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Today, we're proud to be the trusted advisor for organizations ranging from emerging startups to Fortune 500 companies, all seeking to transform challenges into opportunities.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-tr from-navy/10 to-white p-8 rounded-lg shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
                    alt="Company office"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-lg">
                    <div className="text-center">
                      <span className="block text-4xl font-bold text-navy">10+</span>
                      <span className="text-navy font-medium">Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">Mission & Values</span>
            <h2 className="heading-lg mt-2 mb-6">What Drives Us Forward</h2>
            <p className="text-gray-700 text-lg">
              Our mission and core values guide every decision we make and shape how we deliver value to our clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection direction="right">
              <div className="card-luxury h-full">
                <h3 className="font-display text-2xl font-semibold text-navy mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To empower organizations with strategic insights and actionable solutions that drive sustainable growth, create competitive advantage, and maximize business value.
                </p>
                <p className="text-gray-700">
                  We believe in transforming business challenges into opportunities through innovative thinking, data-driven strategies, and flawless execution.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="card-luxury h-full">
                <h3 className="font-display text-2xl font-semibold text-navy mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To be the most trusted strategic partner for ambitious organizations seeking transformative growth and lasting success in an ever-evolving business landscape.
                </p>
                <p className="text-gray-700">
                  We envision a world where businesses of all sizes can achieve their maximum potential through strategic excellence and operational efficiency.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy size={36} className="text-gold" />,
                title: "Excellence",
                description: "We pursue the highest standards in everything we do, delivering premium results for our clients."
              },
              {
                icon: <Users size={36} className="text-gold" />,
                title: "Partnership",
                description: "We build deep, collaborative relationships with our clients based on trust and mutual respect."
              },
              {
                icon: <LineChart size={36} className="text-gold" />,
                title: "Innovation",
                description: "We constantly seek new approaches and fresh perspectives to solve complex business challenges."
              }
            ].map((value, index) => (
              <AnimatedSection
                key={value.title}
                direction="up"
                delay={(index + 1) * 100}
              >
                <div className="card-luxury h-full">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">Our Leadership</span>
            <h2 className="heading-lg mt-2 mb-6">Meet the Experts</h2>
            <p className="text-gray-700 text-lg">
              Our team of seasoned professionals brings together diverse expertise and a shared commitment to your success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
              },
              {
                name: "Elena Rodriguez",
                role: "Chief Strategy Officer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=500",
              },
              {
                name: "David Williams",
                role: "Chief Financial Officer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
              }
            ].map((person, index) => (
              <AnimatedSection
                key={person.name}
                direction="up"
                delay={(index + 1) * 100}
              >
                <div className="card-luxury text-center overflow-hidden group">
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-1">{person.name}</h3>
                  <p className="text-gold font-medium mb-4">{person.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Clients Served", icon: <Briefcase size={36} className="text-gold mx-auto mb-4" /> },
              { value: "95%", label: "Client Retention", icon: <Users size={36} className="text-gold mx-auto mb-4" /> },
              { value: "500+", label: "Projects Completed", icon: <CheckCircle size={36} className="text-gold mx-auto mb-4" /> },
              { value: "10+", label: "Years Experience", icon: <Clock size={36} className="text-gold mx-auto mb-4" /> }
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                direction="up"
                delay={(index + 1) * 100}
              >
                <div className="p-6 rounded-lg bg-navy-light">
                  {stat.icon}
                  <div className="font-display text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <AnimatedSection direction="right">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to work with our expert team?
                  </h2>
                  <p className="text-gray-200 text-lg">
                    Let's discuss how MightJustRunItUp can help you achieve your business objectives.
                  </p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-2 text-center lg:text-right">
                <AnimatedSection direction="left" delay={200}>
                  <Button asChild className="btn-secondary btn-lg">
                    <Link to="/contact">
                      Contact Us Today <ArrowRight size={18} />
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

export default About;
