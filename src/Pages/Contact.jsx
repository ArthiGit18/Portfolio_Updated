import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Links from './Links';

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>

        <div className="contact_content">
          {/* Contact Form */}
          <form
            className="contact_form"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
              };

              try {
                const res = await fetch('http://localhost:5000/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(formData),
                });

                const data = await res.json();
                alert(data.message);
                form.reset();
              } catch (err) {
                alert('Failed to send message.');
                console.error(err);
              }
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Info + Social Links */}
          <div className="contact_info">
            <p><strong>Email:</strong> <a href="mailto:arthianbalagan180@gmail.com">arthianbalagan180@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+916379424101">+91 6379424101</a></p>

            <Links />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
