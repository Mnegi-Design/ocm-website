import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactDetails() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Contact us"
          subtitle="For support, business inquiries, and healthcare guidance coordination."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface p-6">
            <h2 className="text-lg font-semibold text-neutral-900">Get in touch</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>Email: support@chikitsamitra.com</li>
              <li>Phone: +91 99999 99999</li>
              <li>Hours: Mon-Sat, 9:00 AM - 8:00 PM</li>
            </ul>
          </article>

          <form className="surface p-6" aria-label="Contact form">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
