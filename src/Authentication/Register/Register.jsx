import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
            <div className="card bg-base-100 w-full max-w-sm md:max-w-lg shadow-2xl">
                <div className="card-body">

                    <h2 className="text-center text-2xl font-bold mb-4">
                        Create an Account
                    </h2>

                    <form>
                        <fieldset className="fieldset space-y-2">

                            <label className="label">Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Your name"
                            />

                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Email address"
                            />

                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Profile picture link"
                            />

                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                            />

                            <button
                                type="submit"
                                className="btn btn-primary w-full mt-3"
                            >
                                Register
                            </button>
                        </fieldset>
                    </form>

                    {/* Google Register */}
                    <button className="btn btn-outline w-full mt-3 flex items-center gap-2">
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
        </div>
    );
};

export default Register;
