import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Contact.css'

function Contact() {
  return (
    <MainLayout>
      <div>
        <section id="contact">
        <h2 id="contact-us-text">Contact Us</h2>
        <p id="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor proin suscipit tempor, 
          orci at nam sed nibh egestas conubia eros praesent risus tellus vel, 
          ut primis fermentum metus est vitae aenean parturient magnis aptent. 
          Dignissim cum non euismod ultrices faucibus dis mi luctus ultricies, 
          nec platea condimentum torquent sollicitudin iaculis quis eu, 
          interdum mauris cras ligula blandit neque varius montes.
        </p>
        <form>
          <div class="contact-form">
          <input class="contact-items" type="text" id="fname" name="firstname" placeholder="First Name" required /><br />
          <input class="contact-items" type="text" id="lname" name="lastname" placeholder="Last Name" required /><br />
          <input class="contact-items" type="text" id="phone" name="phone" placeholder="Phone  No" required /><br />
          <input class="contact-items" type="email" id="email" name="email" placeholder="Email" required /><br />
          <textarea class="contact-items" id="message" name="message" placeholder="Write your message here..." required></textarea><br />
          </div>
          <div class="button-container">
            <button class="" id="submit" type="submit">Submit</button>
          </div>
        </form>
        </section>
      </div>
    </MainLayout>
  )
}

export default Contact