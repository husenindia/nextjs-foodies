'use client';
import ImagePicker from "@/components/image-picker/image-picker";
import { shareMeal } from "Outer/lib/actions";

export default function ShareMealPage() {
    
    return (
        <>
            <header className="relative overflow-hidden bg-gradient-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf]">

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
                    action={shareMeal}> 

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
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-green-950"
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
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

                        <button
                            type="submit"
                            className="rounded-full bg-green-800 px-8 py-4 font-medium text-white transition hover:bg-green-900"
                        >
                            Share Meal
                        </button>

                    </form>

                </div>
            </main>
        </>
    );
}