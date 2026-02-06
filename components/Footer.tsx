import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-light-gray mt-20">
            <div className="container">
                <div className="grid grid-4 gap-8">
                    <div>
                        <Link href="/" className="logo mb-4 block">Genesis Voyage</Link>
                        <p className="text-secondary text-sm">
                            Connecting you with world-class healthcare in India. India's best hospitals, trusted care.
                        </p>
                        <div className="flex gap-4 mt-4 text-secondary">
                            <Facebook size={20} className="hover:text-primary cursor-pointer" />
                            <Twitter size={20} className="hover:text-primary cursor-pointer" />
                            <Instagram size={20} className="hover:text-primary cursor-pointer" />
                            <Linkedin size={20} className="hover:text-primary cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul className="flex flex-col gap-2 mt-4 text-secondary text-sm">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/hospitals" className="hover:text-primary">Partner Hospitals</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Medical Blog</Link></li>
                            <li><Link href="/testimonials" className="hover:text-primary">Success Stories</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Patient Guide</h4>
                        <ul className="flex flex-col gap-2 mt-4 text-secondary text-sm">
                            <li><Link href="/treatments" className="hover:text-primary">All Treatments</Link></li>
                            <li><Link href="/destinations" className="hover:text-primary">Destinations</Link></li>
                            <li><Link href="/cost" className="hover:text-primary">Cost Comparison</Link></li>
                            <li><Link href="/travel-support" className="hover:text-primary">Travel & Visa</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact Info</h4>
                        <ul className="flex flex-col gap-4 mt-4 text-secondary text-sm">
                            <li className="flex gap-2 items-center">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>care@genesisvoyage.com</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                                <span>Cyber City, Gurugram, Delhi NCR, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-light-gray text-center text-sm text-secondary">
                    <p>&copy; {new Date().getFullYear()} Genesis Voyage. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
