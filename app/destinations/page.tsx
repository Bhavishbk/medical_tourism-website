import Link from 'next/link';
import { MapPin, Check } from 'lucide-react';

const destinations = [
    {
        name: "Delhi NCR",
        description: "India's capital is a hub for high-end medical facilities. Guests may also opt for guided, doctor-approved day trips to the Taj Mahal in Agra for a serene cultural experience.",
        specialties: ["Robotic Surgery", "Organ Transplants", "Neurology"],
        img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&h=600&q=80"

    },
    {
        name: "Mumbai",
        description: "The financial capital offers advanced healthcare. For relaxation, we can arrange light, recovery-friendly visits to coastal Alibaug or quiet heritage sites, subject to medical clearance.",
        specialties: ["Oncology", "Orthopedics", "Cosmetic Surgery", "IVF"],
        img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        name: "Chennai",
        description: "Known as the 'Health Capital'. Recovering patients can explore optional, peaceful wellness retreats in nearby Pondicherry, focusing on relaxation and rejuvenation.",
        specialties: ["Eye Care", "Cardiology", "Organ Transplants", "Checkups"],
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f0bd44?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        name: "Bangalore",
        description: "The Garden City combines advanced tech with pleasant weather. Doctor-approved nature therapy in Coorg or Mysore can be arranged for a holistic healing experience.",
        specialties: ["Wellness", "Naturopathy", "Cardiac Surgery", "Spine Surgery"],
        img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&h=600&q=80"
    }
];

export default function Destinations() {
    return (
        <>
            <section className="bg-light py-20">
                <div className="container text-center">
                    <h1>India's Medical Hubs</h1>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Explore India's leading cities offering exceptional treatment, world-class hospitals, and comfortable recovery environments.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="flex flex-col gap-12">
                        {destinations.map((dest, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-8 items-center border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-full md:w-2/5 aspect-video rounded-lg overflow-hidden shrink-0 my-4 md:my-0 md:mx-8">
                                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full md:w-3/5">
                                    <div className="flex items-center gap-2 mb-2 text-primary">
                                        <MapPin size={24} />
                                        <h2 className="mb-0 text-2xl">{dest.name}</h2>
                                    </div>
                                    <p className="text-secondary mb-6">{dest.description}</p>
                                    <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-3">Top Specialties</h4>
                                    <ul className="grid grid-cols-2 gap-2 mb-8">
                                        {dest.specialties.map((spec, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                                <Check size={16} className="text-success-color" /> {spec}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="btn btn-outline">Plan Trip to {dest.name}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
