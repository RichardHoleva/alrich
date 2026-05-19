export default function SuccessNotification() {
  return (
    <div className="success-notification">
      <div className="success-notification__icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 11.5L9 16.5L18 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="success-notification__title">Success</p>
        <p className="success-notification__body">Your message was sent to us, we will get back to you as soon as we can.</p>
      </div>
    </div>
  )
}
