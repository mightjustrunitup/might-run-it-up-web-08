
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container-custom text-center">
          <AnimatedSection direction="up">
            <span className="text-gold uppercase font-semibold tracking-wider">Contact Us</span>
            <h1 className="heading-xl text-white mt-2 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question or want to discuss how we can help your business?
              Our team is ready to assist you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={100}>
              <div className="card-luxury h-full flex flex-col items-center text-center p-8">
                <div className="bg-navy/10 p-4 rounded-full mb-6">
                  <MapPin size={32} className="text-navy" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-4">Our Location</h3>
                <p className="text-gray-600">
                  123 Luxury Avenue, Suite 1500<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="card-luxury h-full flex flex-col items-center text-center p-8">
                <div className="bg-navy/10 p-4 rounded-full mb-6">
                  <Phone size={32} className="text-navy" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-4">Phone & Email</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:info@mightjustrunitup.com" className="hover:text-gold transition-colors">
                    info@mightjustrunitup.com
                  </a>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="card-luxury h-full flex flex-col items-center text-center p-8">
                <div className="bg-navy/10 p-4 rounded-full mb-6">
                  <Clock size={32} className="text-navy" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-4">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="right">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="heading-md mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="h-full">
                <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                  <div className="bg-gray-200 rounded-lg h-full min-h-[400px] overflow-hidden">
                    {/* This would be replaced with an actual map component */}
                    <div className="w-full h-full flex items-center justify-center bg-navy/10">
                      <div className="text-center p-8">
                        <MapPin size={48} className="text-navy mx-auto mb-4" />
                        <h3 className="text-lg font-medium">MightJustRunItUp Headquarters</h3>
                        <p className="text-gray-600">123 Luxury Avenue, New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase font-semibold tracking-wider">FAQ</span>
            <h2 className="heading-lg mt-2 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-lg">
              Find quick answers to common questions about our services and process.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I schedule an initial consultation?",
                answer: "You can schedule an initial consultation by filling out our contact form, calling our office, or sending us an email. Our team will respond within 24 hours to arrange a convenient time."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have extensive experience across multiple industries including financial services, technology, retail, healthcare, and manufacturing. Our team brings specialized expertise to each sector."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Strategic consulting engagements typically range from 4-12 weeks, while implementation projects may extend from 3-12 months."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we work with organizations of all sizes, from emerging startups to Fortune 500 enterprises. We tailor our approach to meet the specific needs and resources of each client."
              }
            ].map((faq, index) => (
              <AnimatedSection
                key={index}
                direction="up"
                delay={(index + 1) * 100}
                className="card-luxury"
              >
                <h3 className="font-display text-xl font-semibold text-navy mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
