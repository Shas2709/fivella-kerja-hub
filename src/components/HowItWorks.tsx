
import React from 'react';
import { User, MapPin, MessageCircle, Wallet } from "lucide-react";
import FeatureCard from './FeatureCard';

const HowItWorks = () => {
  const features = [
    {
      icon: <User className="h-6 w-6 text-fivella-purple" />,
      title: "Verified Users",
      description: "Every user is verified with Malaysian Student ID or MyKad for maximum safety and trust.",
      color: "bg-fivella-light-purple"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: "Smart Matching",
      description: "Our location-based algorithm helps you find the perfect service provider nearby.",
      color: "bg-fivella-blue"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: "Built-in Chat",
      description: "Communicate directly with service providers or clients through our secure messaging system.",
      color: "bg-fivella-green"
    },
    {
      icon: <Wallet className="h-6 w-6 text-orange-500" />,
      title: "Secure Payments",
      description: "Our escrow system ensures money is only released when both parties are satisfied.",
      color: "bg-fivella-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-2">How Fivella Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our platform makes it easy to find help or offer your services in just a few steps.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h3 className="mb-4">Dual Mode: Hire or Earn</h3>
                <p className="text-gray-600 mb-6">
                  Fivella offers flexibility like no other platform. Switch between hiring services 
                  and earning money anytime with just one tap.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-fivella-light-purple text-fivella-purple">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Create your profile</h4>
                      <p className="mt-1 text-gray-600">Complete your profile with your skills, location, and verification.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-fivella-light-purple text-fivella-purple">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Browse or list services</h4>
                      <p className="mt-1 text-gray-600">Look for help or create listings for services you can offer.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-fivella-light-purple text-fivella-purple">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Connect and transact securely</h4>
                      <p className="mt-1 text-gray-600">Chat, agree on terms, and handle payments through our secure platform.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-fivella-purple to-fivella-dark-purple p-8 lg:p-12 text-white">
                <h3 className="mb-4">For Service Providers</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Set your own rates and availability</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive secure payments via escrow</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Build your reputation with ratings and reviews</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expand your client base in your local area</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h3 className="mb-4">For Service Seekers</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Find qualified local help quickly</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Browse verified profiles with reviews</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pay securely only when satisfied</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
