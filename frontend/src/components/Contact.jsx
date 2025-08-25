import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real implementation, this will send to backend
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to discuss your next project or opportunity
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href={`mailto:${data?.email}`} className="contact-link">
                  {data?.email}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href={`tel:${data?.phone}`} className="contact-link">
                  {data?.phone}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <span className="contact-text">{data?.location}</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href={data?.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  Connect with me
                </a>
              </div>
            </div>
            
            <div className="availability-status">
              <div className="status-indicator"></div>
              <span>{data?.availability}</span>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;