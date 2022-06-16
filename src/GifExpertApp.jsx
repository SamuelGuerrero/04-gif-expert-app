import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Star Wars", "Men I Trust"]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory)
    //setCategories([...categories, "Crumb"]);
    setCategories([newCategory, ...categories])
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de Gif */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* Gif Item */}
    </>
  );
};
