export default function MealsLoadingPage() {
    return <>
        <div className="flex flex-col items-center gap-4 py-8">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#016630]/20 border-t-[#016630]" />

        <p className="text-sm font-medium text-[#016630]">
            Fetching delicious meals...
        </p>
        </div>
    </>
}