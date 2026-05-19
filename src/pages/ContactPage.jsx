import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="about-intro">
        <div className="about-intro__inner">
          <p className="about-intro__label">GET IN TOUCH</p>
          <h1 className="about-intro__heading">
            Tell us <em>about</em> your <em>project.</em>
          </h1>
          <p className="about-intro__body">
            Whether you are planning a new home or renovating an existing space,
            we would love to hear from you. Fill in the form and we will get
            back to you within two working days.
          </p>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </>
  )
}
