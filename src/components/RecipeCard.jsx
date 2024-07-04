import { Heart, HeartPulse, Soup } from "lucide-react"
import { useState } from "react"

const getTwo = (arr) => {
    return [arr[0], arr[1]]
}

const RecipeCard = ({recipe}) => {
    const healthLabels = getTwo(recipe.healthLabels)
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.label))

    const addFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const alreadySaved = favorites.some((fav) => fav.label === recipe.label)

        if(alreadySaved) {
            favorites = favorites.filter((fav) => fav.label !== recipe.label)
            setIsFavorite(false)
        } else {
            favorites.push(recipe)
            setIsFavorite(true)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    return (
        <div className="flex flex-col rounded-md bg-[#ede4de] overflow-hidden p-3 relative border-2 border-black">
            <a href={`${recipe.url}`} target="_blank" className="relative h-32">
                <img src={recipe.image} className="rounded-md w-full h-full object-cover cursor-pointer" />
                <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                    <Soup size={16} /> {recipe.yield} Servings
                </div>
                <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer" onClick={(e) => {
                    e.preventDefault() 
                    addFavorites()
                }}>
                    {!isFavorite && <Heart size={20} className="hover:fill-[#910f3f] hover:text-[#910f3f]" />}
                    {isFavorite && <Heart size={20} className="fill-[#910f3f] text-[#910f3f]" />}
                </div>
            </a>

            <div className="flex mt-1">
                <p className="font-bold tracking-wide">{recipe.label}</p>
            </div>
            <p className="my-2">{recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Cuisine</p>

            <div className="flex gap-2 mt-auto">
                {
                    healthLabels.map((label, idx) => (
                        <div key={idx} className="flex gap-1 bg-white items-center p-1 rounded-md">
                            <HeartPulse size={16} />
                            <span className="text-sm tracking-tighter font-semibold">{label}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default RecipeCard