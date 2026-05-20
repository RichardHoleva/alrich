import { useState, useRef, useEffect } from 'react'
import SuccessNotification from './SuccessNotification'

const BUDGET_OPTIONS = [
  'Under €5,000',
  '€5,000 – €10,000',
  '€10,000 – €20,000',
  '€20,000 +',
]

export default function ContactForm() {
  const [budget, setBudget] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    if (!sent) return
    const timer = setTimeout(() => setSent(false), 3000)
    return () => clearTimeout(timer)
  }, [sent])

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    formRef.current.reset()
    setBudget('')
    setAgreed(false)
  }

  return (
    <div className="contact">
      {sent && <SuccessNotification />}
      <div className="contact__form-col">
        <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>

          <div className="contact__row">
            <div className="contact__field">
              <label className="contact__label">NAME *</label>
              <input className="contact__input" type="text" placeholder="Name" required />
            </div>
            <div className="contact__field">
              <label className="contact__label">E-MAIL *</label>
              <input className="contact__input" type="email" placeholder="E-MAIL" required />
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__label">SELECT SERVICE *</label>
            <select className="contact__select" required>
              <option value="">–Select a service–</option>
              <option>Architecture</option>
              <option>Interior Design</option>
              <option>Consultation</option>
            </select>
          </div>

          <div className="contact__field">
            <label className="contact__label">BUDGET RANGE</label>
            <div className="contact__budget-grid">
              {BUDGET_OPTIONS.map(option => (
                <label key={option} className={`contact__budget-option ${budget === option ? 'contact__budget-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    checked={budget === option}
                    onChange={() => setBudget(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__label">MESSAGE *</label>
            <textarea className="contact__textarea" placeholder="Tell us a little about your project..." required />
          </div>

          <label className="contact__checkbox">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
            I agree to the <a href="#">privacy policy</a> and consent to be contacted by Alrih Studio about my enquiry.
          </label>

          <div className="contact__submit-row">
            <button type="submit" className="contact__btn">SEND MESSAGE →</button>
            <span className="contact__alt">Or email us directly at <a href="mailto:alrih@alrih.studio">alrih@alrih.studio</a></span>
          </div>

        </form>
      </div>

      <aside className="contact__sidebar">
        <div className="contact__info-block">
          <p className="contact__info-label">STUDIO</p>
          <p className="contact__info-text"><strong>Alrih Studio s.r.o.</strong><br />Štúrova 14<br />811 02 Bratislava<br />Slovakia</p>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">EMAIL</p>
          <a href="mailto:alrih@alrih.studio" className="contact__info-text">alrih@alrih.studio</a>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">PHONE</p>
          <p className="contact__info-text">+421 902 132 789<br />+45 90 12 89</p>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">STUDIO HOURS</p>
          <p className="contact__info-text">Mon – Fri · 09:00 – 18:00<br />Visits by appointment only</p>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">FIND US</p>
          <iframe
            className="contact__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0!2d17.1077!3d48.1441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894f0e0e0e0f%3A0x0!2zU3TDunJvdmEgMTQsIEJyYXRpc2xhdmE!5e0!3m2!1sen!2ssk!4v1"
            allowFullScreen
            loading="lazy"
            title="Studio location"
          />
        </div>
      </aside>
    </div>
  )
}
