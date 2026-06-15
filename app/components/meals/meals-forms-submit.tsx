'use client';
import { useFormStatus } from "react-dom";

export default function MealsFormsSubmit() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-green-800 px-8 py-4 font-medium text-white transition hover:bg-green-900"
        >
            { pending? "Submiting..." : "Share meal"}
        </button>

    )
}