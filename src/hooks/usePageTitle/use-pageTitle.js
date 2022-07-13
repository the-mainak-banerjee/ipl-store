import { useEffect, useState } from "react"

export const usePageTitle = (title) => {
    const [pageTitle, setPageTitle] = useState(title)
    useEffect(() => {
        document.title = pageTitle
    },[pageTitle])

    return { pageTitle, setPageTitle }
}