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
        <section className="bg-grey-900 w-82 h-90 rounded-xl px-6 py-5.5 flex flex-col items-center lg:w-103 lg:h-104 lg:rounded-4xl lg:px-7 lg:py-8">
            <img src={Illustration} alt="" className="h-24 w-36 mt-3 mb-6 lg:h-27 lg:w-41 lg:mb-8" />

            <p className="bg-grey-500/20 py-1 px-2.5 rounded-2xl tracking-tight text-orange-500 lg:py-1.5 lg:px-6">You selected {rating} out of 5</p>

            <h1 ref={headingRef} tabIndex={-1} className="mt-7.5 mb-2.5 text-2xl lg:mt-9.5 lg:text-3xl lg:mb-2 lg:font-bold">Thank you!</h1>

            <p className="text-grey-500 text-center tracking-tight lg:tracking-wide lg:leading-6">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </section>
    );
}