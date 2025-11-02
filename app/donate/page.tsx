"use client";

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image";
import member_bg from "@/public/member_demo_img.jpg";
import { ChevronRight } from "lucide-react";


const breadcrumbs = [
    { text: "Home", id: 1, href: "/" },
    { text: "Contact Us", id: 2, href: "#" }
  ];


function MembershipForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    country: '',
    address: '',
    primaryContact: '',
    contactRole: '',
    email: '',
    phone: '',
    website: ''
  });

  interface FormData {
    orgName: string;
    country: string;
    address: string;
    primaryContact: string;
    contactRole: string;
    email: string;
    phone: string;
    website: string;
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6 md:p-8">
        <h2 className="font-bold text-xl md:text-2xl mb-6">1. Basic Info</h2>
        
        <div className="space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Organisation Name</label>
              <input
                type="text"
                value={formData.orgName}
                onChange={(e) => handleChange('orgName', e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <select
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              >
                <option value="">Select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Nigeria">Nigeria</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Primary Contact Person</label>
              <input
                type="text"
                value={formData.primaryContact}
                onChange={(e) => handleChange('primaryContact', e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Person's Role</label>
              <input
                type="text"
                value={formData.contactRole}
                onChange={(e) => handleChange('contactRole', e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Website (if any)</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
            />
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 md:py-4 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm md:text-base">
            Next
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DonatePage() {
  return (
    <main>
      <section className="h-[400px] md:h-[500px] lg:h-[600px] relative py-12 md:py-16 lg:py-24 overflow-hidden flex flex-col">
       
        <div className="absolute inset-0 z-0">
          <Image src={member_bg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-balance text-white drop-shadow-lg">
              Join WESPA
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Join the global body that governs, supports, and promotes competitive Scrabble worldwide.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-sm md:text-base lg:text-lg">Tax-deductible donations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-sm md:text-base lg:text-lg">50+ countries worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-sm md:text-base lg:text-lg">Since 2003</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Application Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Requirements */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg ">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Required Documents</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                    Please have digital copies (PDF or DOC formats) of the following documents ready. Each file must not exceed <span className="font-semibold">5MB</span> in size.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
                    <li>
                      <div className="font-medium mb-1">Proof of legal registration</div>
                      <div className="text-muted-foreground italic">
                        (Certificate or equivalent document)
                      </div>
                    </li>
                    <li>
                      <div className="font-medium mb-1">Organisation constitution or bylaws</div>
                    </li>
                    <li>
                      <div className="font-medium mb-1">List of current membership</div>
                      <div className="text-muted-foreground italic">
                        (Board members, officers & roles)
                      </div>
                    </li>
                    <li>
                      <div className="font-medium mb-1">Summary of activities</div>
                      <div className="text-muted-foreground italic">
                        (Brief report or list of recent tournaments/events)
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 md:mt-8 p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Membership starts once approved and fees are confirmed by the WESPA Executive Committee.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}