import ServiceCard from "../Components/Services/ServiceCard";
import { FaBaby, FaUserNurse, FaPaw } from "react-icons/fa";
import { MdElderly, MdAccessibilityNew, MdHealing } from "react-icons/md";

const services = [
  {
    title: "Baby Care",
    description:
      "Expert newborn and toddler care including feeding, sleep training support, and developmental play activities in your home.",
    price: "From $25/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi19nhWy25l-UmhUC0SrljqeHw20dgZnBO1UvpvcAezaqFpcBX1qOAUVLWUmxOmqA06XqFIoulXHeWaYvO8zzHB528a12VNQ5VqD3XBPxy-t7q7V8WMnypIFRwRiGjbQLUooa7IAGT5laQNybvlK609Tju_F3hovQaL7Vx03Te7vmsaNc3XjYQ65ZGU3WGHnaqDiaWstsTnq6AFtBY1bJCU8pbpbu42Pw5uJmip5QTXMZJRcRf-NVg-3eqs16dqdIIxLe99uYqfYNf",
    badge: "Top Rated",
    icon: FaBaby,
    iconColor: "text-primary",
    priceColor: "text-primary",
  },
  {
    title: "Elderly Service",
    description:
      "Compassionate companionship, medication management, and daily living assistance to help seniors maintain independence.",
    price: "From $30/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgk_9L0RUpSWbk8lLx9_DDJs9HArQYYUDCH2Jm7RutL0JCeDOXLrsCroifAgx_wfywYBuWcSqO_3avqjEMuVtRr6PJIt6kQMy0R1tQeB4XD90O-8O_yZHQadivevEHaWiuXL-U6CDx_EH6dX_TuPrVgS-bNqRiFGLIqngqxJttvySW4-_Nh30XQALkzBbb2-HXhi30hjFbtCBVK3uipoPlbwiVKOCsAGqckSvHsA1H3gOC-FxzUvckxGtVByKaEXEpCZERmGA9Mywl",
    icon: MdElderly,
    iconColor: "text-teal-600",
    priceColor: "text-teal-600",
  },
  {
    title: "Sick People Service",
    description:
      "Short-term and chronic illness support provided by qualified nursing assistants and licensed care professionals.",
    price: "From $35/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzMuG21w7u0B4TdoNqacrcbvNuZuDve7h2797b9c3z6KqqR30iKeeluvEz0x_6k1uQF1jQCOOjUaWSKKSIbMyF1eKfQtTAmaNL1PrZni27uiSh9KZ8bHq2w4lvAx3iCOA1O6Xc0xeniHZiC91NHHEtQofizHGDvT1kZgUiSHxzgqKcS8NCN5iOSfg4OdDspFwVr4jHoNHqAGblsClsPUV760lPdzA8pYHCDFP_6rV6PcxzUasc7BXQeQubSsMioneRBsfBuCLJnN7C",
    icon: FaUserNurse,
    iconColor: "text-red-600",
    priceColor: "text-red-600",
  },
  {
    title: "Specialized Care",
    description:
      "Customized care plans for individuals with specific physical or cognitive disabilities requiring specialized attention.",
    price: "Custom Pricing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKut8PcVx9ZAe3-aQB5uZnkO_Cld1sMiKpgW3nasNLFZpJZadn_OAD854a4_b1Km85inVL0m0NshRtHYN30-5bTu4LzERtlqKhv74gAY7iMnAsa-DF8PQjktHznqvAAjLZP69Ks0uWbzOcl3bwOasCIYD-4uq1KPSIBKoESHkSUojkrxY10SVlcMudP9hKgAz-9GR8I3yCQKC-XgAmjxVPujlEZfgRrTOag5zHz0fdvzqnvMNolfPRltZQhUDlCYlallX8igZroq58",
    icon: MdAccessibilityNew,
    iconColor: "text-slate-600",
    priceColor: "text-slate-600",
  },
  {
    title: "Post-Op Recovery",
    description:
      "In-home support following surgeries to ensure proper wound care, medication adherence, and comfortable healing.",
    price: "From $40/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAom2BCQcHUo_kwflHBruSXdI_YteM-J53dqiUXTzEEtObzHVgXQo1jGGGSuPftTv0hD1ltRkek3ptlbIs0299p-BJPXnTumvNgGnbUY6DMQ250qNoDA_-x21-zEanCTiUsE9TE8KBMSfL0Fy2wq4gY6etl_qS4JmSBLDLFO9hAePjT-Wcz9O8ie8Yfpz3QEUy4pxLvSZCrL0gMwwg9fqlWjnDS1kARldGx40NiET9YZESBkuZcUiijtqJq97eXLIZ0XmXFpWXr7rdJ",
    icon: MdHealing,
    iconColor: "text-primary",
    priceColor: "text-primary",
  },
  {
    title: "Pet Care",
    description:
      "Reliable pet sitting, dog walking, and feeding services for your furry family members while you are away or busy.",
    price: "From $20/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa8IIYqrONaVQTzo2oEzIwN-ap0F8rel2_HZwfp5VBZTyk_rI0VdJ4N9nE4VVgNpKmXJu53MznZe8Xczordq8Z9sPlzndi5kR1JYDVVOGigLr1wjOKIzs5810PdTsfzDl5Kf9uAz_ehyo1WA_ic-KjQZKRzbmg8bgdCA_OuYMdZcIiHwDLggqRqDjzZeOx_rsefGLlFdQ0Zw9bWm0cpMCQ2Ug8Y_74XBOUiaCgNiUPATYfULuQjG3RkKqWP_qQ6P0kD1KxomQMGTFP",
    icon: FaPaw,
    iconColor: "text-teal-600",
    priceColor: "text-teal-600",
  },
];

const filters = [
  "All Services",
  "Childcare",
  "Senior Care",
  "Medical Care",
  "Housekeeping",
];

export default function ServicesPage() {
  return (
    <div className="bg-base-200 text-slate-900">
      <header className="bg-gradient-to-b from-primary/10 via-sky-50/60 to-base-200 px-6 pb-16 pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Care Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Professional, compassionate care tailored to your family&apos;s
            unique needs. We provide dedicated support for every stage of life.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={
                index === 0
                  ? "rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md"
                  : "rounded-full bg-slate-100 px-6 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200"
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
              badge={service.badge}
              Icon={service.icon}
              iconColor={service.iconColor}
              priceColor={service.priceColor}
            />
          ))}
        </div>
      </main>

      <section className="bg-primary px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
              Need a customized care plan?
            </h2>
            <p className="text-lg text-sky-100">
              Speak with our care coordinators to find the perfect match for
              your family&apos;s needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-white px-8 py-3 font-bold text-primary shadow-lg transition-all hover:shadow-xl active:scale-95">
              Book Consultation
            </button>
            <button className="rounded-xl border-2 border-white px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-primary active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}