import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas'
import { useAuthStore } from '../store/auth.store';

const users: RegisterUser[] = [];


const useLogin = useMutation({
    mutationFn: sendUser,
    onSuccess: (data) => {
        //
    }
})