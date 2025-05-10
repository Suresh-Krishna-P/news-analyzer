import { Progress } from "@radix-ui/react-progress";
import { AlertCircle, CheckCircle, Flag, Info, Percent } from 'lucide-react';
import AnalysisDetails from './AnalysisDetails';

type ResultCardProps = {
  result: {
    credibilityScore: number;
    classification: string;
    isFakeNews: boolean;
    accuracyConfidence: number;
    warningFlags: string[];
    emotionalLanguage: number;
    factualConsistency: number;
    sourceReputation: number;
    titleCredibility: number;
  }
};

const ResultCard = ({ result }: ResultCardProps) => {
  const getStatus = () => {
    const { credibilityScore } = result;
    if (credibilityScore >= 80) {
      return {
        icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        label: "Likely Reliable",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      };
    } else if (credibilityScore >= 60) {
      return {
        icon: <Info className="h-6 w-6 text-blue-500" />,
        label: "Somewhat Reliable",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      };
    } else if (credibilityScore >= 40) {
      return {
        icon: <AlertCircle className="h-6 w-6 text-amber-500" />,
        label: "Potentially Misleading",
        color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
      };
    }
    return {
      icon: <Flag className="h-6 w-6 text-red-500" />,
      label: "Likely Unreliable",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };
  };

  const status = getStatus();

  return (
    <div className="mt-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {status.icon}
            <h2 className="text-lg font-semibold">{status.label}</h2>
          </div>
          <span className={`px-2 py-1 rounded text-sm font-medium ${status.color}`}>
            {result.classification}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6 p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {result.isFakeNews ? 
                <Flag className="h-5 w-5 text-red-500" /> : 
                <CheckCircle className="h-5 w-5 text-green-500" />
              }
              <h3 className="text-lg font-medium">
                {result.isFakeNews ? "Likely Fake News" : "Likely True News"}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <Percent className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              <span className="font-medium">{result.accuracyConfidence.toFixed(0)}% confidence</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {result.isFakeNews 
              ? "This content exhibits characteristics commonly found in misleading or false information." 
              : "This content demonstrates qualities typically associated with factual reporting."}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Credibility Score</span>
            <span className="text-sm font-medium">{result.credibilityScore}%</span>
          </div>
          <Progress 
            value={result.credibilityScore}
            className={`h-2 ${
              result.credibilityScore >= 80
                ? 'bg-green-200 dark:bg-green-950'
                : result.credibilityScore >= 60
                ? 'bg-blue-200 dark:bg-blue-950'
                : result.credibilityScore >= 40
                ? 'bg-amber-200 dark:bg-amber-950'
                : 'bg-red-200 dark:bg-red-950'
            }`}
          />
        </div>

        <AnalysisDetails result={result} />
      </div>
    </div>
  );
};

export default ResultCard;
