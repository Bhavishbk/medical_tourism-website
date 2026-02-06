
'use client';

import Link from 'next/link';
import {
  Award,
  Briefcase,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Search
} from 'lucide-react';
import { useMemo, useState } from 'react';

/* ------------------ DATA ------------------ */
const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    experience: "18+ years",
    location: "Delhi",
    qualification: "MD, DM Cardiology",
    hospital: "Apollo Hospitals",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Rajesh_Kumar",
    rating: 4.9,
    description:
      "Specialized in coronary artery disease, heart failure, and interventional cardiology. Dr. Kumar has performed over 5000 successful cardiac procedures."
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Orthopedic Surgeon",
    experience: "15+ years",
    location: "Mumbai",
    qualification: "MS, MCh Orthopedics",
    hospital: "Fortis Healthcare",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Priya_Sharma",
    rating: 4.8,
    description:
      "Expert in joint replacement, arthroscopic surgery, and sports medicine. Treats athletes and active patients with personalized rehabilitation programs."
  },
  {
    name: "Dr. Anil Verma",
    specialty: "Gastroenterologist",
    experience: "20+ years",
    location: "Bangalore",
    qualification: "MD, DM Gastroenterology",
    hospital: "Max Healthcare",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Anil_Verma",
    rating: 4.9,
    description:
      "Specializes in digestive disorders, endoscopy procedures, and gastrointestinal cancers. Renowned for diagnostic excellence and minimally invasive treatments."
  },
  {
    name: "Dr. Neha Singh",
    specialty: "Oncologist",
    experience: "16+ years",
    location: "Delhi",
    qualification: "MD, DM Medical Oncology",
    hospital: "Manipal Hospitals",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Neha_Singh",
    rating: 4.8,
    description:
      "Leading oncologist with expertise in breast cancer, lung cancer, and immunotherapy. Provides compassionate care with cutting-edge treatment protocols."
  },
  {
    name: "Dr. Vikram Patel",
    specialty: "Neurosurgeon",
    experience: "19+ years",
    location: "Chennai",
    qualification: "MS, MCh Neurosurgery",
    hospital: "Apollo Hospitals",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Vikram_Patel",
    rating: 4.9,
    description:
      "Expert in complex brain and spine surgeries. Specializes in tumor removal, spinal decompression, and minimally invasive neuroendoscopic procedures."
  },
  {
    name: "Dr. Anjali Desai",
    specialty: "Fertility Specialist",
    experience: "14+ years",
    location: "Bangalore",
    qualification: "MD, DNB Reproductive Medicine",
    hospital: "Fortis Healthcare",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Anjali_Desai",
    rating: 4.8,
    description:
      "Specializes in IVF, ICSI, and fertility preservation. Has helped thousands of couples achieve parenthood with high success rates."
  },
  {
    name: "Dr. Arjun Menon",
    specialty: "Urologist",
    experience: "17+ years",
    location: "Mumbai",
    qualification: "MS, MCh Urology",
    hospital: "Max Healthcare",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Arjun_Menon",
    rating: 4.8,
    description:
      "Expert in prostate health, kidney stones, and urological cancers. Offers robotic-assisted surgery."
  },
  {
    name: "Dr. Ritu Kapoor",
    specialty: "Plastic Surgeon",
    experience: "13+ years",
    location: "Delhi",
    qualification: "MS, MCh Plastic Surgery",
    hospital: "Manipal Hospitals",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Ritu_Kapoor",
    rating: 4.7,
    description:
      "Specialist in reconstructive and cosmetic surgery with natural-looking results."
  },
  {
    name: "Dr. Sanjay Gupta",
    specialty: "Ophthalmologist",
    experience: "21+ years",
    location: "Bangalore",
    qualification: "MS Ophthalmology, FRCS",
    hospital: "Apollo Hospitals",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr_Sanjay_Gupta",
    rating: 4.9,
    description:
      "Expert in cataract surgery, LASIK, and retinal treatments with advanced refractive techniques."
  }
];

/* ------------------ CARD ------------------ */
function DoctorCard({ doctor }: { doctor: (typeof doctors)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="shadow-card hover:shadow-lg transition hover:-translate-y-1 flex flex-col h-full rounded-xl overflow-hidden">
      <div className="h-56 bg-gray-200">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{doctor.name}</h3>
          <span className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-sm font-semibold">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            {doctor.rating}
          </span>
        </div>

        <span className="text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded mb-4 inline-block">
          {doctor.specialty}
        </span>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center gap-2">
            <Briefcase size={16} /> {doctor.experience}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Award size={16} /> {doctor.qualification}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {doctor.hospital}, {doctor.location}
          </div>
        </div>

        {expanded && (
          <p className="text-sm bg-blue-50 p-3 rounded mb-4 border-l-4 border-primary">
            {doctor.description}
          </p>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-primary font-semibold text-sm mb-4"
        >
          {expanded ? "Read Less" : "Read More"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <Link
          href="/contact"
          className="btn btn-primary text-center mt-auto"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}

/* ------------------ PAGE ------------------ */
export default function Doctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const specialties = ["All", ...new Set(doctors.map(d => d.specialty))];

  const filteredDoctors = useMemo(() => {
    return doctors.filter(d => {
      const q = search.toLowerCase();
      const matchSearch =
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q) ||
        d.hospital.toLowerCase().includes(q);

      const matchSpecialty =
        specialty === "All" || d.specialty === specialty;

      return matchSearch && matchSpecialty;
    });
  }, [search, specialty]);

  return (
    <>
      {/* Header */}
      <section className="section bg-light text-center">
        <div className="container">
          <h1>Our Expert Doctors</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Find the best doctors by specialty, location, or hospital.
          </p>
        </div>
      </section>

      {/* Search & Grid */}
      <section className="section bg-white">
        <div className="container">
          {/* Filters */}
<div className="filter-card">
  <div className="filter-group">
    {/* Search */}
    <div className="search-wrapper">
      <Search size={18} />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search doctor, specialty, hospital, location..."
        className="search-input"
      />
    </div>

    {/* Specialty Select */}
    <select
      value={specialty}
      onChange={(e) => setSpecialty(e.target.value)}
      className="filter-select"
    >
      {specialties.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  </div>
</div>

          {/* Grid */}
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {filteredDoctors.length ? (
              filteredDoctors.map((doctor, i) => (
                <DoctorCard key={i} doctor={doctor} />
              ))
            ) : (
              <p className="text-center col-span-full text-lg text-secondary">
                No doctors found.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
