import MealsList from "@/components/meals/meal-list";
import Link from "next/link";
import { getMeals } from "Outer/lib/meals";
import { Suspense } from "react";

export async function Meals() {
  const meals = await getMeals();
  return <MealsList meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf]">
        
        {/* Decorative blur circles */}
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">

          <h1 className="mb-6 text-4xl font-bold leading-tight text-green-950 md:text-5xl lg:text-6xl">
            Delicious Meals
            <span className="block text-green-700">
              Created By Food Lovers
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Choose your favorite recipe and cook it yourself.
            Discover authentic meals shared by our community.
          </p>

          <Link
            href="/meals/share"
            className="inline-flex rounded-full bg-green-800 px-8 py-4 font-medium text-white transition hover:bg-green-900"
          >
            Share Your Favorite Recipe
          </Link>

        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Suspense fallback={
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#016630]/20 border-t-[#016630]" />
              <p className="text-sm font-medium text-[#016630]">
                  Fetching delicious meals...
              </p>
            </div>
          }>
            <Meals></Meals>         
          </Suspense>
        </div>
      </section>
    </>
  );
}