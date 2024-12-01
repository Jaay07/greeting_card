'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronRight, Gift, ImageIcon, Share2, Smartphone, Sparkles, PenTool, Download } from 'lucide-react'
import { NextUIProvider } from "@nextui-org/react"
import Snowfall from 'react-snowfall'

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <NextUIProvider>
      <div className="min-h-screen bg-gradient-to-b from-christmas-snow to-christmas-cream text-christmas-pine relative overflow-hidden">
        <Snowfall snowflakeCount={200} color={"#0AAAAF"}/>
        
        <header className="sticky top-0 z-50 bg-christmas-pine text-christmas-cream shadow-md">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Christmas Card Generator Logo" width={40} height={40} />
              <span className="text-xl font-bold">Merry & Bright</span>
            </Link>
            <div className="hidden md:flex space-x-6 text-lg ">
              <Link href="#features" className="hover:text-christmas-gold transition-colors">Features</Link>
              <Link href="#templates" className="hover:text-christmas-gold transition-colors">Templates</Link>
              <Link href="#how-it-works" className="hover:text-christmas-gold transition-colors">How It Works</Link>
              <Link href="#pricing" className="hover:text-christmas-gold transition-colors">Pricing</Link>
              <Link href="#testimonials" className="hover:text-christmas-gold transition-colors">Testimonials</Link>
            </div>
            <Button variant="outline" className="bg-christmas-red hover:bg-christmas-gold text-christmas-cream border-none transition-colors duration-300">
              Get Started
            </Button>
          </nav>
        </header>

        <main>
          <section className="py-20 text-center relative">
            <motion.div style={{ opacity, scale }} className="relative z-10">
              <h1 className="text-6xl font-bold mb-6 text-christmas-berry">Create Magical Christmas Cards</h1>
              <p className="text-2xl mb-8 max-w-2xl mx-auto text-christmas-pine">
                Upload your family photos, customize with festive designs, and share your personalized Christmas greetings with loved ones.
              </p>
              <Button size="lg" className="bg-christmas-red hover:bg-christmas-gold text-christmas-cream transition-colors duration-300">
                Start Creating <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
            <div className="absolute inset-0 z-0 bg-christmas-snow opacity-50"></div>
          </section>

          <section id="features" className="py-20 bg-christmas-pine text-christmas-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: ImageIcon, title: "Interactive Canvas", description: "Drag & drop photos, resize, and customize your card with ease." },
                  { icon: Gift, title: "Festive Templates", description: "Choose from a variety of Christmas-themed backgrounds and layouts." },
                  { icon: Share2, title: "Easy Sharing", description: "Share your creation directly to social media or download for printing." },
                  { icon: Smartphone, title: "Mobile Friendly", description: "Create and edit your cards on any device, anytime, anywhere." },
                  { icon: Sparkles, title: "Real-Time Preview", description: "See your changes instantly as you customize your card." },
                  { icon: PenTool, title: "Text Customization", description: "Add personalized messages with various fonts and styles." },
                  { icon: Download, title: "High-Resolution Download", description: "Get print-ready files for professional quality cards." },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-christmas-cream text-christmas-pine h-full transition-transform duration-300 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <feature.icon className="w-12 h-12 mx-auto mb-4 text-christmas-red" />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-christmas-pine/80">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="templates" className="py-20 bg-christmas-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-christmas-pine">Festive Templates</h2>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image src={`/template-${index + 1}.jpg`} alt={`Template ${index + 1}`} width={300} height={300} className="rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

          <section id="how-it-works" className="py-20 bg-christmas-red text-christmas-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: 1, title: "Choose a Template", description: "Browse our collection of festive designs and select your favorite." },
                  { step: 2, title: "Customize Your Card", description: "Upload photos, add text, and personalize your greeting card." },
                  { step: 3, title: "Share or Print", description: "Download your creation, share on social media, or order prints." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="bg-christmas-gold text-christmas-pine rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 bg-christmas-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-christmas-pine">Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Basic", price: "Free", features: ["5 templates", "Basic customization", "Social media sharing"] },
                  { name: "Pro", price: "$9.99/month", features: ["Unlimited templates", "Advanced customization", "High-resolution downloads", "Remove watermark"] },
                  { name: "Business", price: "$29.99/month", features: ["Everything in Pro", "Multiple users", "API access", "Priority support"] },
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-transform duration-300 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2 text-christmas-pine">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-4 text-christmas-red">{plan.price}</p>
                        <ul className="text-left mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="mb-2 flex items-center">
                              <ChevronRight className="w-4 h-4 mr-2 text-christmas-green" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-christmas-green hover:bg-christmas-gold text-christmas-cream transition-colors duration-300">
                          Choose Plan
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20 bg-christmas-pine text-christmas-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {[
                    { name: "Sarah J.", quote: "This tool made creating our family Christmas card so easy and fun! The templates are beautiful." },
                    { name: "Mike R.", quote: "I love how I can customize every aspect of the card. It's perfect for our business holiday greetings." },
                    { name: "Emily T.", quote: "The sharing options are fantastic! I sent our card directly to Instagram and got so many compliments." },
                  ].map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="bg-christmas-cream text-christmas-pine">
                        <CardContent className="p-6 text-center">
                          <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                          <p className="font-semibold text-christmas-red">- {testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

          <section className="py-20 bg-christmas-berry text-christmas-cream text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Ready to Spread Some Christmas Cheer?</h2>
              <p className="text-xl mb-8">Create your personalized Christmas card today and share the joy with your loved ones!</p>
              <Button size="lg" className="bg-christmas-green hover:bg-christmas-gold text-christmas-cream transition-colors duration-300">
                Start Creating Now
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-christmas-pine text-christmas-cream py-8">
          <div className="container mx-auto px-3 text-base">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p>We're passionate about helping you create the perfect Christmas cards for your loved ones.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul>
                  <li><Link href="#features" className="hover:text-christmas-gold transition-colors duration-300">Features</Link></li>
                  <li><Link href="#templates" className="hover:text-christmas-gold transition-colors duration-300">Templates</Link></li>
                  <li><Link href="#pricing" className="hover:text-christmas-gold transition-colors duration-300">Pricing</Link></li>
                  <li><Link href="#" className="hover:text-christmas-gold transition-colors duration-300">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>Email: support@christmascardgenerator.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-christmas-gold transition-colors duration-300">Facebook</Link>
                  <Link href="#" className="hover:text-christmas-gold transition-colors duration-300">Twitter</Link>
                  <Link href="#" className="hover:text-christmas-gold transition-colors duration-300">Instagram</Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-christmas-snow/20 text-center">
              <p>&copy; 2023 Christmas Card Generator. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </NextUIProvider>
  )
}

