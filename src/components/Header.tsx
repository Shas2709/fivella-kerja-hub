
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/abf7899e-fdb5-475e-ad1a-6c721ae9c4a7.png" 
              alt="Fivella Logo" 
              className="h-10 w-auto" 
            />
            <span className="font-bold text-2xl text-fivella-purple hidden md:block">
              Fivella<span className="text-black">!</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-fivella-purple">
            How It Works
          </a>
          <a href="#services" className="text-sm font-medium transition-colors hover:text-fivella-purple">
            Services
          </a>
          <a href="#faq" className="text-sm font-medium transition-colors hover:text-fivella-purple">
            FAQ
          </a>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-fivella-purple border-fivella-purple hover:bg-fivella-light-purple">Log In</Button>
            <Button className="bg-fivella-purple hover:bg-fivella-dark-purple">Sign Up</Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center mt-4 mb-8">
                <img 
                  src="/lovable-uploads/abf7899e-fdb5-475e-ad1a-6c721ae9c4a7.png" 
                  alt="Fivella Logo" 
                  className="h-10 w-auto" 
                />
                <span className="font-bold text-2xl text-fivella-purple ml-2">
                  Fivella<span className="text-black">!</span>
                </span>
              </div>
              <div className="flex flex-col gap-6 pt-4">
                <a 
                  href="#how-it-works" 
                  className="text-lg font-medium transition-colors hover:text-fivella-purple"
                  onClick={closeMenu}
                >
                  How It Works
                </a>
                <a 
                  href="#services" 
                  className="text-lg font-medium transition-colors hover:text-fivella-purple"
                  onClick={closeMenu}
                >
                  Services
                </a>
                <a 
                  href="#faq" 
                  className="text-lg font-medium transition-colors hover:text-fivella-purple"
                  onClick={closeMenu}
                >
                  FAQ
                </a>
                <div className="flex flex-col gap-4 mt-4">
                  <Button variant="outline" className="text-fivella-purple border-fivella-purple hover:bg-fivella-light-purple">Log In</Button>
                  <Button className="bg-fivella-purple hover:bg-fivella-dark-purple">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
