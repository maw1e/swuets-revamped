import React from "react";
import GuestLayout from "../Layouts/GuestLayout";
import { Head, Link, usePage } from "@inertiajs/react";

const Home = () => {
    const { component } = usePage();
    return (
        <>
            <Head title={component} />
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
                            WELCOME TO SWU-ETS
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link href="/login">
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Home.layout = (page) => <GuestLayout children={page} />;

export default Home;
