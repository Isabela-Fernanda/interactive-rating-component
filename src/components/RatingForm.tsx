import StarIcon from "../assets/images/icon-star.svg";

type RatingFormProps = {
    rating: number | null;
    onRatingChange: (value: number) => void;
    onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
};

const ratings = [1, 2, 3, 4, 5];

export function RatingForm({ rating, onRatingChange, onSubmit, }: RatingFormProps) {
    return (
        <form onSubmit={onSubmit} className="bg-grey-900 w-82 h-90 rounded-xl px-6 py-5.5 lg:w-103 lg:h-104 lg:rounded-4xl lg:px-8 lg:py-8">
            <div className="bg-grey-500/20 rounded-full w-10 h-10 flex items-center justify-center mb-5.5 lg:w-12 lg:h-12 lg:mb-9">
                <img src={StarIcon} alt="" className="h-3 lg:h-4" />
            </div>


            <fieldset aria-describedby="rating-description">
                <legend className="text-2xl font-bold mb-3 lg:text-3xl lg:tracking-tighter lg:mb-2.5">How did we do?</legend>

                <p id="rating-description" className="tracking-tight lg:tracking-normal">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>

                <div className="flex justify-between my-5 lg:my-6.5">
                    {ratings.map((value) => (
                        <label key={value} className="cursor-pointer" >
                            <input type="radio" name="rating" value={value} checked={rating === value} onChange={() => onRatingChange(value)} required className="peer sr-only"/>

                            <span className={`w-10.5 h-10.5 rounded-full flex items-center justify-center transition-colors ${rating === value ? "bg-white-0 text-grey-900" : "bg-grey-500/20 hover:bg-orange-500 hover:text-gray-900"} peer-focus-visible:ring-2 peer-focus-visible:ring-orange-500 lg:h-13 lg:w-13`}>
                                {value}
                            </span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <button type="submit" className="bg-orange-500 mt-1 w-full h-11.5 rounded-r-full rounded-l-full font-bold tracking-widest text-grey-950 hover:bg-white-0">SUBMIT</button>
        </form>
    );
}