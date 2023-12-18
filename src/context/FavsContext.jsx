/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FavsContext = createContext()

export function FavProvider({ children }) {
    const [fav, setFavs] = useState([])
    const AddtoFavs = Drink => {
        const ItemAddIndex = fav.findIndex(item => item.idDrink ==  Drink.idDrink)

        if (ItemAddIndex >= 0) {
            const newFav = structuredClone(fav)
            newFav[ItemAddIndex].quantity += 1
            return setFavs(newFav)
        }
        setFavs(prevState => ([
            ...prevState, {
                ...Drink
            }
        ]))
    }
    const DeletToFavs = Drink => {
        const sel = fav.filter(item => item.idDrink != Drink.idDrink)
        setFavs(sel)
    }
    const ClearFavs = () =>{
        setFavs([]) 
    }
    return (
        <FavsContext.Provider value={{fav,AddtoFavs,ClearFavs,DeletToFavs}}>
            {children}
        </FavsContext.Provider>
    )
}