import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas'


const sendUser = async (user: RegisterUser) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            const result = { token: "Résultat", user: user }
            resolve(result.user)
        }, 2000)
    })
}


export const useRegister = () => {

    return useMutation({
        mutationFn: sendUser
    })
}
