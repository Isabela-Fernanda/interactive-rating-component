import { useState } from "react";

import { RatingForm } from "./components/RatingForm";
import { ThankYou } from "./components/ThankYou";

export default function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="h-screen flex items-center justify-center text-white-0">
      {submitted ? (
        <ThankYou rating={rating!} />
      ) : (
        <RatingForm rating={rating} onRatingChange={setRating} onSubmit={handleSubmit} />
      )
      }
    </main >
  )
}
