import { Metadata } from "next"
import { ReactNode } from "react"


export const metadata: Metadata ={
    title: 'Detalhe filmes',
}

type Props ={
    children:ReactNode
}

export default function Detalhes ({children}:Props){
    return(
        <div>
            {children}
        </div>
    )
}