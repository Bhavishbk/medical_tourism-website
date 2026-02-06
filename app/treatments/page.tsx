import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const treatments = [
    {
        category: "Cosmetic & Plastic Surgery",
        items: ["Rhinoplasty", "Breast Augmentation", "Liposuction", "Tummy Tuck", "Facelift", "Hair Transplant"],
        img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        category: "Dental Care",
        items: ["Dental Implants", "Veneers", "All-on-4", "Crowns & Bridges", "Teeth Whitening"],
        img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        category: "Orthopedics",
        items: ["Knee Replacement", "Hip Replacement", "Spinal Surgery", "ACL Reconstruction"],
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        category: "Cardiology",
        items: ["Bypass Surgery", "Angioplasty", "Valve Replacement", "Pacemaker Implantation"],
        img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        category: "Fertility / IVF",
        items: ["IVF Cycle", "Egg Freezing", "ICSI", "IUI", "Male Infertility"],
        img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        category: "Weight Loss Surgery",
        items: ["Gastric Sleeve", "Gastric Bypass", "Gastric Balloon"],
        img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&h=600&q=80"
    }
];

export default function Treatments() {
    return (
        <>
            <section className="bg-light py-20">
                <div className="container text-center">
                    <h1>Medical Treatments</h1>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        Comprehensive range of procedures from world-renowned Indian specialists.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-2 gap-8">
                        {treatments.map((t, idx) => (
                            <div key={idx} className="shadow-card p-0 overflow-hidden flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 h-48 md:h-auto shrink-0">
                                    <img src={t.img} alt={t.category} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-4">{t.category}</h3>
                                        <ul className="mb-6 grid grid-cols-2 gap-2">
                                            {t.items.map((item, i) => (
                                                <li key={i} className="text-sm text-secondary flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link href="/contact" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                        Get Quote <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h2 className="text-white mb-6">Can't find your treatment?</h2>
                    <p className="mb-8 text-blue-100">We cover over 500+ procedures. Contact us for a custom quote.</p>
                    <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">Contact Us</Link>
                </div>
            </section>
        </>
    );
}
