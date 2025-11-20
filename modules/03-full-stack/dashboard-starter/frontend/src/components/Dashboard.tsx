import MetricsCard from './MetricsCard';

interface Snapshot {
  generatedAt: string;
  articleViewsLastFiveMinutes: number;
  activeReaders: number;
  conversionRate: number;
  avgEngagementSeconds: number;
  articles: Array<{ id: string; title: string; views: number; category: string }>;
  geo: Array<{ region: string; percentage: number }>;
}

interface Topic {
  name: string;
  mentions: number;
}

interface Props {
  snapshot?: Snapshot;
  topics: Topic[];
}

function Dashboard({ snapshot, topics }: Props) {
  if (!snapshot) {
    return <p>Loading metrics…</p>;
  }

  return (
    <section className="dashboard-grid">
      <MetricsCard
        label="Views (5 min)"
        value={snapshot.articleViewsLastFiveMinutes.toLocaleString()}
        helper="Goal: 5k"
      />
      <MetricsCard label="Active readers" value={snapshot.activeReaders.toLocaleString()} helper="Signed in" />
      <MetricsCard
        label="Conversion rate"
        value={`${(snapshot.conversionRate * 100).toFixed(1)}%`}
        helper="Last 5 minutes"
      />
      <MetricsCard
        label="Avg engagement"
        value={`${snapshot.avgEngagementSeconds}s`}
        helper="Time on article"
      />

      <div className="card" style={{ gridColumn: '1 / -1' }}>
        <h2 style={{ marginTop: 0 }}>Top articles (5 min)</h2>
        <ul className="article-list">
          {snapshot.articles.map((article) => (
            <li key={article.id}>
              <span>
                {article.title}
                <span style={{ opacity: 0.6, marginLeft: '0.25rem' }}>({article.category})</span>
              </span>
              <strong>{article.views.toLocaleString()}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Trending topics</h2>
        <ul className="article-list">
          {topics.map((topic) => (
            <li key={topic.name}>
              <span>{topic.name}</span>
              <strong>{topic.mentions}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Geographic mix</h2>
        <ul className="article-list">
          {snapshot.geo.map((entry) => (
            <li key={entry.region}>
              <span>{entry.region}</span>
              <strong>{Math.round(entry.percentage * 100)}%</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Dashboard;
