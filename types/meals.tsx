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