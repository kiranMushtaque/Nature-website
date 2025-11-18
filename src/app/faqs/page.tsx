



import { Metadata } from "next";




import { Droplet, Phone, Mail, MapPin } from "lucide-react";




import FaqAccordion from "@/components/FaqAccordion";









export const metadata: Metadata = {




  title: "Nature Water FAQs | Frequently Asked Questions about Pure Water",




  description:




    "Find answers to common questions about Nature Water's purification process, safety, delivery, and products. Your guide to Pakistan's trusted bottled water.",




};









const UAN = "111-628-873";




const WHATSAPP = "923005553186";




const EMAIL = "info@naturewater.com.pk";




const ADDRESS = "Plot # 123, Korangi Industrial Area, Karachi, Pakistan";









export default function FAQPage() {




  return (




    <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20 py-20 md:py-28 overflow-hidden">




      {/* Decorative Background */}




      <div className="absolute inset-0 overflow-hidden pointer-events-none">




        <div className="absolute top-40 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>




        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>




      </div>









      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">




        {/* Header */}




        <div className="text-center mb-16">




          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-light tracking-wider uppercase mb-4">




            <Droplet className="w-4 h-4" />




            <span>Got Questions? We&apos;ve Got Answers</span>




          </div>




          <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-900 mb-4 leading-tight">




            Frequently Asked <br className="sm:hidden" />




            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">




              Questions




            </span>




          </h2>




          <p className="text-lg font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">




            Everything you need to know about Nature Water—Pakistan&apos;s most




            trusted bottled water brand.




          </p>




        </div>









        {/* FAQ Accordion */}




        <FaqAccordion />









        {/* === CONTACT CTA === */}




        <div className="mt-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-10 md:p-14 shadow-2xl">




          <div className="text-center mb-10">




            <h3 className="text-4xl md:text-5xl font-thin text-white mb-4">




              Still Have Questions?




            </h3>




            <p className="text-lg text-blue-100 font-light">




              We&apos;re here to help 24/7 — call, message, or email.




            </p>




          </div>









          <div className="grid md:grid-cols-3 gap-8">




            {/* UAN Call */}




            <a




              href={`tel:${UAN}`}




              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-3xl p-8 transition-all hover:scale-105 border border-white/20"




            >




              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">




                <Phone className="w-7 h-7 text-white" />




              </div>




              <h4 className="text-white font-light text-xl mb-2">Call UAN</h4>




              <p className="text-blue-100 text-sm mb-1">Customer Care</p>




              <p className="text-white font-semibold text-lg">{UAN}</p>




            </a>









            {/* WhatsApp */}




            <a




              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(




                "Assalam o Alaikum! Main Nature Water ke bare mein pochna chahta hun..."




              )}`}




              target="_blank"




              rel="noopener noreferrer"




              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-3xl p-8 transition-all hover:scale-105 border border-white/20"




            >




              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">




                <svg




                  className="w-7 h-7 text-white"




                  fill="currentColor"




                  viewBox="0 0 24 24"




                >




                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.253-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.257 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.125 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />




                </svg>




              </div>




              <h4 className="text-white font-light text-xl mb-2">WhatsApp</h4>




              <p className="text-blue-100 text-sm mb-1">Instant Support</p>




              <p className="text-white font-semibold">Message Now</p>




            </a>









            {/* Email */}




            <a




              href={`mailto:${EMAIL}`}




              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-3xl p-8 transition-all hover:scale-105 border border-white/20"




            >




              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">




                <Mail className="w-7 h-7 text-white" />




              </div>




              <h4 className="text-white font-light text-xl mb-2">Email Us</h4>




              <p className="text-blue-100 text-sm mb-1">Send Inquiry</p>




              <p className="text-white font-semibold text-sm break-all">




                {EMAIL}




              </p>




            </a>




          </div>









          {/* Office */}




          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">




            <div className="flex items-start gap-5">




              <div className="bg-white/20 p-3 rounded-xl">




                <MapPin className="w-7 h-7 text-white" />




              </div>




              <div>




                <h4 className="text-white font-light text-xl mb-2">




                  Head Office




                </h4>




                <p className="text-blue-100 text-base">{ADDRESS}</p>




              </div>




            </div>




          </div>




        </div>









        {/* Final Tagline */}




        <div className="mt-16 text-center">




          <p className="text-2xl md:text-3xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">




            Drink Pure. Live Natural.




          </p>




        </div>




      </div>




    </section>




  );




}



