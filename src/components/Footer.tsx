import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">UtopiaHire</h3>
            <p className="text-brand-light/80 mb-4 max-w-sm">
              Inclusive Careers. Fair Opportunities.
            </p>
            <p className="text-brand-light/70 text-sm leading-relaxed">
              Building the future of ethical, inclusive hiring across MENA and Sub-Saharan Africa.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-light/70 text-sm">
              Copyright © 2025 UtopiaHire. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="link" className="text-brand-light/70 hover:text-white p-0 h-auto font-normal text-sm">
                Made by UtopiaHire Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;