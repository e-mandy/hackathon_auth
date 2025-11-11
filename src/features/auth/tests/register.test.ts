import { assertType, beforeEach, describe, expect, it } from 'vitest'
import { useAuthStore } from '../store/auth.store'
import type { AuthStore } from '../schemas';
import { renderHook } from '@testing-library/react'
import type { ApiResponse } from '../api/useRegister';

const FAKE_DATA: ApiResponse = {
    user: {
        lastname: "John",
        firstname: "Doe",
        email: "johndoe@gmail.com",
        password: "Azerty1234",
        password_confirmation: "Azerty1234"
    },
    token: "API_TOKEN"
}

beforeEach(() => {
    useAuthStore.setState({ user: null, token: null })
})

describe('test du store du Auth', () => {

    it('est de type AuthStore', () => {
        const { result } = renderHook(() => useAuthStore())
        assertType<AuthStore>(result.current)
    })

    it('a ses propriétés null au départ', () => {
        const { user, token } = useAuthStore.getState();

        expect(user).toBeNull();
        expect(token).toBeNull();
    })

    it("se met à jour à l'appel de la fonction login", () => {
        const { login } = useAuthStore.getState();

        login(FAKE_DATA);

        const { user, token } = useAuthStore.getState();

        expect(token).equal(FAKE_DATA.token);
        expect(user).equal(FAKE_DATA.user)
    })

    it("repasse à null au logout", () => {
        const { logout } = useAuthStore.getState();

        logout();

        const { user, token } = useAuthStore.getState();

        expect(user).toBeNull();
        expect(token).toBeNull();
    })
})