import { FaArrowRight, FaBaby, FaUserNurse } from "react-icons/fa";
import { MdElderly } from "react-icons/md";

const services = [
  {
    title: "Baby Care",
    description:
      "Expert babysitters and nannies for your little ones, ensuring safety and fun activities.",
    icon: FaBaby,
    iconBg: "bg-blue-100 text-blue-600",
    extraClass: "",
  },
  {
    title: "Elderly Service",
    description:
      "Compassionate companionship and daily assistance for seniors to live comfortably.",
    icon: MdElderly,
    iconBg: "bg-green-100 text-green-600",
    extraClass: "",
  },
  {
    title: "Sick People Service",
    description:
      "Professional home nursing and support for those recovering from illness or surgery.",
    icon: FaUserNurse,
    iconBg: "bg-red-100 text-red-600",
    extraClass: "sm:col-span-2 lg:col-span-1",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Our Services</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Explore our range of professional care services tailored to your
            family&apos;s unique needs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group rounded-[1rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl ${service.extraClass}`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${service.iconBg}`}
                >
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-slate-600">{service.description}</p>

                <button className="flex items-center gap-2 font-bold text-primary transition-all hover:gap-3">
                  View Details
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}