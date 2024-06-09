"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { queryCLient } from "./queryClient"

export const Providers = ({children}:{children:ReactNode})=>{

    return(
        <QueryClientProvider client={queryCLient}>
            {children}
        </QueryClientProvider>
    )
}