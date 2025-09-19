import SplashCursor from "../atoms/splashcursor.comp";
import { useRef } from "react";

export function Hero() {
    const heroRef = useRef(null);
    return (
        <>
            <div
                ref={heroRef}
                className="hero min-h-[600px]"
                // Höhe auf 400px gesetzt
                style={{
                    backgroundImage: 'url("src/assets/img/bg.jpg")',
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <SplashCursor targetRef={heroRef} />
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}
