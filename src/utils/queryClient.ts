import { QueryClient, keepPreviousData } from "@tanstack/react-query";


export  const queryCLient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: Infinity,
            placeholderData:keepPreviousData
        }
    }
});