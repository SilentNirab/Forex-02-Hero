import { useState } from 'react';
import { useForm } from "react-hook-form"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import loginBg from '../../assets/images/login.webp'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const { createUser} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigete = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigete('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="bg-white">
            <Helmet>
                <title> Forex 02 Hero | Registration</title>
            </Helmet>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8">
                <div className=" min-h-[550px] md:min-h-screen hidden md:flex items-center px-20 md:w-2/4">
                    <img className='w-full' src={loginBg} alt="Login image" />
                </div>
                    <div className="md:w-2/4 px-10 lg:px-20 lg:pr-40">
                        <div className="w-full border border-gray-200 rounded-lg py-5 px-7 space-y-6 mb-10 md:mb-0">
                            <h3 className='text-2xl text-[#333] font-bold capitalize text-center'>REGISTRATION</h3>

                            <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>

                                <label className='font-bold text-[#333]'>Full Name</label>
                                <input className="bg-green-100 text-black rounded-md p-4 F3F3F3 placeholder:#9D9C9C" placeholder="Enter your name" type='text' {...register("name", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />

                                <label className='font-bold text-[#333]'>Client ID</label>
                                <input className="bg-green-100 text-black rounded-md p-4 F3F3F3 placeholder:#9D9C9C" placeholder="Enter your username" type='text' {...register("username", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />

                                <label className='font-bold text-[#333]'>Email</label>
                                <input className="bg-green-100 text-black rounded-md p-4 F3F3F3 placeholder:#9D9C9C" placeholder="Enter your email" type='email' {...register("email", { required: "Email Address is required" })} aria-invalid={errors.firstName ? "true" : "false"} />

                                <label className='font-bold text-[#333]'>Password</label>
                                <div className=" form-control relative">

                                    <input type={
                                        showPassword ? 'text' : 'password'
                                    } {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" id="password" placeholder="Password" className="bg-green-100 text-black rounded-md p-4 F3F3F3 placeholder:#9D9C9C" />
                                    {errors.password?.type === 'required' && <p className="text-[#F7A582]">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-[#F7A582]">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-[#F7A582]">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-[#F7A582]">Password must have one Uppercase one lower case and one number.</p>}
                                    <span className="absolute top-5 right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </span>
                                </div>
                                <input className="bg-[#0D1821] transition ease-in-out text-xl font-bold py-2 my-2 hover:bg-green-500 text-white rounded-lg col-span-2" type="submit" value="Continue" />
                                <p className='text-center text-[#6C6B6B]'>Already registered? Go to <Link to={'/login'} className="text-green-500 font-bold">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Register;