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
        <section>
            <img src={Illustration} alt="" />

            <p>You selected {rating} out of 5</p>

            <h1 ref={headingRef} tabIndex={-1}>Thank you!</h1>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </section>
    );
}