import React from "react";
import { Link } from "@inertiajs/react";

const GuestLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-md pl-20 pr-20">
                <div className="navbar-start">
                    <Link href="/">
                        <h1 className="text-2xl font-bold">SWU-ETS</h1>
                    </Link>
                </div>

                <div className="navbar-end">
                    <Link href="/login">
                        <button className="btn btn-outline btn-primary mr-4">
                            Login
                        </button>
                    </Link>

                    <Link href="/signup">
                        <button className="btn btn-primary">Sign Up</button>
                    </Link>
                </div>
            </nav>

            <main className="pt-16 flex-grow">{children}</main>
        </div>
    );
};

export default GuestLayout;
