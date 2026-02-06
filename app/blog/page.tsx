import Link from 'next/link';

const posts = [
    {
        title: "Is Medical Tourism in India Safe? A Complete Guide",
        excerpt: "Debunking myths about safety in Indian healthcare. Learn about JCI accreditation, international protocols, and patient safety standards.",
        date: "Oct 12, 2025",
        category: "Safety Guide",
        img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        title: "Why India is the World's Pharmacy & Surgery Hub",
        excerpt: "Discover why millions choose India for complex surgeries. From expert surgeons to advanced robotic technology at a fraction of the cost.",
        date: "Oct 05, 2025",
        category: "Why India",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        title: "Step-by-Step: How to Plan Your Medical Trip to India",
        excerpt: "A comprehensive checklist for international patients: e-Medical Visa, choosing a hospital, flight booking, and arrival protocols.",
        date: "Sep 28, 2025",
        category: "How it Works",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        title: "The True Cost of Surgery in India: What to Expect",
        excerpt: "Transparent pricing breakdown for major procedures. Understand what is included in your package and how much you really save.",
        date: "Sep 20, 2025",
        category: "Cost Analysis",
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        title: "Healing & Heritage: Wellness Beyond Treatment",
        excerpt: "Enhance your recovery with our doctor-approved, optional cultural experiences. Discover how mild exploration can aid your mental well-being.",
        date: "Sep 15, 2025",
        category: "Wellness Guide",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
        title: "Top 5 Hospitals in India for International Patients",
        excerpt: "A curated list of India's best hospitals known for treating international patients with world-class amenities and English-speaking staff.",
        date: "Sep 10, 2025",
        category: "Hospital Guide",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=600&q=80"
    }
];

export default function Blog() {
    return (
        <>
            <section className="bg-light py-20">
                <div className="container text-center">
                    <h1>India Medical Travel Guide</h1>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Your trusted resource for planning a safe, affordable, and successful medical journey to India.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-2 md:grid-3 gap-8">
                        {posts.map((post, idx) => (
                            <article key={idx} className="shadow-card p-0 overflow-hidden flex flex-col h-full">
                                <div className="h-48 overflow-hidden bg-gray-200 shrink-0">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                                </div>
                                <div className="p-6 flex flex-col grow">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-primary uppercase bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                                        <span className="text-xs text-secondary">{post.date}</span>
                                    </div>
                                    <h3 className="text-lg leading-snug mb-3 hover:text-primary cursor-pointer">{post.title}</h3>
                                    <p className="text-sm text-secondary mb-4 flex-grow">{post.excerpt}</p>
                                    <Link href="#" className="text-primary text-sm font-semibold hover:underline mt-auto inline-block">Read Article &rarr;</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
