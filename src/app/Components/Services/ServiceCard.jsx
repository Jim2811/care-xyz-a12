import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({
  title,
  description,
  price,
  image,
  badge,
  Icon,
  iconColor,
  priceColor,
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {badge ? (
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 backdrop-blur-md">
              {badge}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <Icon className={`text-xl ${iconColor}`} />
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className={`text-lg font-bold ${priceColor}`}>{price}</span>

          <button
            className={`flex items-center gap-1 text-sm font-bold transition-all group-hover:gap-2 ${priceColor}`}
          >
            View Details
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}