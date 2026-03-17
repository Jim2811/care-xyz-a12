export default function MetricsSection() {
  return (
    <section className="border-y border-slate-200 py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 text-center">
            <span className="mb-2 text-4xl font-black text-primary">5000+</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Happy Families
            </span>
          </div>

          <div className="flex flex-col items-center border-y border-slate-200 p-6 text-center md:border-x md:border-y-0">
            <span className="mb-2 text-4xl font-black text-primary">1200+</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Certified Caregivers
            </span>
          </div>

          <div className="flex flex-col items-center p-6 text-center">
            <span className="mb-2 text-4xl font-black text-primary">4.9/5</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Average Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}