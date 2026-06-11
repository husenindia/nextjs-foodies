// components/Banner.jsx

import Link from "next/link";
import Image from "next/image";
import ImageSliderShow from "../image-slideshow/image-slideshow";

export default function HeroBanner() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf]">

            <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-2">

                    {/* Left Side - Food Banner */}
                    <div className="relative flex justify-center">
                        {/* <Image
                            src="/images/food-banner.png" // Replace with your image
                            alt="Food Banner"
                            width={600}
                            height={500}
                            priority
                            className="w-full max-w-xl object-contain"
                        /> */}
                        <ImageSliderShow></ImageSliderShow>
                    </div>

                    {/* Right Side - Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="mb-8 text-4xl font-bold leading-tight text-green-950 md:text-5xl lg:text-6xl">
                            Explore Authentic
                            <span className="block text-green-700">
                                Flavors From Every Country
                            </span>
                        </h1>

                        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
                            Discover traditional meals, cultural recipes, and iconic
                            dishes loved by millions around the world. Start your
                            culinary journey and experience food beyond borders.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href="/dishes"
                                className="rounded-full bg-green-800 px-8 py-4 font-medium text-white transition hover:bg-green-900"
                            >
                                Explore Dishes
                            </Link>

                            <Link
                                href="/countries"
                                className="rounded-full border border-green-800 px-8 py-4 font-medium text-green-900 transition hover:bg-white/50"
                            >
                                Browse Countries
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}