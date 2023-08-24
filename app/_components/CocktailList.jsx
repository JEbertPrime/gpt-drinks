import { useState, memo, useTransition } from "react";
import CocktailCard from './CocktailCard.jsx'
async function CocktailList(props) {
  const { promise } = props;
    const aiResponse = await promise
    const cocktails = JSON.parse(aiResponse.text)
    
      
          return(
           <CocktailCard cocktails={cocktails} />
          )
      
    
       
  
 
  
        
      
    
  
};
export default memo(CocktailList);
