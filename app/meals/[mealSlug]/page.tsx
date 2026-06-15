import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "Outer/lib/meals";

interface MealDetailsPageProps {
  params: {
    mealSlug: string;
  };
}
export async function generateMetadata({params}: MealDetailsPageProps) { // Name is default name given by next.js, and it looking for this kind of funciton
    const { mealSlug } = await params;
    const meal = getMeal(mealSlug);
    if(!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}
export default async function MealDetailsPage({params} : MealDetailsPageProps) {
    const { mealSlug } = await params;
    const meal = getMeal(mealSlug);
    if(!meal) {
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

    return (
        <>
            <header className="relative overflow-hidden bg-gradient-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf]">

                {/* Decorative Blobs */}
                <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
                <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* Image */}
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <div className="relative h-[350px] md:h-[450px]">
                                <Image
                                    src={`/images/${meal.image}`}
                                    alt={meal.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="mb-6 text-4xl font-bold text-green-950 md:text-5xl">
                                {meal.title}
                            </h1>

                            <p className="mb-4 text-lg text-green-700">
                                Created by{" "}
                                <a
                                    href={`mailto:${meal.creator_email}`}
                                    className="font-semibold hover:underline"
                                >
                                    {meal.creator}
                                </a>
                            </p>

                            <p className="text-lg leading-relaxed text-gray-600">
                                {meal.summary} 
                            </p>
                        </div>

                    </div>
                </div>
            </header>

            <main className="bg-white py-16">
                <div className="mx-auto max-w-4xl px-6">

                    <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm md:p-10">
                        <h2 className="mb-8 text-3xl font-bold text-green-950">
                            Instructions
                        </h2>

                        <div
                            className="prose prose-lg max-w-none prose-headings:text-green-950 prose-strong:text-green-900"
                            dangerouslySetInnerHTML={{
                                __html: meal.instructions,
                            }}/>
                    </div>

                </div>
            </main>
        </>
    );
}