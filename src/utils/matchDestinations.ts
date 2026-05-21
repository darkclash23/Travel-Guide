// src/utils/matchDestinations.ts
import { DESTINATIONS } from "../data/destinations";

export function getMatchingDestinations(form: any) {
  return DESTINATIONS.filter((d: any) => {
    return (
      form.placePreference === d.placePreference ||
      form.group === d.group ||
      form.purpose === d.purpose ||
      form.duration === d.duration ||
      form.budget === d.budget
    );
  });
}
