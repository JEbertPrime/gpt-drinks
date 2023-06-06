'use client'
import { useEffect, useState } from "react"

const IngredientList = (props)=> {
    //classlists
    const liClasses = 'w-full rounded-s '

    const {ingredients, setIngredients} = props
    const handleChange = (e)=>{
        const value = e.target.value
        let tempIngredients = [...ingredients]
        tempIngredients[tempIngredients.length - 1] = value
        setIngredients(tempIngredients)
    }
    const handleKeyDown =(e)=>{
        if(e.keyCode == 13){
            let tempIngredients = [...ingredients]
            tempIngredients.push('')
            setIngredients(tempIngredients)
        }
        if(e.keyCode == 8 && ingredients[ingredients.length -1] == '' && ingredients.length > 1){
            e.preventDefault()
            let tempIngredients = [...ingredients]
            tempIngredients.pop()
            setIngredients(tempIngredients)
        }
    }
    useEffect(()=>{

    })
    return (
        <ul className="  text-neutral-700">
               { ingredients.map((ingredient,i)=>{
                if(i<ingredients.length - 1){
                    return <li className={liClasses} key={'ingredient-'+i}>{ingredient}</li>
                }else{
                    return <li className={liClasses} key={'ingredient-'+i}><input name='ingredient' aria-label={'Ingredient Input #'+i} className="w-full p-1" autoFocus value={ingredient} onKeyDown={handleKeyDown} onChange={handleChange} placeholder="ingredient"/></li>
                }
               })}
        </ul>
    )
}
export default IngredientList