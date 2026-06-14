'use server';

import { MealInput } from "Outer/types/meals";
import { saveMeal } from "./meals";


export async function shareMeal(formData: FormData) {
    const meal: MealInput = {
        title: formData.get("title") as string,
        summary: formData.get("summary") as string,
        instructions: formData.get("instructions") as string,
        image: formData.get("image") as File,
        creator: formData.get("creator") as string,
        creator_email: formData.get("email") as string,
    };

    console.log(meal);

    await saveMeal(meal);
}