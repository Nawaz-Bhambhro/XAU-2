import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './ServicePage.css'

function ServicePage({ title, description, points = [], image }) {
  return (
    <main className="service-page">
      <div className="service-page-header">
        <div className="container">
          <PageHeader
            title={title}
            breadcrumbs={[
              { label: 'Home', path: '/home' },
              { label: title },
            ]}
          />
        </div>
      </div>

      <div className="container">
        {image && (
          <figure className="service-page-image">
            <img src={image} alt={title} />
          </figure>
        )}

        <section className="service-page-content">
          <p className="service-temp-note">
            This is a temporary service page. Full content will be added soon.
          </p>
          <p>{description}</p>

          {points.length > 0 && (
            <>
              <h3>What We Offer</h3>
              <ul className="content-list">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          )}

          <p className="page-cta">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/bg-sblc" className="btn btn-secondary">
              View BG SBLC Services
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}

export default ServicePage
