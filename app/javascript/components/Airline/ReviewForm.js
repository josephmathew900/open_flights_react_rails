import React, { Fragment } from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #c6c6c6;
  background: #fff;
`;
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  margin-top: 12px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
    width: 96%;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;
const Wrapper = styled.div`
  background: #fff;
  padding: 20px;
  background: #000;
  height: 100vh;
  padding-top: 100px;
`;
const SubmitBtn = styled.button`
  color: #fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;
const Headline = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;
const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottomm: 20px;
  font-weight: bold;
`;

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment>
        <input
          type="radio"
          value={score}
          name="rating"
          checked={props.review.score == score}
          id={`rating-${score}`}
          onChange={() => console.log(score)}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>
          Have an experience with {props.attributes.name}? Share your review.
        </Headline>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <RatingContainer>
          <RatingTitle>Rate this Airline</RatingTitle>
          <RatingBox>{ratingOptions}</RatingBox>
        </RatingContainer>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
