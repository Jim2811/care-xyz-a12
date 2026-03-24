import Link from "next/link";
import Image from "next/image";
import {
  FaHandHoldingHeart,
  FaUserShield,
  FaHeart,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { MdVerifiedUser, MdSupportAgent, MdHealthAndSafety } from "react-icons/md";

export const metadata = {
  title: "About Us | Care.xyz",
  description:
    "Learn more about Care.xyz and our mission to make caregiving easy, secure, and accessible for everyone.",
};

const values = [
  {
    title: "Trust & Safety",
    description:
      "We carefully verify caregivers and focus on creating a secure experience for every family.",
    icon: FaUserShield,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Compassion First",
    description:
      "We believe caregiving is more than a service — it is a human connection built on empathy and care.",
    icon: FaHeart,
    color: "text-rose-500",
    bg: "bg-rose-100",
  },
  {
    title: "Community Support",
    description:
      "We bring families and professional caregivers together through a trusted and accessible platform.",
    icon: FaUsers,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

const highlights = [
  {
    title: "Verified Caregivers",
    description:
      "Every caregiver goes through a screening process to help ensure quality and trust.",
    icon: MdVerifiedUser,
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is ready to help families and caregivers whenever assistance is needed.",
    icon: MdSupportAgent,
  },
  {
    title: "Safe & Reliable Care",
    description:
      "We are committed to helping families find dependable care solutions with confidence.",
    icon: MdHealthAndSafety,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-base-200 text-slate-900">
      <section className="bg-gradient-to-b from-primary/10 via-sky-50/50 to-base-200 px-6 pb-16 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              About Care.xyz
            </span>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Compassionate care for every family, every stage of life
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
              Care.xyz is a trusted caregiving platform that connects families
              with professional caregivers for childcare, elderly support,
              medical assistance, and specialized care — all with safety,
              compassion, and convenience in mind.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90"
              >
                Explore Services
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

            <div className="overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1200&q=80"
                alt="Caregiver helping family"
                width={900}
                height={700}
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaHandHoldingHeart className="text-3xl" />
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Our mission
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            We are on a mission to make caregiving easy, secure, and accessible
            for everyone. By connecting families with trusted professionals, we
            help create safer homes, stronger support systems, and peace of
            mind for the people who matter most.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
              What we stand for
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Our platform is built on values that ensure meaningful, reliable,
              and people-first care experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${value.bg}`}
                  >
                    <Icon className={`text-2xl ${value.color}`} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
              Why families choose Care.xyz
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              We focus on trust, quality, and human-centered support so families
              can find care with confidence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="text-3xl" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-8 py-12 text-center shadow-lg sm:px-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
            Let&apos;s make care easier together
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-100">
            Whether you need trusted care for a loved one or you are a caregiver
            ready to support families, Care.xyz is here to help you get started.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-slate-100"
            >
              Join Now
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}