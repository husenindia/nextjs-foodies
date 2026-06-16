'use client';
import ImagePicker from "@/components/image-picker/image-picker";
import MealsFormsSubmit from "@/components/meals/meals-forms-submit";
import { shareMeal } from "Outer/lib/actions";
import { useActionState } from "react";

const initialState = {
  message: null as string | null,
};

export default function ShareMealPage() {
    const [state, formAction] = useActionState(shareMeal, initialState);
    return (
        <>
            <header className="relative overflow-hidden bg-linear-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf]">

                <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
                <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

                <div className="mx-auto max-w-4xl px-6 py-16 text-center">
                    <h1 className="mb-6 text-4xl font-bold text-green-950 md:text-5xl">
                        Share Your Favorite Meal
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Inspire food lovers around the world by sharing a
                        delicious recipe, family tradition, or unique culinary
                        creation.
                    </p>
                </div>
            </header>

            <main className="bg-white py-16">
                <div className="mx-auto max-w-4xl px-6">

                    <form className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm md:p-10"
                    action={formAction}> 

                        {/* User Information */}
                        <div className="mb-10 grid gap-6 md:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="creator"
                                    className="mb-2 block text-sm font-medium text-green-950"
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="creator"
                                    name="creator"
                                    required
                                    className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-600"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="creator_email"
                                    className="mb-2 block text-sm font-medium text-green-950"
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    id="creator_email"
                                    name="creator_email"
                                    required
                                    className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-600"
                                />
                            </div>

                        </div>

                        {/* Meal Title */}
                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="mb-2 block text-sm font-medium text-green-950"
                            >
                                Meal Title
                            </label>

                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-600"
                            />
                        </div>

                        {/* Summary */}
                        <div className="mb-6">
                            <label
                                htmlFor="summary"
                                className="mb-2 block text-sm font-medium text-green-950"
                            >
                                Short Summary
                            </label>

                            <textarea
                                id="summary"
                                name="summary"
                                required
                                className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-600"
                            />
                        </div>

                        {/* Instructions */}
                        <div className="mb-8">
                            <label
                                htmlFor="instructions"
                                className="mb-2 block text-sm font-medium text-green-950"
                            >
                                Instructions
                            </label>

                            <textarea
                                id="instructions"
                                name="instructions"
                                required
                                className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-600"
                            />
                        </div>
                        <div className="mb-10">
                            <ImagePicker label="Your image" name="image"></ImagePicker>
                        </div>
                        {state.message && <p className="text-red-700 text-2xl">{state.message}</p>}
                        <MealsFormsSubmit>
                        </MealsFormsSubmit>
                    </form>

                </div>
            </main>
        </>
    );
}