import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: `"Finding a caregiver for my elderly father was stressful until I found Care.xyz. The process was seamless and the caregiver is wonderful."`,
    name: "Sarah Jenkins",
    location: "San Francisco, CA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADhZcYFjAC4whBYAX2OIxyyc4LiMyi-kRDR4ZCnWIxg7cmmT7cnrX3hiLHfqouEeOhDwB1agKW4qnwK5lBKmlZdhp404UsNs_Rme3d76lqAYpd3Rj-4keZQLqW8j2pW9sgfqPXF6E_sWmkggxEPEIUR4o4jtRr0lEQnMRJ2hyIO0N9Y-EO7jFBKnc2yBzj4nQa_A1UrKts-LbLIuGzrRfsTFf8X0NEHWSHaUHOXqcMMvhVjD3pC3rlUoH70Sdra882G3MSb94BAWdA",
    extraClass: "",
  },
  {
    text: `"The babysitters on this platform are top-notch. My kids love their 'playtime buddy' and I finally have peace of mind during date nights."`,
    name: "David Miller",
    location: "Austin, TX",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCH23rnvrbTpkTwL9y3VC0oJoy6pymY1qWCyB3VdJECJgnwa8MNgERXyS44poRpAPphl8iXrzeUj7n8mBhS0BOHQXy6XwbrO7XQPthTWmzD7Pn9mLXwULY5H2qbcTOA0g2j55TH4qqdBt7NHEV-ECoawiLMzTu40UNnPOHbBb6DjgD3axYBVt65nxHrYA-o71Q5NQmtD_htnYkzjt5VuOQw1i5Xfrxvn0xVVroeCllAyGKpvk3Z0JhnIOm97isNQz-FCgVej9PQpwws",
    extraClass: "",
  },
  {
    text: `"When I was recovering from surgery, the specialized care I received was incredible. Highly recommend this service to anyone in need."`,
    name: "Elena Rodriguez",
    location: "Miami, FL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFG-NhmzEqoXkbkQmTbOWeeSTsv0px35GQS9BiMNgwON8Q4DFqqjPOR3jvuiWTUdjR3mYVzLXHNbjsx3oCOpEOw7Fp01-zWkbW0kG967W8jUA2TA-8DZo84v6S8L_am5w_6o8lKIkuwL8RIMYgnSrYAYG9H-iAYvKJJeb35K8kBAGxo9HUD-bsvDw2YH3clTBQpogYrohSqcIHGTqv24N2B1B1sN64XWR2D7HnGyTEy_FZS-y5N4EVclc7fz4h-KkfJ03VR9o4ahdE",
    extraClass: "md:col-span-2 lg:col-span-1",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="section-container">
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-900">
          Trusted by Families
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className={`relative rounded-[1rem] bg-white p-8 italic shadow-sm ${item.extraClass}`}
            >
              <FaQuoteLeft className="pointer-events-none absolute left-4 top-4 text-6xl text-primary/20" />
              <p className="relative z-10 mb-6 text-slate-600">{item.text}</p>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <span className="text-xs text-slate-500">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}