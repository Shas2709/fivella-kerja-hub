
import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  const popularServices = [
    {
      title: "Math & Science Tutoring",
      description: "One-on-one tutoring for high school and university students in mathematics and sciences.",
      category: "Education",
      price: "RM50/hour",
      rating: 4.9,
      location: "Subang Jaya",
      providerName: "Ahmad Hassan",
      color: "bg-fivella-blue"
    },
    {
      title: "House Cleaning Service",
      description: "Thorough home cleaning services including dusting, vacuuming, mopping, and bathroom cleaning.",
      category: "Home",
      price: "RM80/session",
      rating: 4.7,
      location: "Petaling Jaya",
      providerName: "Mei Ling",
      color: "bg-fivella-green"
    },
    {
      title: "Logo & Branding Design",
      description: "Professional logo design and basic brand identity package for small businesses.",
      category: "Design",
      price: "From RM100",
      rating: 5.0,
      location: "Kuala Lumpur",
      providerName: "Raj Kumar",
      color: "bg-fivella-orange"
    },
    {
      title: "Food Delivery Service",
      description: "Fast and reliable food delivery from your favorite restaurants within 5km radius.",
      category: "Delivery",
      price: "From RM8",
      rating: 4.6,
      location: "Shah Alam",
      providerName: "Zul Azmi",
      color: "bg-fivella-light-pink"
    },
    {
      title: "CV & Resume Writing",
      description: "Professional CV writing and optimization for job seekers in all industries.",
      category: "Writing",
      price: "RM50",
      rating: 4.8,
      location: "Cyberjaya",
      providerName: "Sarah Tan",
      color: "bg-fivella-light-purple"
    },
    {
      title: "Event Photography",
      description: "Capture your special events with professional photography services for all occasions.",
      category: "Photography",
      price: "From RM200",
      rating: 4.9,
      location: "Bangsar",
      providerName: "David Wong",
      color: "bg-fivella-blue"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <HowItWorks />
        
        <section id="services" className="bg-[#FFE5B4] py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-2">Popular Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through some of our most requested services from verified providers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  category={service.category}
                  price={service.price}
                  rating={service.rating}
                  location={service.location}
                  providerName={service.providerName}
                  color={service.color}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="bg-[#FFE5B4] text-fivella-purple border-fivella-purple hover:bg-fivella-light-purple">
                View All Services
              </Button>
            </div>
          </div>
        </section>
        
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about using Fivella
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y">
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-2">How does verification work?</h3>
                <p className="text-gray-600">
                  Users can verify their accounts by uploading either their Malaysian student ID or MyKad. Our system securely verifies their identity, ensuring safety and trust within our community.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-2">How does the escrow payment system work?</h3>
                <p className="text-gray-600">
                  When you book a service, your payment is held securely in our escrow system. It's only released to the service provider once you confirm that the job has been completed to your satisfaction.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-2">Can I switch between offering services and hiring others?</h3>
                <p className="text-gray-600">
                  Absolutely! Fivella is designed for flexibility. You can easily switch between offering your services and hiring others for tasks with just one tap in the app.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-2">What happens if I'm not satisfied with a service?</h3>
                <p className="text-gray-600">
                  If you're not satisfied, you can use our resolution center to work things out with the provider. If needed, our support team can step in to help mediate and resolve any issues.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-2">Is there a fee to use Fivella?</h3>
                <p className="text-gray-600">
                  Fivella takes a small service fee of 10% from service providers for each completed transaction. It's free to sign up and browse available services.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
