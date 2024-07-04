import { Heart, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return <>
        <DesktopSidebar />
        <MobileSidebar />
    </>
}
export default Sidebar

const DesktopSidebar = () => {
    return (
        <div className="p-10 border-r min-h-screen w-24 md: w-64 hidden sm:block bg-[#ede4de] border-r-2 border-black">
            <div className="flex flex-col gap-20 sticky top-10 left-0">
                <div className="w-full">
                    <img src="/desktop.png"></img>
                </div>
                <ul className="flex flex-col gap-8">
                    <Link to={"/"} className="flex gap-1">
                        <Home size={"24"} />
                        <span className="font-bold">Home</span>
                    </Link>
                    <Link to={"/favorites"} className="flex gap-1">
                        <Heart size={"24"} />
                        <span className="font-bold">Favorites</span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

const MobileSidebar = () => {
    return (
        <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-[#ede4de] z-10 p-5 sm:hidden border-t-2 border-black">
            <Link to={"/"}>
                <Home size={"24"} className="cursor-pointer" />
            </Link>
            <Link to={"/favorites"}>
                <Heart size={"24"} className="cursor-pointer" />
            </Link>
        </div>
    )
}