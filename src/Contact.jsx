const Contact = () => {
    return (
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-description">
            Got a technical issue? Want to send feedback about a beta feature? Let us know.
          </p>
          <form action="#" className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="example@gmail.com" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Let us know how we can help you" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea rows="6" type="text" id="message" placeholder="Leave a comment..." className="form-input"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  