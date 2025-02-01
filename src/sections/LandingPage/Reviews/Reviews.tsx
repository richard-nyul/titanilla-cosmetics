import './styles.css';
import { reviews } from '../../../constants/reviewExample';
import star from '@assets/images/star.svg';

const Reviews = () => {
  const filteredReviews = reviews.result.reviews
    .filter((review) => review.rating >= 4)
    .slice(0, 4);

  return (
    <section className="reviews-container">
      {filteredReviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              className="review-avatar"
            />
            <div className="review-name-time">
              <a
                href={review.author_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {review.author_name}
              </a>
              <span className="review-time">
                {review.relative_time_description}
              </span>
            </div>
          </div>
          <p></p>
          <p className="review-rating">
            {Array.from({ length: review.rating }).map((_, idx) => (
              <img key={idx} src={star} alt="star" className="star" />
            ))}
          </p>
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
