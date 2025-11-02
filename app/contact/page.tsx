"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

interface FormDataInterface {
  name: string;
  email: string;
  location: string;
  department: string;
  subject: string;
  message: string;
}
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: 'Afghanistan',
    department: 'General Enquiry',
    subject: '',
    message: ''
  });

  const breadcrumbs = [
    { text: "Home", id: 1, href: "/" },
    { text: "Contact Us", id: 2, href: "#" }
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8">
        {breadcrumbs.map((link:{text:string,id:number,href:string}, index) => (
          <div key={link.id} className="flex items-center gap-2">
            <a 
              href={link.href} 
              className={`${link.href === "#" ? "text-primary" : "text-gray-500 hover:text-gray-700"} lg:text-xl font-medium`}
            >
              {link.text}
            </a>
            {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          </div>
        ))}
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Section - Contact Info */}
        <section className="space-y-8">
          <div className=' space-y-8'>
            <h1 className="font-semibold text-5xl text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Get in touch with us by completing the below<br />
              form or call us now
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a href="tel:+40762321762" className="flex items-center gap-3 text-gray-700 hover:text-primary transition">
              <Phone className="w-8 h-8 text-primary" />
              <span className=" text-lg">+40 762 321 762</span>
            </a>
            
            <a href="mailto:example@wespa.org" className="flex items-center gap-3 text-gray-700 hover:text-primary transition">
              <Mail className="w-8 h-8 text-primary" />
              <span className=" text-lg">example@wespa.org</span>
            </a>
            
            <div className="flex items-start gap-3 text-gray-700">
              <MapPin className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <span className=" text-lg">8500, Lorem Street, Chicago, IL, 55030</span>
            </div>
          </div>
        </section>

        {/* Right Section - Contact Form */}
        <section>
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition appearance-none bg-white"
                >
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Nigeria</option>
                </select>
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-900 mb-2">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition appearance-none bg-white"
                >
                  <option>General Enquiry</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Technical</option>
                  <option>Billing</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/80 transition duration-200 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}