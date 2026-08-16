import { useState } from "react";

import StarIcon from "./assets/images/icon-star.svg";
import Illustration from "./assets/images/illustration-thank-you.svg"

const ratings = [1, 2, 3, 4, 5];

export default function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main>
      {submitted ? (
        <div>
          <img src={Illustration} alt="Ilustration thank you" />

          <p>You selected {rating} out of 5 </p>

          <h1>Thank you!</h1>

          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <img src={StarIcon} alt="Star icon" />
          
          <fieldset aria-describedby="rating-description">
            <legend>How did we do?</legend>

            <p id="rating-description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>

            {ratings.map((value) => (
              <label key={value}>
                <input type="radio" name="rating" value={value} checked={rating === value} onChange={() => setRating(value)} required />
                {value}
              </label>
            ))}

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      )
      }
    </main >
  )
}


