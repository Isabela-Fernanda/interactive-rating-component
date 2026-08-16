import StarIcon from "../assets/images/icon-star.svg";

type RatingFormProps = {
    rating: number | null;
    onRatingChange: (value: number) => void;
    onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
};

const ratings = [1, 2, 3, 4, 5];

export function RatingForm({ rating, onRatingChange, onSubmit, }: RatingFormProps) {
    return (
        <form onSubmit={onSubmit}>
            <img src={StarIcon} alt="" />

            <fieldset aria-describedby="rating-description">
                <legend>How did we do?</legend>

                <p id="rating-description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>

                {ratings.map((value) => (
                    <label key={value}>
                        <input type="radio" name="rating" value={value} checked={rating === value} onChange={() => onRatingChange(value)} required />
                        {value}
                    </label>
                ))}
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
}