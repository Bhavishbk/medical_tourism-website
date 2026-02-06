import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        location: "UK",
        treatment: "Cardiac Surgery in Delhi",
        text: "I was nervous about traveling to India for heart surgery, but Genesis Voyage handled everything. The hospital infrastructure in Delhi was world-class, and I saved 70% compared to private care in London.",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Ross",
        location: "USA",
        treatment: "Dental Implants in Mumbai",
        text: "The dental care in India is phenomenal. I got full mouth implants in Mumbai for a fraction of the US cost. The dentist was US-trained and the facilities were state-of-the-art.",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Fatima Al-Sayed",
        location: "UAE",
        treatment: "IVF in Bangalore",
        text: "After years of trying, we finally succeeded thanks to the expert fertility specialists in Bangalore. The doctors were compassionate and the technology was advanced.",
        img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default function Testimonials() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <div className="container text-center">
                    <h1>International Patient Stories</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        Read about the experiences of patients from across the globe who chose India for their medical journey.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-light p-8 rounded-xl relative">
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    <Star fill="currentColor" size={16} />
                                    <Star fill="currentColor" size={16} />
                                    <Star fill="currentColor" size={16} />
                                    <Star fill="currentColor" size={16} />
                                    <Star fill="currentColor" size={16} />
                                </div>
                                <p className="text-secondary italic mb-6">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h5 className="mb-0 text-base">{t.name}</h5>
                                        <span className="text-xs text-primary font-medium">{t.treatment}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
