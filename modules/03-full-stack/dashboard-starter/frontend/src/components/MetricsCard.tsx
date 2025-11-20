import { ReactNode } from 'react';

interface Props {
  label: string;
  value: ReactNode;
  helper?: string;
}

function MetricsCard({ label, value, helper }: Props) {
  return (
    <div className="card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      {helper && <small style={{ opacity: 0.7 }}>{helper}</small>}
    </div>
  );
}

export default MetricsCard;
