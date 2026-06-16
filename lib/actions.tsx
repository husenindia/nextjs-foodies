'use server';

import { MealInput } from "Outer/types/meals";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


function isInvalidText(text: string) {
    return !text || text.trim() === '';
}
export async function shareMeal(prevState: { message: string | null }, formData: FormData) {
    const meal: MealInput = {
        title: formData.get("title") as string,
        summary: formData.get("summary") as string,
        instructions: formData.get("instructions") as string,
        image: formData.get("image") as File,
        creator: formData.get("creator") as string,
        creator_email: formData.get("creator_email") as string,
    };

    if(isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) || 
    isInvalidText(meal.creator) || isInvalidText(meal.creator_email) || 
    !meal.creator_email.includes('@') || !meal.image || meal.image.size=== 0) 
    {
        return {
            message: "Invalid input." 
        };
        
    }
    //await saveMeal(meal);
    await saveMeal(meal);
    revalidatePath("/meals"); // Revalidate the /meals page cache so newly added or updated meals appear immediately.
    redirect('/meals');
}