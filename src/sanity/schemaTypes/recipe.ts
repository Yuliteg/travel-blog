// sanity/schemaTypes/recipe.ts

const recipeSchema = {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'prepTime',
      title: 'Preparation Time',
      type: 'number',
    },
    {
      name: 'cookTime',
      title: 'Cooking Time',
      type: 'number',
    },
  ],
};

export default recipeSchema;
