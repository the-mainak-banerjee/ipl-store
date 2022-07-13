import axios from "axios"
import { useState } from "react"

export const useAxios = () => {
    const [response,setResponse] = useState(undefined)
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)

    const operation = async (config) => {
        try{
            setLoading(true)
            const results = await axios.request(config)
            setResponse(results.data)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return { operation, response, error, loading}
}