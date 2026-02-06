import Link from 'next/link';
import { CheckCircle, DollarSign, ShieldCheck } from 'lucide-react';

export default function Cost() {
    return (
        <>
            <section className="bg-light py-20">
                <div className="container text-center">
                    <h1>Unmatched Value in Healthcare</h1>
                    <p className="text-secondary max-w-3xl mx-auto text-lg">
                        Experience world-class medical excellence in India at <strong>20-30% of the cost</strong> compared to the US and UK. No hidden fees, just transparent, affordable care.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <h2 className="mb-4">Global Cost Comparison (USD)</h2>
                            <p className="text-secondary">Estimated costs for major procedures. Prices include hospital stay and surgeon fees.</p>
                        </div>

                        <div className="overflow-x-auto shadow-card rounded-xl p-0">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white text-lg">
                                        <th className="p-6">Medical Procedure</th>
                                        <th className="p-6">USA Cost (Avg)</th>
                                        <th className="p-6 bg-primary-dark">Cost in India (Avg)</th>
                                        <th className="p-6">Your Savings</th>
                                    </tr>
                                </thead>
                                <tbody className="text-secondary text-base">
                                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-semibold text-gray-900">Heart Bypass (CABG)</td>
                                        <td className="p-5">$123,000</td>
                                        <td className="p-5 text-primary font-bold bg-blue-50/50">$5,500</td>
                                        <td className="p-5 font-bold text-success-color">~ 95%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-semibold text-gray-900">Knee Replacement (Single)</td>
                                        <td className="p-5">$35,000</td>
                                        <td className="p-5 text-primary font-bold bg-blue-50/50">$6,000</td>
                                        <td className="p-5 font-bold text-success-color">~ 83%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-semibold text-gray-900">Hip Replacement</td>
                                        <td className="p-5">$40,000</td>
                                        <td className="p-5 text-primary font-bold bg-blue-50/50">$7,000</td>
                                        <td className="p-5 font-bold text-success-color">~ 82%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-semibold text-gray-900">Spinal Fusion</td>
                                        <td className="p-5">$110,000</td>
                                        <td className="p-5 text-primary font-bold bg-blue-50/50">$6,500</td>
                                        <td className="p-5 font-bold text-success-color">~ 94%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-semibold text-gray-900">Dental Implant</td>
                                        <td className="p-5">$2,500</td>
                                        <td className="p-5 text-primary font-bold bg-blue-50/50">$450</td>
                                        <td className="p-5 font-bold text-success-color">~ 82%</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-semibold text-gray-900">IVF Cycle</td>
                                        <td className="p-5">$15,000</td>
                                        <td className="p-5 text-primary font-bold bg-blue-50/50">$3,500</td>
                                        <td className="p-5 font-bold text-success-color">~ 75%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-2 gap-12 mt-20">
                        <div className="bg-blue-50 p-8 rounded-2xl">
                            <h3 className="mb-4">Why is Healthcare in India so Affordable?</h3>
                            <p className="text-secondary mb-6">
                                The breakdown below explains how we maintain world-class quality at a fraction of the cost.
                            </p>
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-3">
                                    <DollarSign className="text-primary shrink-0 mt-1" size={20} />
                                    <div>
                                        <strong className="block text-gray-900 text-sm">Economic Advantage</strong>
                                        <span className="text-sm text-secondary">India's lower cost of living and operations significantly reduces hospital overheads compared to Western nations.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <DollarSign className="text-primary shrink-0 mt-1" size={20} />
                                    <div>
                                        <strong className="block text-gray-900 text-sm">Pharmaceutical Hub</strong>
                                        <span className="text-sm text-secondary">India is known as the "Pharmacy of the World," producing high-quality generic medicines at very low costs.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <DollarSign className="text-primary shrink-0 mt-1" size={20} />
                                    <div>
                                        <strong className="block text-gray-900 text-sm">High Efficiency</strong>
                                        <span className="text-sm text-secondary">Indian hospitals operate with high efficiency and volume, allowing them to pass on savings to patients.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4">The Quality Promise</h3>
                            <p className="text-secondary mb-8">
                                <strong>Lower cost does NOT mean lower quality.</strong> When you choose India, you are choosing medical excellence that meets and often exceeds global standards.
                            </p>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-success-color shrink-0" size={24} />
                                    <div>
                                        <h5 className="mb-1 text-base">Same Technology</h5>
                                        <p className="text-sm text-secondary">Hospitals use the same FDA-approved equipment (Da Vinci Robots, 3 Tesla MRIs) found in top US hospitals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-success-color shrink-0" size={24} />
                                    <div>
                                        <h5 className="mb-1 text-base">International Accreditation</h5>
                                        <p className="text-sm text-secondary">Our network includes over 40 JCI accredited and 1000+ NABH accredited hospitals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-success-color shrink-0" size={24} />
                                    <div>
                                        <h5 className="mb-1 text-base">Global Expertise</h5>
                                        <p className="text-sm text-secondary">Doctors are often trained in the UK or USA and have performed thousands of complex procedures.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="btn btn-primary">Get Your Custom Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
