import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await axios.get('http://localhost:5000/api/history');
        setHistory(res.data.history);
      } catch (err) {
        console.error('Failed to fetch history');
      }
    }
    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Calculation History</h2>
      <ul>
        {history.map((h, i) => (
          <li key={i}>
            Air: {h.weightAir}g, Water: {h.weightWater}g → Density: {h.density}, Purity: {h.purity}%, Karat: {h.karat}K
          </li>
        ))}
      </ul>
    </div>
  );
}
