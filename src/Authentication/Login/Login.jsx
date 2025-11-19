import React from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
            <div className="card bg-base-100 w-full max-w-sm md:max-w-lg shadow-xl border border-base-300">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center text-primary mb-4">
                        Login to HomeHero
                    </h2>
                    <form>
                        <fieldset className="fieldset">

                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                            />
                            <label className="label mt-2">Password</label>
                            <input
                                type="password"
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
                    <button className="btn btn-outline w-full gap-2 border-base-300 hover:border-primary">
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
