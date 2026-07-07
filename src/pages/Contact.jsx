import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { contactInfo, contactCta, mapEmbedUrl } from '../data/contact'
import { publicUrl } from '../utils/publicUrl'
import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-page-header">
        <div className="container">
          <PageHeader
            title="Contact"
            breadcrumbs={[
              { label: 'Home', path: '/home' },
              { label: 'Contact' },
            ]}
          />
        </div>
      </div>

      <section className="contact-banner">
        <div className="container">
          <h2>BG &amp; SBLC Financial Instrument</h2>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-main-grid">
          <div className="contact-info-card">
            <img
              src={publicUrl('/images/contact-office.png')}
              alt="Chiron Projects B.V office building"
              className="contact-office-image"
            />
            <div className="contact-info-details">
              <p>
                <strong>Call us: {contactInfo.phone}</strong>
              </p>
              <p>
                <strong>
                  Email:{' '}
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  <br />
                  Address: {contactInfo.address}
                </strong>
              </p>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="contact-name-field">
              <legend>Name</legend>
              <div className="contact-name-row">
                <div className="contact-field-block">
                  <input type="text" id="first-name" name="first" />
                  <label htmlFor="first-name">First</label>
                </div>
                <div className="contact-field-block">
                  <input type="text" id="last-name" name="last" />
                  <label htmlFor="last-name">Last</label>
                </div>
              </div>
            </fieldset>

            <div className="contact-field">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Comment or Message</label>
              <textarea id="message" name="message" rows="6" />
            </div>

            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h3>{contactCta.heading}</h3>
          <p>
            Our comprehensive{' '}
            <Link to="/financial-insights">financial services</Link> include
            tailored <Link to="/bg-sblc">BG/SBLC</Link> instruments to support
            your personal or business goals.
          </p>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title="Chiron Projects B.V location map"
          src={mapEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}

export default Contact
