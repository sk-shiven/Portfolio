import { useState, useEffect } from 'react';
import { INITIAL_STATE } from '../constants';

export function usePortfolio() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(data));
  }, [data]);

  const addEntry = (category, entry) => {
    setData(prev => ({
      ...prev,
      [category]: [...prev[category], { ...entry, id: crypto.randomUUID(), createdAt: new Date().toISOString() }]
    }));
  };

  const updateEntry = (category, id, updatedEntry) => {
    setData(prev => ({
      ...prev,
      [category]: prev[category].map(entry => entry.id === id ? { ...entry, ...updatedEntry } : entry)
    }));
  };

  const deleteEntry = (category, id) => {
    setData(prev => ({
      ...prev,
      [category]: prev[category].filter(entry => entry.id !== id)
    }));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL data? This cannot be undone.')) {
      setData(INITIAL_STATE);
    }
  };

  const importData = (newData) => {
    setData(newData);
  };

  return {
    data,
    addEntry,
    updateEntry,
    deleteEntry,
    clearAll,
    importData
  };
}
