import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Heart, Shield, Activity, Calendar, Award } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-light" style={{ padding: '8rem 0 6rem' }}>
                <div className="container grid grid-2 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-wide uppercase text-sm mb-4 block">
                            India: Global Healthcare Hub
                        </span>
                        <h1 className="mb-6">
                            World-Class Medical Care in <span className="text-primary">India</span> at 70% Less Cost
                        </h1>
                        <p className="text-secondary text-lg mb-8 max-w-lg">
                            Access top-tier JCI accredited hospitals and expert specialists in India. We handle your entire medical journey so you can focus on healing.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="btn btn-primary">
                                Get Free Consultation
                            </Link>
                            <Link href="/treatments" className="btn btn-outline">
                                Explore Treatments
                            </Link>
                        </div>

                        <div className="flex gap-8 mt-12 text-secondary text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-success-color" size={20} /> JCI & NABH Accredited
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-success-color" size={20} /> 24/7 Int'l Patient Support
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-success-color" size={20} /> 5000+ Success Stories
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Hero Image - In real app, use next/image */}
                        <div style={{ backgroundColor: '#e2e8f0', width: '100%', height: '500px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600"
                                alt="Doctor in India"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="mb-4">Why Choose India for Treatment?</h2>
                        <p className="text-secondary">Combine world-class healthcare with the warmth of Indian hospitality.</p>
                    </div>

                    <div className="grid grid-3">
                        <div className="shadow-card text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-blue-50 rounded-full">
                                    <Activity size={32} className="text-primary" />
                                </div>
                            </div>
                            <h4>Unmatched Cost Advantage</h4>
                            <p className="text-secondary text-sm mt-2">Save up to 80% on medical procedures compared to Western countries without compromising quality.</p>
                        </div>
                        <div className="shadow-card text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-blue-50 rounded-full">
                                    <Award size={32} className="text-primary" />
                                </div>
                            </div>
                            <h4>World-Class Accreditation</h4>
                            <p className="text-secondary text-sm mt-2">Home to over 40 JCI and 1000+ NABH accredited hospitals ensuring global standards of care.</p>
                        </div>
                        <div className="shadow-card text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-blue-50 rounded-full">
                                    <Heart size={32} className="text-primary" />
                                </div>
                            </div>
                            <h4>Zero Waiting Time</h4>
                            <p className="text-secondary text-sm mt-2">Skip the long queues. Get immediate access to India's top specialists and surgeries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section bg-light">
                <div className="container">
                    <div className="grid grid-2 items-center gap-8">
                        <div className="hidden md:block">
                            <div style={{ backgroundColor: '#e2e8f0', width: '100%', height: '600px', borderRadius: '24px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600&h=800"
                                    alt="Patient Consultation"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-8">Your Journey to India</h2>

                            <div className="flex flex-col gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">1</div>
                                    <div>
                                        <h4>Free Consultation</h4>
                                        <p className="text-secondary text-sm">Send us your reports. Our Indian specialists will provide a preliminary treatment plan and quote.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">2</div>
                                    <div>
                                        <h4>Visa & Travel Support</h4>
                                        <p className="text-secondary text-sm">We assist with Medical Visas, flight bookings, and comfortable accommodation for your stay in India.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">3</div>
                                    <div>
                                        <h4>Treatment & Recovery</h4>
                                        <p className="text-secondary text-sm">VIP airport pickup, admission to top Indian hospitals, and a relaxing recovery stay.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">4</div>
                                    <div>
                                        <h4>Follow-up Back Home</h4>
                                        <p className="text-secondary text-sm">Continued support after you return, including tele-consultations with your doctor in India.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Treatments */}
            <section className="section bg-white">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="mb-2">Specialized Treatments</h2>
                            <p className="text-secondary">Comprehensive care across multiple specialties.</p>
                        </div>
                        <Link href="/treatments" className="btn btn-outline flex items-center gap-2">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-3">
                        {[
                            { title: 'Cosmetic Surgery', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&h=600&q=80' },
                            { title: 'Hair Transplant', img: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&h=600&q=80' },
                            { title: 'Dental Implants', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&h=600&q=80' },
                            { title: 'Orthopedics', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=600&q=80' },
                            { title: 'Cardiac Surgery', img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&h=600&q=80' },
                            { title: 'IVF & Fertility', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&h=600&q=80' }
                        ].map((item, idx) => (
                            <Link href="/treatments" key={idx} className="block group">
                                <div className="shadow-card p-0 overflow-hidden h-full">
                                    <div className="h-48 overflow-hidden">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                    </div>
                                    <div className="p-6">
                                        <h4>{item.title}</h4>
                                        <p className="text-secondary text-sm mt-2">Expert care combining technology and experience.</p>
                                        <span className="text-primary text-sm font-semibold mt-4 block">Learn more &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section className="section bg-primary text-white">
                <div className="container text-center">
                    <h2 className="text-white mb-6">India's Medical Cities</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-12">
                        We partner with top hospitals in major metropolitan hubs known for medical excellence.
                    </p>

                    <div className="grid grid-3">
                        {[
                            { country: 'Delhi NCR', treatments: 'Cardiology, Neurology, Transplants', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&h=600&q=80' },
                            { country: 'Mumbai', treatments: 'Oncology, Orthopedic, Cancer care', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&h=600&q=80' },
                            { country: 'Chennai', treatments: 'Transplants, Eye Care, Cardiac', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f0bd44?auto=format&fit=crop&w=800&h=600&q=80' }
                        ].map((dest, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
                                <img src={dest.img} alt={dest.country} className="w-full h-48 object-cover" />
                                <div className="p-6 text-left">
                                    <h3 className="text-white mb-2">{dest.country}</h3>
                                    <p className="text-blue-100 text-sm mb-4">{dest.treatments}</p>
                                    <Link href="/destinations" className="text-white font-semibold hover:underline">Explore {dest.country} &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Preview */}
            <section className="section bg-white">
                <div className="container text-center">
                    <h2 className="mb-12">International Patient Stories</h2>
                    <div className="grid grid-3 gap-8 text-left">
                        <div className="bg-light p-6 rounded-xl">
                            <p className="italic mb-4 text-secondary">"My heart surgery in Delhi was successful and cost a fraction of the UK price. The care was world-class."</p>
                            <h5 className="font-bold">- Sarah J., UK</h5>
                        </div>
                        <div className="bg-light p-6 rounded-xl">
                            <p className="italic mb-4 text-secondary">"The dental treatment I received in Mumbai was outstanding. Highly recommend Genesis Voyage for India."</p>
                            <h5 className="font-bold">- Mike T., USA</h5>
                        </div>
                        <div className="bg-light p-6 rounded-xl">
                            <p className="italic mb-4 text-secondary">"Professional service from arrival to departure. My knee replacement in Chennai went perfectly."</p>
                            <h5 className="font-bold">- David R., Canada</h5>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link href="/testimonials" className="btn btn-outline">Read More Stories</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-light">
                <div className="container">
                    <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-4xl mx-auto">
                        <h2 className="mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-secondary mb-8">
                            Get a free quote and treatment plan from top specialists within 24 hours. No obligation.
                        </p>
                        <div className="flex justify-center gap-4 flex-col sm:flex-row">
                            <Link href="/contact" className="btn btn-primary">Request Free Quote</Link>
                            <a href="tel:+1234567890" className="btn btn-outline">Call Us Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
