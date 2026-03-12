import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const plans = [
  {
    name: "Basic",
    price: "₹399",
    details: ["General physician consultation", "Digital prescription", "Standard support"]
  },
  {
    name: "Plus",
    price: "₹699",
    details: ["Specialist consultation", "Priority appointment", "1 free follow-up"]
  },
  {
    name: "Family",
    price: "₹1499",
    details: ["Up to 4 family members", "Priority specialist slots", "2 free follow-ups"]
  }
];

export function PricingPlans() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Transparent pricing"
          subtitle="Simple plans for individual and family healthcare needs."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex h-full flex-col">
              <h2 className="text-lg font-semibold text-neutral-900">{plan.name}</h2>
              <p className="mt-2 text-3xl font-bold text-neutral-900">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {plan.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ButtonLink href="/consultation" variant="secondary" className="mt-6 w-full">
                Choose {plan.name}
              </ButtonLink>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
