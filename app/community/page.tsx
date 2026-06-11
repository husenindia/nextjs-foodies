import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf]">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-green-950 md:text-5xl lg:text-6xl">
            One Shared Passion:
            <span className="block text-green-700">
              Food & Community
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Connect with food lovers, exchange recipes, discover new cuisines,
            and become part of a growing community built around great meals.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-green-950 md:text-4xl">
              Community Perks
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Everything you need to learn, share, and connect with fellow food
              enthusiasts.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-3">
            <li className="group rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex justify-center">
                <Image
                  src={mealIcon}
                  alt="A delicious meal"
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-green-950">
                Share Recipes
              </h3>

              <p className="leading-relaxed text-gray-600">
                Publish your favorite meals and discover inspiring recipes from
                food lovers around the world.
              </p>
            </li>

            <li className="group rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex justify-center">
                <Image
                  src={communityIcon}
                  alt="A crowd of people, cooking"
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-green-950">
                Build Connections
              </h3>

              <p className="leading-relaxed text-gray-600">
                Meet people who share your passion for cooking and explore food
                cultures together.
              </p>
            </li>

            <li className="group rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex justify-center">
                <Image
                  src={eventsIcon}
                  alt="A crowd of people at a cooking event"
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-green-950">
                Exclusive Events
              </h3>

              <p className="leading-relaxed text-gray-600">
                Participate in community challenges, cooking workshops, and
                special food-focused gatherings.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}