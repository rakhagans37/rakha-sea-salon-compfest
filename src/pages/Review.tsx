import { useEffect, useState } from "react";
import { ModalCustom } from "../components/Modal";
import { NavbarCustom } from "../components/Navbar";
import { TextareaCustom } from "../components/Textarea";
import { InputText } from "../components/InputText";
import { ButtonCustom } from "../components/Button";
import StarRating from "../components/Rating";
import { ReviewCard } from "../components/ReviewCard";
import { FooterCustom } from "../components/Footer";
import { createReview, getReviews } from "../service/database";
import { Review } from "../models/Review";

export const ReviewPage = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [dataReview, setDataReview] = useState<{}[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviews();
      setDataReview(data);
    };

    fetchData();
  }, []);

  const submitReview = () => {
    if (username.trim() === "" || comment.trim().length < 10 || rating < 1)
      return;
    createReview(new Review(username, rating, comment)).then(() => {
      // Refresh the page
      window.location.reload();
    });
  };

  const modalBody = () => {
    return (
      <div className="text-center">
        <h3 className="mb-5 flex flex-row text-lg font-normal text-gray-500 dark:text-gray-400">
          <form
            action="#"
            className="flex w-full flex-col justify-start gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              submitReview();
            }}
          >
            <StarRating rating={rating} setRating={setRating} />
            <InputText
              placeholder="Ex: John Doe"
              id="username"
              textState={username}
              setTextState={setUsername}
              label="Your Name"
              errorTerm={username.trim() === ""}
              errorMessage="Please enter your name."
            />
            <TextareaCustom
              placeholder="Leave your comment here..."
              id="comment"
              textAreaState={comment}
              setTextAreaState={setComment}
              label="Your Comment"
              errorTerm={comment.trim().length < 10}
              errorMessage="Please enter a comment with at least 10 characters."
            />
            <ButtonCustom text="Confirm" type="submit" />
          </form>
        </h3>
      </div>
    );
  };

  return (
    <div className="font-poppins">
      <NavbarCustom route={"/reviews"} scrollable={false} />
      <div className="relative flex h-max min-h-screen flex-col gap-20 bg-cashmere-50 object-cover px-4 py-10 sm:p-14 lg:p-32">
        <div className="z-50 flex w-full flex-col items-center justify-center">
          <div className="text-center text-blue-dianne-900 sm:mr-10">
            <p className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Your Experience, Our{" "}
              <span className="bg-gradient-to-br from-blue-dianne-600 to-cashmere-200 bg-clip-text text-transparent">
                Inspiration
              </span>{" "}
            </p>
          </div>
          <p className="mt-5 text-center text-blue-dianne-900">
            Share Your Experience! Leave a Review and Help Us Improve.
          </p>
          <ModalCustom
            body={modalBody()}
            text="Review Now"
            buttonCustomTheme={{
              base: "w-40 h-12 mt-2 bg-cashmere-300 bg-gradient-to-br from-cashmere-300 to-cashmere-500 hover:from-cashmere-500 hover:to-cashmere-300",
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          {dataReview?.map((review: any, index: number) => (
            <div className="rounded-md border-2 border-gray-200 p-10">
              <ReviewCard
                key={index}
                username={review.username}
                rating={review.rating}
                comment={review.comment}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="z-50">
        <FooterCustom />
      </div>
    </div>
  );
};

export default ReviewPage;
