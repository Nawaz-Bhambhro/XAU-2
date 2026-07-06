import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { aboutStats, aboutContent } from '../data/about'
import './About.css'

function About() {
  return (
    <main className="about-page">
      <div className="about-page-header">
        <div className="container">
          <PageHeader
            title="About Us"
            breadcrumbs={[
              { label: 'Home', path: '/home' },
              { label: 'About Us' },
            ]}
          />
        </div>
      </div>

      <section className="about-funding">
        <div className="container">
          <h2 className="about-funding-title">
            <Link to="/financial-insights">{aboutContent.title}</Link>
          </h2>
          <div className="about-funding-text">
            {aboutContent.paragraphs.map((text, index) => (
              <p key={index}>
                {index === aboutContent.paragraphs.length - 1 ? (
                  <>
                    On behalf of everyone at Chiron Projects B.V, we thank you for
                    your interest in our{' '}
                    <Link to="/bg-sblc">BG and SBLC provider</Link> services and
                    our commitment to providing sustainable, effective, and
                    innovative financial solutions across the globe.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container about-stats-grid">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="about-stat-item">
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
