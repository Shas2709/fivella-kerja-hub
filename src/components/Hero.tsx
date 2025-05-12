
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-fivella-light-purple"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-fivella-light-purple"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/abf7899e-fdb5-475e-ad1a-6c721ae9c4a7.png" 
              alt="Fivella Logo" 
              className="h-[150px] w-auto" 
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="block">Service Marketplace</span>
            <span className="block text-fivella-purple">For <span className="italic">Everyday</span> Malaysians</span>
          </h1>
          <p className="max-w-md mx-auto text-base md:text-lg text-gray-600 mb-8">
            Connect with verified local help for tutoring, errands, cleaning, design, and more. Switch between hiring services and earning money anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-gradient">
              Hire Someone
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-fivella-purple text-fivella-purple hover:bg-fivella-light-purple">
              Offer Your Services
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <span className="text-fivella-purple text-2xl font-bold mr-2">500+</span>
              <span className="text-sm text-gray-600">Verified Users</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <span className="text-fivella-purple text-2xl font-bold mr-2">1,200+</span>
              <span className="text-sm text-gray-600">Tasks Completed</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <span className="text-fivella-purple text-2xl font-bold mr-2">4.8</span>
              <span className="text-sm text-gray-600">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
