import { NextResponse } from 'next/server';
import openai from '../_lib/OpenAI'
export async function POST(request){
    const req = await request.json()
    console.log(req[0])
    const prompt = `Give me a list of three cocktails I can make with the ingredients I have. If the cocktail requires additional ingredients that I need to buy, list them in the "ingredients" field and also the "additionalIngredients" field. The list of cocktails should be in JSON format. Use the JSON object below as a guide:
    {
    "cocktailName" : "name_of_cocktail",
    "ingredients" : [{"ingredientName" : "name_of_ingredient","amount" : "amount_of_ingredient"}],
    "recipe" : "cocktail_recipe",
    "additionalIngredients" : ["name_of_first_ingredient","name_of_second_ingredient"]
    }
    
    Ingredients I own (ingredients with a ! at the end must be used): 
    '''
    ${req.join(', ')}
    '''`
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:prompt,
        temperature: 0,
        max_tokens: 1024,
      });
      console.log(response.data.choices[0].text)
    return NextResponse.json(response.data.choices[0])
    /*return NextResponse.json({text:`[
        {
          "cocktailName": "Minty Margarita",
          "ingredients": [
            {
              "ingredientName": "Tequila",
              "amount": "2 oz"
            },
            {
              "ingredientName": "Mint",
              "amount": "2 sprigs"
            },
            {
              "ingredientName": "Orange Juice",
              "amount": "1 oz"
            },
            {
              "ingredientName": "Lime Juice",
              "amount": "1 oz"
            },
            {
              "ingredientName": "Grenadine",
              "amount": "1/2 oz"
            }
          ],
          "recipe": "Muddle the mint in a shaker. Add the tequila, orange juice, lime juice, and grenadine. Shake with ice and strain into a glass filled with ice. Garnish with a lime wedge.",
          "additionalIngredients": []
        },
        {
          "cocktailName": "Vodka Sour",
          "ingredients": [
            {
              "ingredientName": "Vodka",
              "amount": "2 oz"
            },
            {
              "ingredientName": "Lime Juice",
              "amount": "1 oz"
            },
            {
              "ingredientName": "Simple Syrup",
              "amount": "1/2 oz"
            }
          ],
          "recipe": "Add the vodka, lime juice, and simple syrup to a shaker filled with ice. Shake and strain into a glass filled with ice. Garnish with a lime wedge.",
          "additionalIngredients": []
        },
        {
          "cocktailName": "Boulevardier",
          "ingredients": [
            {
              "ingredientName": "Bourbon",
              "amount": "2 oz"
            },
            {
              "ingredientName": "Amaro",
              "amount": "1 oz"
            },
            {
              "ingredientName": "Sweet Vermouth",
              "amount": "1 oz"
            }
          ],
          "recipe": "Add the bourbon, amaro, and sweet vermouth to a shaker filled with ice. Stir and strain into a glass filled with ice. Garnish with an orange peel.",
          "additionalIngredients": ["Sweet Vermouth"]
        }
      ]`})*/
}