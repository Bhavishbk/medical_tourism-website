import Link from 'next/link';

const hospitals = [
    { name: "Apollo Hospitals", location: "Delhi, Mumbai, Chennai", acred: ["JCI", "NABH"], img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=600&q=80" },
    { name: "Fortis Healthcare", location: "Pan India", acred: ["JCI", "NABH"], img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=600&q=80" },
    { name: "Max Healthcare", location: "Delhi NCR", acred: ["JCI", "NABH"], img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&h=600&q=80" },
    { name: "Manipal Hospitals", location: "Bangalore, Delhi", acred: ["NABH", "ISO"], img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&h=600&q=80" }
];

export default function Hospitals() {
    return (
        <>
            <section className="bg-light section">
                <div className="container text-center">
                    <h1>Leading Hospitals in India</h1>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        We work exclusively with internationally accredited (JCI, NABH) institutions across India to ensure the highest standards of safety and care.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-2 md:grid-3 gap-8">
                        {hospitals.map((h, idx) => (
                            <div key={idx} className="shadow-card p-0 overflow-hidden">
                                <div className="h-48 overflow-hidden bg-gray-200">
                                    <img src={h.img} alt={h.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded inline-block mb-2">{h.location}</span>
                                    <h3 className="text-xl mb-2">{h.name}</h3>
                                    <div className="flex gap-2 mb-6">
                                        {h.acred.map(a => (
                                            <span key={a} className="text-xs border text-gray-500 border-gray-200 px-2 py-1 rounded">{a} Accredited</span>
                                        ))}
                                    </div>
                                    <Link href="/contact" className="text-primary text-sm font-semibold hover:underline">View Profile &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
