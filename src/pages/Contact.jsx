import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_h4r23xp",      
      "template_bq2jloc",     
      formData,
      "uZ2GTLCuKcPJcr6-8"       
    )
    .then(() => {
      setSubmittedName(formData.name);
      setShowPopup(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    })
    .catch((error) => {
      console.log("FAILED...", error);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div className="contact-page">

      <section className="section">
        
      {showPopup && (
        <div className=" popup popup-animate">
          Hi {submittedName}, your message was submitted successfully!
        </div>
      )}

        <h1>Contact Me</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <label>Your Message</label>
          </div>

          <button type="submit" className="submit-btn animated-border">
            Send Message
          </button>
        </form>
      </section>



      <a
        href="https://wa.me/254782545727?text=Hello%20Reagan,%20I%20visited%20your%20portfolio%20and%20I%20wanna%20get%20in%20touch😁"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
        Chat on WhatsApp
      </a>

    </div>
  );
}

export default Contact;
