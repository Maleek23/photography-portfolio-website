"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PoliciesPage() {
  return (
    <main className="bg-background light:bg-white min-h-screen">
      <GrainOverlay />
      <NavBar />
      <div className="px-4 md:px-[6rem] pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-4 text-center">
            Terms & Conditions
          </p>
          <h1 className="text-white light:text-gray-900 text-[2rem] md:text-[2.75rem] font-[700] leading-tight mb-4 text-center uppercase">
            Booking Policies
          </h1>
          <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1rem] leading-relaxed max-w-2xl mx-auto text-center mb-8">
            Please review these policies carefully before booking your session
          </p>

          <Accordion type="multiple" defaultValue={["payment", "delivery", "rescheduling", "details", "usage", "agreement"]} className="space-y-4">
            
            {/* Payment & Deposit */}
            <AccordionItem value="payment" className="bg-superGray/50 light:bg-gray-50 border border-white/5 light:border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect width="20" height="14" x="2" y="5" rx="2"/>
                      <line x1="2" x2="22" y1="10" y2="10"/>
                    </svg>
                  </div>
                  <span className="text-white light:text-gray-900 text-[0.938rem] md:text-[1rem] font-[600] uppercase">Payment & Deposit</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <ul className="space-y-2 text-customGrayAlt light:text-gray-600 text-[0.938rem] leading-relaxed">
                    <li>• 50% non-refundable deposit required to secure your session date</li>
                    <li>• Remaining balance due on the day of the shoot</li>
                    <li>• Accepted payment methods: Cash, Zelle, CashApp, Venmo</li>
                    <li>• Deposits are non-refundable but may be transferred to a new date (weather-related only)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Delivery Timeline */}
              <AccordionItem value="delivery" className="glass backdrop-blur-xl rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <span className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase">Delivery Timeline</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-2 text-customGrayAlt text-[0.938rem] leading-relaxed">
                    <li>• Standard delivery: 5-9 business days after your session</li>
                    <li>• Priority editing: 3-day turnaround (available with Gold/Pro packages)</li>
                    <li>• All images delivered via digital download link</li>
                    <li>• Photos professionally edited with color grading and retouching</li>
                    <li>• You receive only the edited images from your package tier (not raw files)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Rescheduling & Cancellation */}
              <AccordionItem value="rescheduling" className="glass backdrop-blur-xl rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                        <path d="M21 3v5h-5"/>
                      </svg>
                    </div>
                    <span className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase">Rescheduling & Cancellation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-2 text-customGrayAlt text-[0.938rem] leading-relaxed">
                    <li>• Weather-related rescheduling allowed at no additional cost</li>
                    <li>• Weather conditions: Rain forecast or temperature below 65°F</li>
                    <li>• Client cancellations: Deposit is forfeited, new deposit required to rebook</li>
                    <li>• No-shows forfeit full session fee</li>
                    <li>• Photographer cancellations: Full refund or free reschedule</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Session Details */}
              <AccordionItem value="details" className="glass backdrop-blur-xl rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                        <circle cx="12" cy="13" r="3"/>
                      </svg>
                    </div>
                    <span className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase">Session Details</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-2 text-customGrayAlt text-[0.938rem] leading-relaxed">
                    <li>• Maximum 2 guests allowed per session (unless otherwise arranged)</li>
                    <li>• Sessions start on time - please arrive 10 minutes early</li>
                    <li>• Late arrivals may result in shortened session time</li>
                    <li>• Outfit changes and location changes are based on your package tier</li>
                    <li>• Client is responsible for outfit preparation and styling</li>
                    <li>• Photographer selects final edited images from shoot</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Image Usage & Rights */}
              <AccordionItem value="usage" className="glass backdrop-blur-xl rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                      </svg>
                    </div>
                    <span className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase">Image Usage & Rights</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-2 text-customGrayAlt text-[0.938rem] leading-relaxed">
                    <li>• You receive personal usage rights for your images</li>
                    <li>• Images may be used for social media, prints, and personal purposes</li>
                    <li>• Photographer retains copyright and may use images for portfolio/marketing</li>
                    <li>• Images may not be edited, altered, or filtered by client</li>
                    <li>• Commercial usage requires separate licensing agreement</li>
                    <li>• Credit to @leekshotit appreciated when sharing on social media</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Client Agreement */}
              <AccordionItem value="agreement" className="glass backdrop-blur-xl rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" x2="8" y1="13" y2="13"/>
                        <line x1="16" x2="8" y1="17" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                    </div>
                    <span className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase">Client Agreement</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-2 text-customGrayAlt text-[0.938rem] leading-relaxed">
                    <li>• By booking, you agree to all policies listed on this page</li>
                    <li>• All bookings require a consultation before payment</li>
                    <li>• Photographer is not liable for injuries during the session</li>
                    <li>• Client assumes responsibility for personal belongings</li>
                    <li>• These terms are subject to change; current version applies to all bookings</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

          </Accordion>

          <div className="mt-8 text-center bg-superGray/50 light:bg-gray-50 p-6 md:p-8 border border-white/5 light:border-gray-200">
            <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] leading-relaxed mb-6">
              Have questions about these policies? Contact me before booking your session.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-[600] py-3 px-8 uppercase text-[0.813rem] transition-all"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
      <FooterSection />
    </main>
  );
}
