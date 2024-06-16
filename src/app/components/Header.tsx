"use client"

import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Menu } from "@/app/types/menu"
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const menus: Menu[] = [
    { id: 1, name: 'Filmes' },
    { id: 2, name: 'Series' },
    { id: 3, name: 'Documentários' },

];

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const themeCtx = useTheme();

    const handleClickDarkMod = () => {
        themeCtx.ChangeTema()
    }

    return (
        <div className="w-screen relative">
            <div className=" md:flex justify-around h-[100px] bg-purple-600 dark:bg-red-600">

                <div className="flex justify-around items-center xl:w-[1000px] h-full]">
                    <Link href={'/'}><img className=" w-[240px] h-[100px] md:w-[340px] md:h-[120px]" src="LosFlix.gif" alt="" /></Link>

                    <div className=" md:hidden flex justify-center items-center h-full">
                        <GiHamburgerMenu onClick={() => setOpenMenu(!openMenu)} className=" h-[40px] w-[40px]" />
                    </div>

                    <div className=" flex md:justify-center md:items-center h-full ">
                        <div onClick={handleClickDarkMod}>
                            {themeCtx?.theme === 'dark' && <MdOutlineDarkMode className="w-[30px] h-[30px] cursor-pointer md:w-[50px] xl:h-[50px]" />}
                            {themeCtx?.theme === 'light' && <MdDarkMode onClick={handleClickDarkMod} className="w-[30px] h-[30px] cursor-pointer md:w-[50px] xl:h-[50px]" />}
                        </div>
                    </div>
                </div>

                <div className={`my-1 md:my-0 absolute md:relative md:flex md:justify-around md:w-[900px] w-full  ${openMenu ? 'top-15 opacity-100 dark:bg-red-600 z-[1000] pl-4 bg-purple-600' : ' hidden '} md:opacity-100 opacity-0`}>

                    <div className=" md:flex justify-center items-center h-full  md:m-0 my-2 ">
                        <ul className="md:flex gap-[50px]">
                            {menus.map(item => (

                                <div key={item.id} className={``}>
                                    <Link href={item.id === 2 ? '/searchserie' : '/search'} onClick={()=>setOpenMenu(false)}>
                                        <li className={` hover:text-white dark:hover:text-black md:m-0 my-2 xl:text-[20px] font-bold uppercase cursor-pointer hover:border-b-white dark:hover:border-b-black hover:border-b-2 w-[180px] md:w-full `}>{item.name}</li></Link>
                                </div>
                            ))} 
                        </ul>
                    </div>

                    <div className=" md:flex md:justify-center md:items-center md:gap-2 md:m-0 my-2 ">
                        <Link href={`/favoritos`} onClick={()=>setOpenMenu(false)} className="flex gap-2 hover:text-white dark:hover:text-black ">
                            <h3 className="font-bold uppercase hover:border-b-2 border-white dark:border-black xl:text-[20px]">Favoritos </h3>
                            <div>
                                <FaHeart className="xl:text-[25px] text-[25px] " />
                            </div>

                        </Link>
                    </div>

                </div>

            </div>

        </div>

    )
}