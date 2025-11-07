import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import type { RegisterUser } from "../schemas";
import { registerSchema } from "../schemas";

function RegisterForm(){

    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm<RegisterUser>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<RegisterUser> = async (data) => {
        await new Promise((resolve) => {
            setTimeout(()=>{
                resolve("...Loading")
            }, 2000)
        })

        console.log(data);

        reset();
    }

    return (
        <div>
            <div>
                <h3>LOGO</h3>
                <div>
                    <h1>C'est Parti !</h1>
                    <p>Bienvenue sur Wá xo, fait par des étudiants pour les étudiants.</p>
                </div>
                <div>
                    <div>
                        <p>S'inscrire avec Google</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div>
                                    <label htmlFor="lastname">Nom</label>
                                    <div>
                                        <input type="text" {...register("lastname")} id="lastname"/>
                                        {/* L'icon */}
                                    </div>
                                    { errors.lastname?.message ?? (<span>{errors.lastname?.message}</span>)}
                                </div>
                                <div>
                                    <label htmlFor="firstname">Prénom</label>
                                    <div>
                                        <input type="text" {...register("firstname")} id="firstname"/>
                                        {/* L'icon */}
                                    </div>
                                    { errors.firstname?.message ?? (<span>{errors.firstname?.message}</span>)}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Adresse mail</label>
                                <div>
                                    <input type="email" {...register("email")} id="email"/>
                                    {/* L'icon */}
                                    { errors.email?.message ?? (<span>{errors.email?.message}</span>)}
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <div>
                                    <input type="password" {...register("password")} id="password"/>
                                    {/* L'icon */}
                                </div>
                                { errors.password?.message ?? (<span>{errors.password?.message}</span>)}
                            </div>
                            <div>
                                <label htmlFor="password_confirmation">Confirmer le mot de passe</label>
                                <div>
                                    <input type="password" {...register("password_confirmation")} id="password_confirmation"/>
                                    {/* L'icon */}
                                    { errors.password_confirmation?.message ?? (<span>{errors.password_confirmation?.message}</span>)}
                                </div>
                            </div>


                            <button type="submit" disabled={isSubmitting}>
                                { isSubmitting ? "Loading..." : "S'inscrire" }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <img src="#" alt="" />
                <div>Connexion</div>
                <div>
                    <h4>Le succès est de passer d’un échec à l’autre sans perdre son enthousiasme.</h4>
                    <span>Winstone Churchill</span>
                </div>
            </div>
        </div>
    )

}

export default RegisterForm;