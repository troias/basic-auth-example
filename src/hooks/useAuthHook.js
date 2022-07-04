import  {useState} from 'react'

export const useAuthHook = () => {

    const [ isLoggedIn, setIsLoggedIn] = useState(false)




    return [ isLoggedIn, setIsLoggedIn]
}
