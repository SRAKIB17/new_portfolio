'use client'
import { getDictionary } from "@/src/language/language"
import { NextRequest } from "next/server"

import { createContext } from "react"
import Get_cookies from "./get_cookies"
import Navbar from "@/src/components/shared/Navbar/Navbar"
export const LanguageDictionaryProvide = createContext({})

export default async function Template({ children }: { children: React.ReactNode }) {
    return (
        <LanguageDictionaryProvide.Provider value={await getDictionary('en')}>
            {
                children
            }
        </LanguageDictionaryProvide.Provider>
    )
}

