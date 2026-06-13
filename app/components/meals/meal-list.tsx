import { MealsListProps } from "Outer/types/meals";
import MealItem from "./meal-item";
export default function MealsList({ meals }:MealsListProps) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}