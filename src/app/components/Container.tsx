"use client"
import { ReactNode } from "react"


export const Container = ({ children }: { children: ReactNode }) => {

    return (
        <div className={"w-full h-screen  bg-slate-200 text-black dark:bg-black dark:text-white"}>
            <div>
                {children}
            </div>

        </div>
    )
}