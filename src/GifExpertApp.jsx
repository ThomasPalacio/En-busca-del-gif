
import { useState } from 'react'
import { AddCategory, GifGrid  } from './components';
import { HeaderApp } from './components/HeaderApp';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (newCategory) =>{
        const categoriesUpperCase = categories.toString().toUpperCase();
        const newCategoryUpperCase = newCategory.toString().toUpperCase();
        if (categoriesUpperCase.includes(newCategoryUpperCase)) {
            return;
        }

        setCategories([newCategory,...categories])  //spread operator
    }


  return (
    <>
        <HeaderApp />

        <AddCategory 
        onNewCategory={ (value) => onAddCategory(value)}
        // setCategories= {setCategories}
        />


            {
            categories.map((category) =>(
                <GifGrid 
                    category={category} 
                    key={category}/>
                )
            )
            }
    </>

  )
}


