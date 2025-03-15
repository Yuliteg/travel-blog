import { type SchemaTypeDefinition } from "sanity";

import placeSchema from "./places";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [placeSchema]
};
