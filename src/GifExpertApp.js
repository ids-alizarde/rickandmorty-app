import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>  
            <div>
                <h2>GifMortyApp</h2>
            </div>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr/>

            <ol>
                {
                    categories.map(category => (

                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                        
                    ))
                }
            </ol>
        </>
    )
}

