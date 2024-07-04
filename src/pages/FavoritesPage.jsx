import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    return (
        <div className="bg-[#910f3f] flex-1 p-10 min-h-screen">
            <div className="max-w-screen-lg mx-auto md:mt-10">
                <p className="font-bold text-3xl md:text-5xl text-white">My Favorites</p>

                <div className="md:mt-4">
                    <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight text-white">Saved Recipes</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((recipe) => (
                        <RecipeCard key={recipe.label} recipe={recipe} />
                    ))}
                </div>
            </div>

            {favorites.length === 0 && (
                <div className="flex flex-col items-center gap-4">
                    <img src="/404.png" className="w-1/2 h-auto" />
                </div>
            )}
        </div>
    )                                   
}
export default FavoritesPage