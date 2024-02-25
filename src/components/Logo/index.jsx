import { Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
    const navigate = useNavigate()

    return (
        <Image src='logo.png' alt="FKPLogo" maxH="50px" h='100%' onClick={() => navigate('/FKP/')} />
    )
}
