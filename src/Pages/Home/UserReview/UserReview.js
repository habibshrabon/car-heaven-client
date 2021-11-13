import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import UserReviews from "./UserReviews";

const UserReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <Container>
      <section className="py-5">
        <h3 className="text-center py-5 fw-bold">TESTIMONIALS</h3>
        <div className="row">
          {review.length === 0 ? (
            <div className="text-center w-100">
              <Spinner animation="grow" />
            </div>
          ) : (
            review.map((review) => (
              <UserReviews review={review} key={review._id}></UserReviews>
            ))
          )}
        </div>
      </section>
    </Container>
  );
};

export default UserReview;
