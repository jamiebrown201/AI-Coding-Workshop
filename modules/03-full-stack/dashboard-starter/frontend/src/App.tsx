import Dashboard from './components/Dashboard';
import useMetrics from './hooks/useMetrics';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

function App() {
  const { snapshot, topics, isStreaming, error } = useMetrics(API_URL);

  return (
    <main>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ margin: 0 }}>Engagement Pilot</h1>
          <p style={{ margin: 0, opacity: 0.7 }}>Last refreshed: {snapshot?.generatedAt ?? 'loading...'}</p>
        </div>
        <span className="status-pill">{isStreaming ? 'Live feed' : 'Polling fallback'}</span>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <Dashboard snapshot={snapshot} topics={topics} />
    </main>
  );
}

export default App;
