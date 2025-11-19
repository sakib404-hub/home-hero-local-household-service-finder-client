import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { signInWithGoogle, createUser } = use(AuthContext);
    const path = useNavigate();
    const [error, setError] = useState('');
    const handleFormSubmission = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const displayName = event.target.name.value;
        const photoURL = event.target.image.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
                background: "var(--color-base-100)",
                color: "var(--color-base-content)",
                timer: 2000
            });
            return;
        }

        try {
            const result = await createUser(email, password);
            await updateProfile(result.user, { displayName, photoURL });
            event.target.reset();

            Swal.fire({
                title: `Registration Successful! 🎉`,
                text: `Welcome, ${result.user.displayName}!`,
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
                background: "var(--color-base-100)",
                color: "var(--color-base-content)"
            });

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message,
                background: "var(--color-base-100)",
                color: "var(--color-base-content)"
            });
        }
    };


    //handling googleLogin
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
                setError(error.message);
                setTimeout(() => {
                    setError('');
                }, 3000);
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
            <div className="card bg-base-100 w-full max-w-sm md:max-w-lg shadow-2xl">
                <div className="card-body">

                    <h2 className="text-center text-2xl font-bold mb-4">
                        Create an Account
                    </h2>

                    <form
                        onSubmit={handleFormSubmission}>
                        <fieldset className="fieldset space-y-2">

                            <label
                                htmlFor="name"
                                className="label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input input-bordered w-full"
                                placeholder="Your name"
                            />

                            <label
                                htmlFor="emalil"
                                className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input input-bordered w-full"
                                placeholder="Email address"
                            />

                            <label
                                htmlFor="image"
                                className="label">Photo URL</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                className="input input-bordered w-full"
                                placeholder="Profile picture link"
                            />

                            <label
                                htmlFor="password"
                                className="label">Password</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                            />

                            {error && (
                                <p className="text-red-500 text-sm mb-2 text-center">
                                    {error}
                                </p>)
                            }
                            < button
                                type="submit"
                                className="btn btn-primary w-full mt-3"
                            >
                                Register
                            </button>
                        </fieldset>
                    </form>

                    {/* Google Register */}
                    <button
                        onClick={handleGoogleLoginButton}
                        className="btn btn-outline w-full mt-3 flex items-center gap-2">
                        <FcGoogle size={22} />
                        Sign up with Google
                    </button>

                    {/* Link to Login */}
                    <p className="text-center mt-4 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="link link-primary">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </div >
    );
};

export default Register;
