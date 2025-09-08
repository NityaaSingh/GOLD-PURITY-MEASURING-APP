import React, { useState } from 'react';
import axios from 'axios';

export default function Calculator() {
  const [weightAir, setWeightAir] = useState('');
  const [weightWater, setWeightWater] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/calc', {
        weightAir: parseFloat(weightAir),
        weightWater: parseFloat(weightWater)
      });
      setResult(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Error occurred');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Weight in Air (g):
          <input type="number" value={weightAir} onChange={e => setWeightAir(e.target.value)} required />
        </label>
        <br />
        <label>
          Weight in Water (g):
          <input type="number" value={weightWater} onChange={e => setWeightWater(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>

      {error && <p style={{color:'red'}}>{error}</p>}
      {result && !error && (
        <div>
          <p><b>Density:</b> {result.density} g/cm³</p>
          <p><b>Purity:</b> {result.purity}%</p>
          <p><b>Karat:</b> {result.karat}K</p>
        </div>
      )}
    </div>
  );
}
