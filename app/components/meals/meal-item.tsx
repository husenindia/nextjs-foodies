import Link from "next/link";
import Image from "next/image";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6">
        <div className="mb-4">
          <h2 className="mb-2 text-2xl font-bold text-green-950">
            {title}
          </h2>

          <p className="text-sm font-medium text-green-700">
            By {creator}
          </p>
        </div>

        <p className="mb-6 line-clamp-3 text-gray-600 leading-relaxed">
          {summary}
        </p>

        <Link
          href={`/meals/${slug}`}
          className="inline-flex w-fit items-center rounded-full bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}