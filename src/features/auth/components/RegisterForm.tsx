import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import type { RegisterUser } from "../schemas";
import { registerSchema } from "../schemas";
import { Eye, Mail } from 'lucide-react';

function RegisterForm(){

    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm<RegisterUser>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<RegisterUser> = async (data) => {
        
        console.log(data)

        reset();
    }

    return (
        <div className="flex h-screen w-screen">
            <div className="w-1/2">
                <h3 className="text-3xl font-bold p-2">LOGO</h3>
                <div className="flex flex-col items-center mb-10">
                    <h1 className="mt-10 text-5xl font-extrabold mb-3">C'est Parti !</h1>
                    <p className="w-2/3 text-center">Bienvenue sur Wá xo, fait par des étudiants pour les étudiants.</p>
                </div>
                <div className="flex flex-col w-3/5 items-center mx-auto gap-10">
                    <button className="w-full google-button bg-[#F5F5F5] font-medium cursor-pointer">S'inscrire avec Google</button>
                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-4 mb-6">
                                <div>
                                    <label htmlFor="lastname">Nom</label>
                                    <div className="auth-input-style">
                                        <input type="text" className="input-disabled" {...register("lastname")} id="lastname"/>
                                        {/* L'icon */}
                                    </div>
                                    { errors.lastname?.message ?? (<span className="error-message">{errors.lastname?.message}</span>)}
                                </div>
                                <div>
                                    <label htmlFor="firstname">Prénom</label>
                                    <div className="auth-input-style">
                                        <input type="text" className="input-disabled" {...register("firstname")} id="firstname"/>
                                        {/* L'icon */}
                                    </div>
                                    { errors.firstname?.message ?? (<span className="error-message">{errors.firstname?.message}</span>)}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email">Adresse mail</label>
                                <div className="auth-input-style">
                                    <input type="email" className="input-disabled" {...register("email")} id="email"/>
                                    <Mail />
                                </div>
                                { errors.email?.message ?? (<span className="error-message">{errors.email?.message}</span>)}
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="password">Mot de passe</label>
                                <div className="auth-input-style">
                                    <input type="password" className="input-disabled" {...register("password")} id="password"/>
                                    <Eye />
                                </div>
                                { errors.password?.message ?? (<span className="error-message">{errors.password?.message}</span>)}
                            </div>
                            <div className="">
                                <label htmlFor="password_confirmation">Confirmer le mot de passe</label>
                                <div className="auth-input-style">
                                    <input type="password" className="input-disabled" {...register("password_confirmation")} id="password_confirmation"/>
                                    <Eye />
                                </div>
                                    { errors.password_confirmation?.message ?? (<span className="error-message">{errors.password_confirmation?.message}</span>)}
                            </div>


                            <button className="global-button w-full mt-10 bg-[#4399CB] text-white font-bold text-xl cursor-pointer" type="submit" disabled={isSubmitting}>
                                { isSubmitting ? "Loading..." : "S'inscrire" }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-auth w-1/2 relative">
                <div className="absolute right-7 top-5 button bg-[#4399CB] text-white">Connexion</div>
                <div className="absolute p-4 bottom-10 w-full">
                    <h4 className="text-3xl font-bold text-white w-4/5 mb-3 text-start">Le succès est de passer d’un échec à l’autre sans perdre son enthousiasme.</h4>
                    <span className="block text-white">Winstone Churchill</span>
                </div>
            </div>
        </div>
    )

}

export default RegisterForm;