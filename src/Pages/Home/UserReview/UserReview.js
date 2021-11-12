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
    <section style={{ background: "#F7F7F6" }} className="py-5">
      <Container>
        <h3 className="text-center py-5">Product Review</h3>
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
      </Container>
    </section>
  );
};

export default UserReview;
