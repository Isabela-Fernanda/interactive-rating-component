import { useEffect, useRef } from "react";

import Illustration from "../assets/images/illustration-thank-you.svg"

type ThankYouProps = {
    rating: number;
};

export function ThankYou({ rating }: ThankYouProps) {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        headingRef.current?.focus();
    }, []);

    return (
        <section className="bg-grey-900 w-82 h-90 lg:w-103 rounded-xl px-6 py-5.5 flex flex-col items-center">
            <img src={Illustration} alt="" className="h-24 w-36 mt-3 mb-6" />

            <p className="bg-grey-500/20 py-1 px-2.5 rounded-2xl tracking-tight text-orange-500">You selected {rating} out of 5</p>

            <h1 ref={headingRef} tabIndex={-1} className="mt-7.5 mb-2.5 text-2xl">Thank you!</h1>

            <p className="text-center tracking-tight">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </section>
    );
}