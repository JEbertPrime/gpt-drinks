import { useState, memo } from "react";
import { useSwipeable } from "react-swipeable";
const CocktailCard =(props)=>{
    const {cocktails} = props
    const [activeCocktail, setActiveCocktail] = useState(0)
  
    function changeActiveCocktail(index){
            if(index >-1 ) {
                setActiveCocktail(index%cocktails.length)
            }else{
                setActiveCocktail(cocktails.length-1)
            }
      
    }
    const config = {
        delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
        preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
        trackTouch: true,                      // track touch input
        trackMouse: false,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
        swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
        touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
      }
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            switch (eventData.dir){
                case 'Right':
                    changeActiveCocktail(activeCocktail - 1);
                    break;
                case 'Left':
                    changeActiveCocktail(activeCocktail + 1)
                    break;
            }

        },
        ...config,
      });
    return(
        <>
        <div className="flex gap-10">
        <button onClick={()=>changeActiveCocktail(activeCocktail-1)}>{'<'}</button>
        <ul className="flex gap-1 align-middle items-center">
            {cocktails.map((cocktail,index)=><li key={index} className={`rounded ${activeCocktail == index ? "border-8":"border-2"} border-neutral-700 w-1 h-1`}></li>)}
        </ul>
        <button onClick={()=>changeActiveCocktail(activeCocktail+1)}>{'>'}</button>

        </div>
        <div {...handlers} className={`max-w-sm transition-all animate-fade ease-in duration-300 rounded overflow-hidden bg-red-200 shadow-lg mb-5 px-6 py-4`}>
          <div className="py-5">
            <div className="font-bold text-xl text-neutral-700 my-2">
              {cocktails[activeCocktail].cocktailName}
            </div>
            <ul className="text-gray-700 text-base">
              {cocktails[activeCocktail].ingredients.map((ingredient,i)=><li key={'ingredient'+i}>{ingredient.amount} {ingredient.ingredientName}</li>)}
            </ul>
          </div>
          <p className="text-gray-700 text-base">
            {cocktails[activeCocktail].recipe}
          </p>
          {cocktails[activeCocktail].additionalIngredients.length > 0 ? <>
          <br/>
          <p className="text-gray-700 text-base">
            Shopping list: 
          </p>
           <ul className="text-gray-700 text-base">
           {cocktails[activeCocktail].additionalIngredients.map((ingredient,i)=><li key={'ingredient'+i}>{ingredient}</li>)}
         </ul>
         </>
          :null}
          
        </div>
       
        </>
    )
}
export default CocktailCard