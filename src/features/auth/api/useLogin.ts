import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas'
import { useAuthStore } from '../store/auth.store';

const users: RegisterUser[] = [];


export const sendUser = async (user: RegisterUser) => {
    await new Promise(() => {
        setTimeout(()=> {
            users.push(user);
        }, 2000)
    })
    return user
}

// const useLogin = useMutation({
//     mutationFn: sendUser,
//     onSuccess: (data) => {
        
//     }
// })