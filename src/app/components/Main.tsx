import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { TopMovies } from "./TopMovie";
import { TopSeries } from "./TopSeries";

export const Main = () => {
    return (
        <div className=" container mx-auto flex flex-col justify-center items-center ">
            <div className=" w-[50px] h-[50px] flex justify-center items-center animate-bounce rounded-full cursor-pointer text-black bg-purple-600 dark:text-white dark:bg-red-600 ">
                <Link href={'/search'} className="">
                    <AiOutlineSearch className="h-[40px] w-[40px] hover:text-white dark:hover:text-black " />
                </Link>
            </div>

            <div className="">
                <TopMovies/>
                <TopSeries/>
            </div>
        </div>
    )
}