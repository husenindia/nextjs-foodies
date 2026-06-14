export interface MealsListProps {
  meals: Meal[];
}

export interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
export interface ImagePickerProps {
    label: string,
    name: string
}

export interface MealInput {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}