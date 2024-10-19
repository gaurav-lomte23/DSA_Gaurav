import React from "react";

export default function ProgressPage({ count }) {
  return (
    <div className="progress-page">
      <h1>Your DSA Progress</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${count}%`, backgroundColor: "green", height: "30px" }}>
          <span style={{ color: 'red', padding: 5, fontWeight: 'bold' }}>{`${count}%`}</span>
        </div>
      </div>
    </div>
  );
}
