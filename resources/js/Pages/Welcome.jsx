import Hero from "@/Components/Hero";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black h-screen flex flex-col">
                {/* Header */}
                <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-gray-50 py-4 px-6 shadow-md">
                    {/* SWUETS logo aligned to the left */}
                    <div className="flex">
                        <Link href={route("welcome")}>
                            <h1 className="text-blue-500 font-bold text-2xl">
                                SWUETS
                            </h1>
                        </Link>
                    </div>
                    {/* Navigation links aligned to the right */}
                    <nav className="-mx-3 flex space-x-4">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-blue-500 focus:outline-none"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-blue-500 focus:outline-none"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main content */}
                <main className="flex-grow pt-20 overflow-hidden">
                    <Hero />
                </main>
            </div>
        </>
    );
}
