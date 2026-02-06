import { Shield, Users, Heart, Globe } from 'lucide-react';

export default function About() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <div className="container text-center">
                    <h1 className="text-white mb-4">About Genesis Voyage</h1>
                    <p className="max-w-2xl mx-auto text-blue-100 text-lg">
                        We are dedicated to bridging the gap between quality healthcare and affordability.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container grid grid-2 gap-12 items-center">
                    <div>
                        <h2 className="mb-6">Our Mission</h2>
                        <p className="text-secondary text-lg mb-6">
                            To empower patients globally by providing access to world-class medical treatments in India at transparent and affordable prices, ensuring a safe and seamless journey from consultation to recovery.
                        </p>
                        <h3 className="mb-4 text-xl">Our Vision</h3>
                        <p className="text-secondary mb-6">
                            To be the world’s most trusted medical tourism partner for India, known for integrity, patient-centric care, and excellence.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=600&q=80"
                            alt="Medical Team"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-12">Why Choose Us?</h2>

                    <div className="grid grid-2 md:grid-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-primary mb-4 flex justify-center"><Shield size={40} /></div>
                            <h4>Safety First</h4>
                            <p className="text-sm text-secondary">partners only with JCI-accredited hospitals.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-primary mb-4 flex justify-center"><Users size={40} /></div>
                            <h4>Expert Team</h4>
                            <p className="text-sm text-secondary">Dedicated patient coordinators for 24/7 support.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-primary mb-4 flex justify-center"><Heart size={40} /></div>
                            <h4>Patient Care</h4>
                            <p className="text-sm text-secondary">Personalized care plans tailored to your needs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-primary mb-4 flex justify-center"><Globe size={40} /></div>
                            <h4>Holistic Recovery</h4>
                            <p className="text-sm text-secondary">Focusing on emotional well-being with optional, safe cultural engagement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
