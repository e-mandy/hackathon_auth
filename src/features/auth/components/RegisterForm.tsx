import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import type { RegisterUser } from "../schemas";
import { registerSchema } from "../schemas";

function RegisterForm(){

    const { handleSubmit, register } = useForm<RegisterUser>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<RegisterUser> = (data) => {
        console.log(data);
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
                                        <input type="text" {...register("lastname")}/>
                                        {/* L'icon */}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="firstname">Prénom</label>
                                    <div>
                                        <input type="text" {...register("firstname")}/>
                                        {/* L'icon */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Adresse mail</label>
                                <div>
                                    <input type="email" {...register("email")}/>
                                    {/* L'icon */}
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <div>
                                    <input type="password" {...register("password")}/>
                                    {/* L'icon */}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password_confirmation">Confirmer le mot de passe</label>
                                <div>
                                    <input type="password" {...register("password_confirmation")}/>
                                    {/* L'icon */}
                                </div>
                            </div>


                            <button type="submit">S'inscrire</button>
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