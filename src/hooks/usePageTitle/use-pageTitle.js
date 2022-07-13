import { useEffect, useState } from "react"

export const usePageTitle = (title) => {
    const [pageTitle, setPageTitle] = useState(title)
    useEffect(() => {
        setPageTitle(title)
        document.title = pageTitle
    },[title, pageTitle])

    return { pageTitle, setPageTitle }
}