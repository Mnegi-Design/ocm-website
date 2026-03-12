import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const doctors = [
  { name: "Dr. Riya Sharma", specialty: "General Physician", experience: "11 years" },
  { name: "Dr. Arjun Mehta", specialty: "Cardiology", experience: "14 years" },
  { name: "Dr. Neha Verma", specialty: "Dermatology", experience: "9 years" },
  { name: "Dr. Sandeep Rao", specialty: "Pediatrics", experience: "12 years" },
  { name: "Dr. Kavya Patel", specialty: "Gynecology", experience: "10 years" },
  { name: "Dr. Aman Khanna", specialty: "Orthopedics", experience: "13 years" }
];

export function DoctorsGrid() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Our doctors"
          subtitle="Experienced and verified practitioners across core specialties."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.name}>
              <h2 className="text-lg font-semibold text-neutral-900">{doctor.name}</h2>
              <p className="mt-1 text-sm font-medium text-secondary">{doctor.specialty}</p>
              <p className="mt-2 text-sm text-neutral-500">Experience: {doctor.experience}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
