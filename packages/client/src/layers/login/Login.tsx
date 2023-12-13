import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import server from "../../utils/trpc";

type Inputs = {
  email: string,
  password: string,
};

const Login: React.FC = ()  => {
  const { register, setError, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!data.email) setError("email", { type: "focus" }, { shouldFocus: true }); 
    if (!data.password) setError("password", { type: "focus" }, { shouldFocus: true }); 
    const result = await server.user.checkLogin.query(data)
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="container">
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Username" />
            {errors.email && <span>This field is required</span>}

            <br/>
            <br/>
            
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" {...register("password")} />
            {errors.password && <span>This field is required</span>}

            <button type="submit">Login</button>
        </div>
    </form>
  );
}

export default Login