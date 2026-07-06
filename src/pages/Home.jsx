import { Link } from 'react-router-dom'
import { stats, serviceCards, consultingServices, hero, instruments, heroImage, instrumentsImage } from '../data/home'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-image">
            <img src={heroImage} alt="X.A.U Global Platform" />
          </div>
          <div className="home-hero-content">
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
          </div>
        </div>
      </section>

      {/* Financial Instruments Section */}
      <section className="home-instruments">
        <div className="container home-instruments-grid">
          <div className="home-instruments-image">
            <img src={instrumentsImage} alt="Platform services" />
          </div>
          <div className="home-instruments-content">
            <h2>{instruments.title}</h2>
            {instruments.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <Link to="/contact" className="btn btn-primary">
              <strong>Learn</strong> more
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="home-stats">
        <div className="container home-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="home-stat-item">
              <span className="home-stat-value">{stat.value}</span>
              <span className="home-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="home-services">
        <div className="home-services-row home-services-row-4">
          {serviceCards.slice(0, 4).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="home-services-row home-services-row-3">
          {serviceCards.slice(4).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* Financial Consulting Section */}
      <section className="home-consulting">
        <div className="container">
          <h2>{consultingServices.title}</h2>
          <p className="home-consulting-desc">{consultingServices.description}</p>
          <div className="home-consulting-cards">
            {consultingServices.cards.map((card) => (
              <div key={card.number} className="home-consulting-card">
                <span className="home-consulting-number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>
                  {card.items.map((item, i) => (
                    <span key={item}>
                      {i > 0 && <br />}
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ service }) {
  const renderDescription = () => {
    if (service.boldPhrase && service.description.includes(service.boldPhrase)) {
      const [before, after] = service.description.split(service.boldPhrase)
      return (
        <>
          {before}
          <strong>{service.boldPhrase}</strong>
          {after}
        </>
      )
    }
    return service.description
  }

  return (
    <Link
      to={service.link}
      className={`home-service-card ${service.darker ? 'home-service-card-dark' : ''}`}
    >
      <img src={service.image} alt={service.title} />
      <div className="home-service-overlay">
        <h3>{service.title}</h3>
        <span className="home-service-pill">{renderDescription()}</span>
      </div>
    </Link>
  )
}

export default Home
