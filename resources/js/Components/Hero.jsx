import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";

export default function Hero() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
            <div className="w-full max-w-screen-md px-6">
                {/* Heading */}
                <h1 className="text-5xl font-bold text-blue-500">
                    Welcome to SWUETS
                </h1>

                {/* Subheading */}
                <p className="m-4 text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam explicabo neque laborum suscipit obcaecati corporis
                    deleniti magnam dicta tenetur ullam, repellat minus sunt
                    quibusdam ipsa blanditiis at quae aperiam perferendis!
                </p>

                {/* Button */}
                <Link href={route("login")}>
                    <Button size="large" variant="contained">
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    );
}
