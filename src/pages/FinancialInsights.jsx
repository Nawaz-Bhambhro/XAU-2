import PageHeader from '../components/PageHeader'
import { FeaturedArticle, ArticleCard } from '../components/ArticleCard'
import { featuredArticle, articles } from '../data/articles'
import './FinancialInsights.css'

function FinancialInsights() {
  return (
    <main className="insights-page">
      <div className="insights-page-header">
        <div className="container">
          <PageHeader
            title="Financial Insights"
            breadcrumbs={[
              { label: 'Home', path: '/home' },
              { label: 'Financial Insights' },
            ]}
          />
        </div>
      </div>

      <div className="container insights-content">
        <div className="posts-section">
          <FeaturedArticle article={featuredArticle} />

          <div className="posts-wrapper">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default FinancialInsights
