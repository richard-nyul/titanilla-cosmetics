import './styles.scss';
import { reviews } from '../../../constants/reviewExample';
import star from '@assets/images/star.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Reviews = () => {
  const filteredReviews = reviews.result.reviews
    .filter((review) => review.rating >= 4)
    .slice(0, 4);

  return (
    <section className="reviews-container">
      <h2>Rólam mondtátok</h2>
      <Swiper
        className="swiper-container"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {filteredReviews.map((review, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="review-card">
              <div className="review-header">
                <h3>{review.author_name}</h3>
              </div>
              <p className="review-rating">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <img key={idx} src={star} alt="star" className="star" />
                ))}
              </p>
              <p className="review-text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
