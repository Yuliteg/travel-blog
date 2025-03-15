// sanity/schemaTypes/place.ts

const placesSchema = {
  name: "place",
  title: "Place",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "category",
      title: "Category",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    }
  ]
};

export default placesSchema;
