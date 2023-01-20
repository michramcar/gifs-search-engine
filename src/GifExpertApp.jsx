import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (item) => {
        if (categories.includes(item)) return;
        setCategories([item, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map(e => <GifGrid
                    category={e}
                    key={e}
                />)
            }
        </>
    )
}