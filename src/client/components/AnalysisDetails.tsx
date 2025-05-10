import { AlertCircle } from 'lucide-react';

type AnalysisDetailsProps = {
  result: {
    warningFlags: string[];
    emotionalLanguage: number;
    factualConsistency: number;
    sourceReputation: number;
    titleCredibility: number;
  };
};

const AnalysisDetails = ({ result }: AnalysisDetailsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Analysis Details</h3>
      {result.warningFlags.length > 0 && (
        <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-900/30">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <h4 className="font-medium text-red-800 dark:text-red-300">Warning Flags</h4>
          </div>
          <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-200">
            {result.warningFlags.map((flag, index) => (
              <li key={index}>{flag}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium">Emotional Language</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {(result.emotionalLanguage * 100).toFixed(0)}% detected
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Factual Consistency</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {(result.factualConsistency * 100).toFixed(0)}% consistent
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Source Reputation</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {(result.sourceReputation * 100).toFixed(0)}% reputable
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Title Credibility</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {(result.titleCredibility * 100).toFixed(0)}% credible
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDetails;
