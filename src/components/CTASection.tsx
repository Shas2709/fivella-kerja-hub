
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-fivella-purple to-fivella-dark-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Fivella Community?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Whether you're looking to offer services or hire someone for a task, Fivella makes it easy, safe, and rewarding.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="outline" className="bg-white border-white text-fivella-purple hover:bg-[#FFE5B4] text-gray-800 rounded shadow">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="bg-white border-white text-fivella-purple hover:bg-[#FFE5B4] text-gray-800 rounded shadow">
            Learn More
          </Button>
        </div>
        
        <div className="mt-12">
          <p className="text-sm opacity-75">Available on Web, iOS and Android</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button variant="outline" className="bg-[#FFE5B4] border-white text-gray-500 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Web App
            </Button>
            <Button variant="outline" className="bg-[#FFE5B4] border-white text-gray-500 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
              </svg>
              Android
            </Button>
            <Button variant="outline" className="bg-[#FFE5B4] border-white text-gray-500 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 5.53 9.39c1.29-1.53 3.2-2.48 5.13-2.51 1.63-.03 3.13 1.06 4.1 1.06.97 0 2.78-1.31 4.69-1.12.8.03 3.07.32 4.52 2.45-1.88.1-3.64 1.98-3.64 4.26 0 2.26 1.72 4.05 3.95 4.05.16 0 .31-.02.46-.04zM13.7.96c.9-1.02 2.37-1.69 3.64-1.74.11 1.29-.34 2.56-1.13 3.46-.79.9-2.09 1.64-3.39 1.56-.15-1.28.4-2.49 1.22-3.28z" />
              </svg>
              iOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
