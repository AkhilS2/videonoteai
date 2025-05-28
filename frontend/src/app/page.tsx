'use client';

import { useState } from 'react';

export default function Home() {
  const [healthStatus, setHealthStatus] = useState<string>('');

  const checkHealth = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/health/');
      const data = await response.json();
      setHealthStatus(data.message);
    } catch (error) {
      setHealthStatus('Error connecting to backend');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">VideoNoteAI</h1>
      <div className="space-y-4">
        <button
          onClick={checkHealth}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Check Backend Health
        </button>
        {healthStatus && (
          <p className="text-center text-gray-600">{healthStatus}</p>
        )}
      </div>
    </main>
  );
}
