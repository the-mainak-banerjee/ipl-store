import { useEffect, useState } from "react"

export const usePageTitle = (title) => {
    const [pageTitle, setPageTitle] = useState(title)
    console.log(title)
    console.log(pageTitle)
    useEffect(() => {
        setPageTitle(title)
        document.title = pageTitle
    },[title, pageTitle])

    return { pageTitle, setPageTitle }
}