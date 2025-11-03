import { z } from 'zod';

// Une façon plus générique de définir les règles de validation d'un password.
const passwordRules = z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/);

// The register validation schema.
export const registerSchema = z.object({
    lastname: z.string(),
    firstname: z.string(),
    email: z.email(),
    password: passwordRules,
    password_confirmation: z.string()
    
    // AJouter une couche de validation à l'objet utilisateur
}).refine((data) => data.password === data.password_confirmation, {
    message: "The password don't match with the first one.",

    path: ['password_confirmation']
});


// The login validation schema
export const loginSchema = z.object({
    email: z.email(),
    password: passwordRules
});

type registerUser = z.infer<typeof registerSchema>

type loginUser = z.infer<typeof loginSchema>