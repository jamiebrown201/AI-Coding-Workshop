import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';

interface SnapshotResponse {
  data: {
    generatedAt: string;
    articleViewsLastFiveMinutes: number;
    activeReaders: number;
    conversionRate: number;
    avgEngagementSeconds: number;
    articles: Array<{ id: string; title: string; views: number; category: string }>;
    geo: Array<{ region: string; percentage: number }>;
  };
}

interface TopicsResponse {
  data: Array<{ name: string; mentions: number }>;
}

function useMetrics(apiBaseUrl: string) {
  const [snapshot, setSnapshot] = useState<SnapshotResponse['data']>();
  const [topics, setTopics] = useState<TopicsResponse['data']>([]);
  const [error, setError] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const metricsUrl = useMemo(() => `${apiBaseUrl}/metrics`, [apiBaseUrl]);
  const liveUrl = useMemo(() => `${metricsUrl}/live`, [metricsUrl]);
  const topicsUrl = useMemo(() => `${apiBaseUrl}/topics`, [apiBaseUrl]);

  useEffect(() => {
    let pollTimer: number | undefined;

    const startSSE = () => {
      const source = new EventSource(liveUrl);
      source.onmessage = (event) => {
        const payload = JSON.parse(event.data);
        setSnapshot(payload);
        setError(null);
        setIsStreaming(true);
      };
      source.onerror = () => {
        setIsStreaming(false);
        source.close();
        pollTimer = window.setInterval(fetchSnapshot, 5000);
      };
      eventSourceRef.current = source;
    };

    const fetchSnapshot = async () => {
      try {
        const response = await axios.get<SnapshotResponse>(metricsUrl);
        setSnapshot(response.data.data);
        setError(null);
      } catch (err) {
        setError('Unable to load metrics');
      }
    };

    const fetchTopics = async () => {
      try {
        const response = await axios.get<TopicsResponse>(topicsUrl);
        setTopics(response.data.data);
      } catch (err) {
        setError('Unable to load topics');
      }
    };

    startSSE();
    fetchTopics();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
      if (pollTimer) {
        clearInterval(pollTimer);
      }
    };
  }, [liveUrl, metricsUrl, topicsUrl]);

  return {
    snapshot,
    topics,
    error,
    isStreaming
  };
}

export default useMetrics;
