import { type SchemaTypeDefinition } from "sanity";

import recipeSchema from "./recipe";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipeSchema]
};
