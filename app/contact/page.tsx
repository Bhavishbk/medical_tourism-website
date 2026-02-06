"use client";

import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        treatment: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-20">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-cyan-100 max-w-2xl mx-auto text-lg">
                        Get a free quote or schedule a consultation. Our team is available 24/7 to assist you.
                    </p>
                </div>
            </section>

            <section className="section bg-gradient-to-br from-gray-50 to-white">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="mb-2 text-3xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-secondary mb-8 text-lg leading-relaxed">
                            Ready to start your medical journey? Fill out the form, and our patient coordinators will get back to you within 24 hours with a personalized plan.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <Phone size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone / WhatsApp</h4>
                                    <p className="text-secondary font-medium">+91 98765 43210</p>
                                    <p className="text-sm text-secondary flex items-center gap-1 mt-1">
                                        <Clock size={14} /> Available 24/7
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                                    <p className="text-secondary font-medium">care@genesisvoyage.com</p>
                                    <p className="text-sm text-secondary mt-1">Usually responds within 2 hours</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Head Office</h4>
                                    <p className="text-secondary font-medium">Cyber City, Gurugram</p>
                                    <p className="text-sm text-secondary mt-1">Delhi NCR, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
                            <p className="text-sm font-semibold text-gray-700">✓ Verified by 10,000+ patients</p>
                            <p className="text-xs text-secondary mt-1">Join thousands of successful medical tourism cases</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <div className="mb-8">
                            <h3 className="mb-2 text-2xl font-bold text-gray-900">Free Consultation</h3>
                            <p className="text-secondary text-sm">Fill in your details below. We usually reply within 2 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-900">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-cyan-500 focus:bg-white focus:outline-none text-gray-900 placeholder-gray-400 transition-all font-medium"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-900">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-cyan-500 focus:bg-white focus:outline-none text-gray-900 placeholder-gray-400 transition-all font-medium"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-900">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-cyan-500 focus:bg-white focus:outline-none text-gray-900 placeholder-gray-400 transition-all font-medium"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-900">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-cyan-500 focus:bg-white focus:outline-none text-gray-900 placeholder-gray-400 transition-all font-medium"
                                    placeholder="+91 98765 43210"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-900">Treatment *</label>
                                <select 
                                    name="treatment"
                                    value={formData.treatment}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-cyan-500 focus:bg-white focus:outline-none text-gray-900 font-medium cursor-pointer transition-all"
                                    required
                                >
                                    <option value="">Select Treatment...</option>
                                    <option value="hair-transplant">Hair Transplant</option>
                                    <option value="dental-veneers">Dental Veneers</option>
                                    <option value="rhinoplasty">Rhinoplasty</option>
                                    <option value="liposuction">Liposuction</option>
                                    <option value="cardiac">Cardiac Surgery</option>
                                    <option value="orthopedic">Orthopedic Surgery</option>
                                    <option value="gastroenterology">Gastroenterology</option>
                                    <option value="oncology">Oncology</option>
                                    <option value="neurosurgery">Neurosurgery</option>
                                    <option value="fertility">Fertility Treatment</option>
                                    <option value="urology">Urology</option>
                                    <option value="ophthalmology">Ophthalmology</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-900">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-cyan-500 focus:bg-white focus:outline-none text-gray-900 placeholder-gray-400 transition-all resize-none font-medium"
                                    placeholder="Tell us about your medical needs..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary w-full mt-6 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600"
                            >
                                <Send size={20} /> Send Consultation Request
                            </button>

                            <p className="text-xs text-secondary text-center">
                                By submitting, you agree to our privacy policy and terms of service.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
