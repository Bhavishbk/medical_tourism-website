import { Plane, Calendar, Home, Map } from 'lucide-react';

export default function TravelSupport() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <div className="container text-center">
                    <h1>Travel & Logistics Support</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        We handle every detail of your journey so you can focus entirely on your recovery.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-2 gap-12 items-center mb-16">
                        <div>
                            <h2>End-to-End Assistance</h2>
                            <p className="text-secondary">
                                From the moment you contact us until you are safely back home, our dedicated team manages your itinerary, medical appointments, and travel arrangements.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&h=600&q=80"
                                alt="Travel assistance"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-2 md:grid-4 gap-8">
                        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-primary mb-4"><Plane size={40} /></div>
                            <h4>Visa & Flights</h4>
                            <p className="text-sm text-secondary">Expert assistance with Indian Medical Visa (e-Medical Visa) applications and flight bookings.</p>
                        </div>
                        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-primary mb-4"><Home size={40} /></div>
                            <h4>Stay in India</h4>
                            <p className="text-sm text-secondary">Partner hotels and recovery suites near major Indian hospitals for all budgets.</p>
                        </div>
                        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-primary mb-4"><Map size={40} /></div>
                            <h4>Local Transport</h4>
                            <p className="text-sm text-secondary">Complimentary airport pickup upon arrival in India and transfers to the hospital.</p>
                        </div>
                        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-primary mb-4"><Calendar size={40} /></div>
                            <h4>Wellness & Exploration</h4>
                            <p className="text-sm text-secondary">Optional, doctor-approved cultural, yoga, and wellness experiences for patients and companions to aid recovery.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
