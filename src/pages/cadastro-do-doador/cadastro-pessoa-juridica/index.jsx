import { useLocation } from "react-router-dom"

export default function RegisterLegalPerson () {
    const location = useLocation()
    {console.log(location)}
    return(
        <h1>Register-Legal-Person</h1>
    )
}