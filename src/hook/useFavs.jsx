import { useContext } from "react";
import { FavsContext } from "../context/FavsContext";

export const useFavs = () => {
    const context = useContext(FavsContext)

    if (context === undefined) {
        throw new Error('no se puede ocupar')
    }
    return context
}