import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/communication-connection-contact-professional.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with WESPA. We're here to answer your questions and support the global Scrabble community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          <a href="mailto:info@wespa.org" className="hover:text-primary transition-colors">
                            info@wespa.org
                          </a>
                        </p>
                        <p>
                          <a href="mailto:membership@wespa.org" className="hover:text-primary transition-colors">
                            membership@wespa.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        WESPA Secretariat
                        <br />
                        Global Scrabble House
                        <br />
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Follow Us</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          <a href="#" className="hover:text-primary transition-colors">
                            Facebook
                          </a>
                        </p>
                        <p>
                          <a href="#" className="hover:text-primary transition-colors">
                            Twitter
                          </a>
                        </p>
                        <p>
                          <a href="#" className="hover:text-primary transition-colors">
                            Instagram
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
