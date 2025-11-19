import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInWithGoogle, signIn } = use(AuthContext);
    const path = useNavigate();
    const location = useLocation();
    const handleGoogleLoginButton = () => {
        signInWithGoogle()
            .then((result) => {
                Swal.fire({
                    title: `Welcome , ${result.user.displayName}`,
                    text: "You have successfully signed in.",
                    icon: "success",
                    confirmButtonText: "Continue",
                    draggable: true,
                    background: "var(--color-base-100)",
                    color: "var(--color-base-content)",
                    confirmButtonColor: "var(--color-primary)"
                });
                path(location.state || '/');

            })
            .catch((error) => {
                console.log(error);
            })
    }
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        try {
            const result = await signIn(email, password)
            event.target.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Welcome back, ${result.user.displayName || "User"}!`,
                showConfirmButton: false,
                timer: 1500,
                background: "var(--color-base-100)",
                color: "var(--color-base-content)"
            });
            path(location.state || '/');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message,
                background: "var(--color-base-100)",
                color: "var(--color-base-content)",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
            <div className="card bg-base-100 w-full max-w-sm md:max-w-lg shadow-xl border border-base-300">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center text-primary mb-4">
                        Login to HomeHero
                    </h2>
                    <form
                        onSubmit={handleFormSubmission}>
                        <fieldset className="fieldset">

                            <label
                                htmlFor='email'
                                className="label">Email</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                            />
                            <label
                                htmlFor='password'
                                className="label mt-2">Password</label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                className="input input-bordered w-full"
                                placeholder="Enter your password"
                            />
                            <div className="text-right mt-1 mb-3">
                                <a className="link link-hover text-sm text-primary">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full mt-2">
                                Login
                            </button>
                        </fieldset>
                    </form>
                    {/* Divider */}
                    <div className="divider text-base-content/60">OR</div>
                    {/* Google Login Button */}
                    <button
                        onClick={handleGoogleLoginButton}
                        className="btn btn-outline w-full gap-2 border-base-300 hover:border-primary">
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </button>
                    {/* Register Link */}
                    <p className="mt-4 text-center text-sm">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary font-semibold link link-hover">
                            Register!
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Login;
