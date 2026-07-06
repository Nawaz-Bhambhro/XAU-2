import { Link } from 'react-router-dom'

function CategoryList({ categories }) {
  return (
    <ul className="nv-meta-list">
      <li className="meta category">
        {categories.map((cat, i) => (
          <span key={cat.name}>
            {i > 0 && ', '}
            <Link to={cat.href}>{cat.name}</Link>
          </span>
        ))}
      </li>
    </ul>
  )
}

export function FeaturedArticle({ article }) {
  return (
    <article className="article-card featured-article">
      <div className="article-ft-wrap">
        <div className="article-thumbnail">
          <Link to={article.link} title={article.title}>
            <img src={article.image} alt={article.imageAlt} />
          </Link>
        </div>
        <div className="article-content">
          <h2 className="article-title">
            <Link to={article.link}>{article.title}</Link>
          </h2>
          <CategoryList categories={article.categories} />
          <div className="excerpt-wrap">
            <p>{article.excerpt}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ArticleCard({ article }) {
  const imageFirst = article.imagePosition === 'left'

  return (
    <article
      className={`article-card grid-article image-${article.imagePosition}`}
    >
      <div className="article-ft-wrap">
        {imageFirst ? (
          <>
            <Thumbnail article={article} />
            <Content article={article} />
          </>
        ) : (
          <>
            <Content article={article} />
            <Thumbnail article={article} />
          </>
        )}
      </div>
    </article>
  )
}

function Thumbnail({ article }) {
  return (
    <div className="article-thumbnail">
      <Link to={article.link} title={article.title}>
        <img src={article.image} alt={article.imageAlt} loading="lazy" />
      </Link>
    </div>
  )
}

function Content({ article }) {
  return (
    <div className="article-content">
      <h2 className="article-title">
        <Link to={article.link}>{article.title}</Link>
      </h2>
      <CategoryList categories={article.categories} />
      <div className={`excerpt-wrap ${article.longExcerpt ? 'long-excerpt' : ''}`}>
        <p>{article.excerpt}</p>
      </div>
    </div>
  )
}

export default ArticleCard
