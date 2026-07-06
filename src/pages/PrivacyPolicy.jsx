import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { privacyContact, privacySections } from '../data/privacyPolicy'
import './PrivacyPolicy.css'

function ContactBlock() {
  return (
    <p className="privacy-contact-block">
      <strong>{privacyContact.company}</strong>
      <br />
      Website:{' '}
      <Link to={privacyContact.website}>{privacyContact.websiteLabel}</Link>
      <br />
      Email:{' '}
      <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
    </p>
  )
}

function PrivacySection({ section, isLast }) {
  return (
    <section className="privacy-section">
      <h2>{section.title}</h2>

      {section.subsections?.map((sub) => (
        <div key={sub.title} className="privacy-subsection">
          <h3>{sub.title}</h3>
          {sub.intro && <p>{sub.intro}</p>}
          {sub.items && (
            <ul>
              {sub.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {section.intro && <p>{section.intro}</p>}

      {section.items && (
        <ul>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {section.paragraphs?.map((text) => (
        <p key={text}>{text}</p>
      ))}

      {section.emailNote && (
        <p>
          Requests can be submitted to:{' '}
          <strong>
            <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
          </strong>
        </p>
      )}

      {section.contactBlock && <ContactBlock />}

      {!isLast && <hr />}
    </section>
  )
}

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="privacy-page-header">
        <div className="container">
          <PageHeader
            title="Privacy Policy"
            breadcrumbs={[
              { label: 'Home', path: '/home' },
              { label: 'Privacy Policy' },
            ]}
          />
        </div>
      </div>

      <div className="container privacy-content">
        <div className="privacy-intro">
          <ContactBlock />
        </div>

        {privacySections.map((section, index) => (
          <PrivacySection
            key={section.id}
            section={section}
            isLast={index === privacySections.length - 1}
          />
        ))}
      </div>
    </main>
  )
}

export default PrivacyPolicy
