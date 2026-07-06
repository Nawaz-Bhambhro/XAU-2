import { Link } from 'react-router-dom'

function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <div className="page-header">
      {breadcrumbs.length > 0 && (
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {index > 0 && <span className="separator"> » </span>}
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span className="last">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1>{title}</h1>
    </div>
  )
}

export default PageHeader
