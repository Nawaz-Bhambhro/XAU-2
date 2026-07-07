import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import {
  serviceLinks,
  accordionItems,
  instrumentsContent,
} from '../data/bgSblc'
import { publicUrl } from '../utils/publicUrl'
import './BgSblc.css'

function BgSblc() {
  const [openAccordion, setOpenAccordion] = useState('performance-sblc')

  const pageStyle = {
    '--bgsblc-hero-bg': `url(${publicUrl('/images/bg-sblc-hero.jpg')})`,
    '--bgsblc-instruments-bg': `url(${publicUrl('/images/bg-sblc-instruments-bg.png')})`,
  }

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  return (
    <main className="bgsblc-page" style={pageStyle}>
      <div className="bgsblc-page-header">
        <div className="container">
          <PageHeader
            title="BG SBLC"
            breadcrumbs={[
              { label: 'Home', path: '/home' },
              { label: 'BG SBLC' },
            ]}
          />
        </div>
      </div>

      <section className="bgsblc-hero">
        <div className="bgsblc-hero-overlay" />
        <div className="container bgsblc-hero-content">
          <h2 className="bgsblc-hero-title">
            <Link to="/financial-insights">
              Bank Guarantee &amp; SBLC Services
            </Link>
          </h2>
        </div>
      </section>

      <section className="bgsblc-instruments">
        <div className="container">
          <div className="bgsblc-instruments-card">
            <div className="bgsblc-instruments-text">
              <p className="bgsblc-label">
                <Link to="/about">{instrumentsContent.label}</Link>
              </p>
              <h2>{instrumentsContent.title}</h2>
              <p>{instrumentsContent.paragraphs[0]}</p>
              <p>
                The{' '}
                <Link to={instrumentsContent.linkPath}>
                  {instrumentsContent.linkText}
                </Link>{' '}
                supports a contract between two business partners typically
                giving the beneficiary security in transactions where the
                buyer&apos;s performance or payment might otherwise be uncertain.
              </p>
            </div>
            <div className="bgsblc-instruments-image">
              <img
                src={publicUrl('/images/business-handshake.jpg')}
                alt="Business handshake agreement"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bgsblc-services">
        <div className="container bgsblc-services-grid">
          <div className="bgsblc-services-list">
            <h3 className="bgsblc-services-heading">Services we offer</h3>
            <ul>
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className={service.underline ? 'underline' : ''}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bgsblc-accordion">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div
                  key={item.id}
                  className={`bgsblc-accordion-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="bgsblc-accordion-header"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="bgsblc-accordion-title"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="bgsblc-accordion-title">{item.title}</span>
                    )}
                    <span className="bgsblc-accordion-icon" aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="bgsblc-accordion-body">
                      {Array.isArray(item.content) ? (
                        item.content.map((paragraph, index) => (
                          <p key={index}>
                            {index === 1 && item.linkText ? (
                              <>
                                When you request a{' '}
                                <Link to={item.linkPath}>{item.linkText}</Link>,
                                the bank assesses your creditworthiness, once
                                approved, the guarantee assures that if you
                                default (for example on payment, delivery, or
                                contract performance), the bank will step in and
                                pay the agreed sum.
                              </>
                            ) : (
                              paragraph
                            )}
                          </p>
                        ))
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BgSblc
