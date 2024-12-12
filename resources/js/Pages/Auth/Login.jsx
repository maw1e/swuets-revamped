import { Head, Link } from "@inertiajs/react";
import React from "react";

const Signup = () => {
    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen">
                <div className="h-screen flex justify-center items-center ">
                    <div className="card bg-white w-96 shadow-xl">
                        <div className="card-body items-center text-center">
                            <form>
                                <h2 className="text-4xl font-bold mb-4 text-center">
                                    Login
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered w-full max-w-xs mb-4"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs mb-4"
                                />
                                <div className="card-actions justify-center mb-6">
                                    <button className="btn btn-primary w-full">
                                        Login
                                    </button>
                                </div>

                                <p>
                                    Don't have an account?{" "}
                                    <Link
                                        href="/signup"
                                        className="text-red-800"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
