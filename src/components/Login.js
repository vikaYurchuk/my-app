import { useForm } from 'react-hook-form';
import React from 'react';

export default function Login() {

    const user = {
        login: "",
        password: ""
    };

    const onSubmit = (data) => {
        console.log(`Database for login:`, data);
    };

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input 
                        {...register("login", { 
                            required: "Email is required", 
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email is failed: "
                            } 
                        })} 
                        type="text" 
                    />
                    {errors.login && <p>{errors.login.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        {...register("password", { 
                            required: "Password is required", 
                            minLength: {
                                value: 6,
                                message: "The password must contain at least 6 characters"
                            } 
                        })} 
                        type="password" 
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <label>Age</label>
                    <input 
                        {...register("age", { 
                            required: "Age is required", 
                            min: {
                                value: 18,
                                message: "You must be at least 18 years old"
                            } 
                        })} 
                        type="number" 
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
