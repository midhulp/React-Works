import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup';

export const Form=() =>{
    const schema = yup.object().shape({
        fullname:yup.string().required("your name is required"),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],"passwords dont match").required(),
    });

    const { register, handleSubmit, formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });
    

    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="fullname"{...register("fullname")}/>
            <p>{errors.fullname?.message}</p>
            <input type="text" placeholder="Email"{...register("email")}/>
            <p>{errors.email?.message}</p>

            <input type="number" placeholder="Age"{...register("age")}/>
            <p>{errors.age?.message}</p>

            <input type="password" placeholder="Passsword"{...register("password")}/>
            <p>{errors.password?.message}</p>

            <input type="password" placeholder="Confirm password"{...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>

            <input type="submit" />

        </form>
    );
};