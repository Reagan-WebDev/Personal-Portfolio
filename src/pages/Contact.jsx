import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); // 🔥 NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store name separately before reset
    setSubmittedName(formData.name);

    setShowPopup(true);

    // Reset form immediately
    setFormData({
      name: "",
      email: "",
      message: ""
    });

    // Auto close popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contact-page">

      <section className="section">
        <h1>Contact Me</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
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
              placeholder="example@gmail.com"
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
              placeholder="Your Message Here..."
              required
              value={formData.message}
              onChange={handleChange}
            />
            <label>Your Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          Hi {submittedName}, your message was submitted successfully!
        </div>
      )}

      <a
        href="https://wa.me/254782545727?text=Hello%20Reagan,%20I%20visited%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
        Chat on WhatsApp
      </a>
      <br />

    </div>
  );
}

export default Contact;
