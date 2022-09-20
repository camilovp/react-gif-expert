import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Rick and morty', 'Dragon Ball'])
    const onAddCategory = (value) => {
        //adiciona un nuevo valor al final
        setCategories([...categories, value])
        //adiciona el nuevo valor al principio
        //setCategories(['nuevo', ...categories])

        //adiciona un nuevo arreglo
        //setCategories(['nuevo'])
    }
    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* <AddCategory setCategories={setCategories}></AddCategory> */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)}></AddCategory>
            {/* listado Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
               {
                    categories.map(category => (
                        // return <li key = {category }>{category}</li>
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
               }
            {/* gif Item */}
        </>
    )
}