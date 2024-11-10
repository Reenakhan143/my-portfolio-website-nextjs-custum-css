export default function  Contact(){
    return(
        <div className="contact-container">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Your Message" className="textarea-field"></textarea>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    )
}