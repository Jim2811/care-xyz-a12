import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-16 pb-24 lg:pt-28 lg:pb-40">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[120%] w-[120%] rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="section-container grid items-center gap-16 lg:grid-cols-2">
        <div className="z-10 text-center lg:text-left">
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Reliable Care for Your{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Loved Ones
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-600 lg:mx-0">
            Find trusted babysitting, elderly care, and specialized home care
            services easily. We connect you with certified professionals who care.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="btn btn-primary h-auto rounded-xl px-8 py-4 text-lg font-bold shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
            <button className="btn h-auto rounded-xl border border-slate-200 bg-white/80 backdrop-blur-md px-8 py-4 text-lg font-bold text-slate-900 hover:scale-105 hover:border-primary hover:text-primary transition-transform duration-300">
              How it works
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem] shadow-2xl transition-transform duration-500">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO_Zu_644cXXFX3q09VqLELvUt8ahBxbq5lamc38kyLjreXSeAWiHC8JNSgeXmnxoVf2r92nv5jpYcxxlPSUqdBGuyCZCwaBW1z-OH5hTQUXLZwrCiykAC6WrSGNanueZxwLHQ5bOPfvUcJ_iNjnsysEIzfj_Tp7-ilJxcYgnMxvBJv5P4mhsGYkkvPMt4FPlOfBJ2AraVQsQEijMH-Z1iMVOr2XzDteUvGyCT5OePXhOUAI71gjFOPkWgp7xIZ8nWmeCnHTNDw5E7"
              alt="Caring caregiver with child"
              width={800}
              height={600}
              className="h-[400px] w-full object-cover sm:h-[500px]"
              priority
            />
          </div>
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 opacity-30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
