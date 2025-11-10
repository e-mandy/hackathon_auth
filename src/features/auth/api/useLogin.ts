import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas'


const sendUser = async (user: RegisterUser) => {
    new Promise((resolve) => {
        setTimeout(() => {
            const result = { token: "Résultat", user: user }
            resolve(result)
        }, 2000)
    })
}

export const useRegister = useMutation({
    mutationFn: sendUser
})
