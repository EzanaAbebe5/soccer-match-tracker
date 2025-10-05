import React, { createContext, useContext, useEffect, useState } from 'react'


const FavoritesContext = createContext()


export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])


    useEffect(() => {
        const raw = localStorage.getItem('favorites')
        if (raw) setFavorites(JSON.parse(raw))
    }, [])


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    function addFavorite(team) {
        setFavorites(prev => {
            if (prev.find(t => t.id === team.id)) return prev
        return [...prev, team]
        })
    }


    function removeFavorite(id) {
        setFavorites(prev => prev.filter(t => t.id !== id))
    }


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
        )
    }


export function useFavorites() {
    return useContext(FavoritesContext)
}