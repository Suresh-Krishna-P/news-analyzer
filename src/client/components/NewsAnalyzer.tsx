import React, { useState } from 'react';
import { analyzeText } from '@/services/connectanalyzer';
import ResultCard from '../ResultCard';
import { toast } from 'sonner';

const NewsAnalyzer: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!title && !text) {
      toast.error("Please enter a title or content to analyze");
      return;
    }

    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzeText(title, text);
      setResult(analysisResult);
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error("Failed to analyze content. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClear = () => {
    setTitle('');
    setText('');
    setResult(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Analyze Content</h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            News Title
          </label>
          <input 
            id="title"
            placeholder="Enter the news title..." 
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            News Content
          </label>
          <textarea 
            id="content"
            placeholder="Paste news article content to analyze..." 
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600 min-h-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              isAnalyzing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
          <button 
            onClick={handleClear}
            className="px-4 py-2 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900"
          >
            Clear
          </button>
        </div>
      </div>
      {result && <ResultCard result={result} />}
    </div>
  );
};

export default NewsAnalyzer;
