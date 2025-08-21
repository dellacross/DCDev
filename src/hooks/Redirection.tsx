import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirection = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const path = window.location.pathname

        if(path === '/') navigate('/about')
    }, [navigate])

    return null
}

export default Redirection