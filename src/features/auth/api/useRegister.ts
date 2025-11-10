import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas'

type ApiResponse = {
    user: RegisterUser,
    token: string
}


const sendUser = async (user: RegisterUser): Promise<ApiResponse> => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            const result = { user: user, token: "Resultat" }
            resolve(result)
        }, 2000)
    })
}


export const useRegister = () => {

    return useMutation({
        mutationFn: sendUser
    })
}
