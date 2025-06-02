'use client';

import { useState } from 'react';

export default function Home() {
  const [link, setLink] = useState("");
  const [submittedLink, setSubmittedLink] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [transcriptLoading, setTranscriptLoading] = useState(false);
  const [error, setError] = useState("");
  const [transcriptError, setTranscriptError] = useState("");

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");
    setTranscript("");
    setTranscriptError("");
    try {
      const res = await fetch('http://localhost:8000/api/echo-link/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link }),
      });
      const data = await res.json();
      setSubmittedLink(data.link);
    } catch (err) {
      setError('Failed to send link to backend.');
    } finally {
      setLoading(false);
    }
  };

  const getTranscript = async () => {
    setTranscriptLoading(true);
    setTranscriptError("");
    setTranscript("");
    try {
      const response = await fetch("http://localhost:8000/api/get-transcript/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });
      const data = await response.json();
      if (data.transcript) {
        setTranscript(data.transcript);
      } else {
        setTranscriptError(data.error || "Unknown error");
      }
    } catch (err) {
      setTranscriptError("Failed to get transcript from backend.");
    } finally {
      setTranscriptLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#602926]">
      {/* Input Card */}
      <form
        className="bg-pink-100 rounded shadow-md p-8 mb-16 w-[400px] flex flex-col"
        onSubmit={handleSubmit}
      >
        <label htmlFor="link-input" className="text-xl mb-2 font-medium text-gray-800">
          Input Link Here
        </label>
        <div className="flex items-center space-x-2">
          <input
            id="link-input"
            type="text"
            placeholder="Link"
            value={link}
            onChange={e => setLink(e.target.value)}
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
            disabled={loading || !link.trim()}
          >
            {loading ? '...' : 'Enter'}
          </button>
          <button
            type="button"
            onClick={getTranscript}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={transcriptLoading || !link.trim()}
          >
            {transcriptLoading ? '...' : 'Get Transcript'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {transcriptError && <p className="text-red-500 mt-2">{transcriptError}</p>}
      </form>
      {/* Large Box */}
      <div className="w-[800px] h-[400px] bg-gray-200 border-2 border-blue-400 flex items-center justify-center text-xl text-gray-700 p-8 overflow-auto">
        {transcript
          ? <span>{transcript}</span>
          : submittedLink
            ? <span>{submittedLink}</span>
            : <span className="text-gray-400">Transcript or link will appear here</span>
        }
      </div>
    </main>
  );
}
