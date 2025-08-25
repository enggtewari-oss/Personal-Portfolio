import React from "react";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="quote-icon">
          <Quote size={32} />
        </div>
        
        <p className="testimonial-text">"{testimonial.testimonial}"</p>
        
        <div className="testimonial-rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="star-icon" />
          ))}
        </div>
      </div>
      
      <div className="testimonial-author">
        <div className="author-image">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="author-photo"
          />
        </div>
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-position">{testimonial.position}</p>
          <p className="author-company">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What colleagues and clients say about working with me
          </p>
        </div>
        
        <div className="testimonials-grid">
          {data?.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;