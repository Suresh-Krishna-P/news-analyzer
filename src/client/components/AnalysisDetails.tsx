import { CheckCircle, AlertCircle, Flag } from 'lucide-react';

type AnalysisDetailsProps = {
  result: {
    emotionalLanguage: number;
    factualConsistency: number;
    sourceReputation: number;
    titleCredibility: number;
  }
};

const AnalysisDetails = ({ result }: AnalysisDetailsProps) => {
  const getIndicatorColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-blue-500";
    if (value >= 40) return "bg-amber-500";
    return "bg-red-500";
  };

  const getFactorIcon = (value: number) => {
    if (value >= 80) return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (value >= 60) return <CheckCircle className="h-4 w-4 text-blue-500" />;
    if (value >= 40) return <AlertCircle className="h-4 w-4 text-amber-500" />;
    return <Flag className="h-4 w-4 text-red-500" />;
  };

  return (
    <div>
      <h3 className="font-medium mb-4">Analysis Factors</h3>
      <div className="space-y-4">
        {/* Title Credibility Factor */}
        <div className="flex items-center gap-3">
          {getFactorIcon(result.titleCredibility)}
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm">Title Credibility</span>
              <span className="text-sm font-medium">{result.titleCredibility}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getIndicatorColor(result.titleCredibility)} rounded-full`}
                style={{ width: `${result.titleCredibility}%` }}
              />
            </div>
          </div>
        </div>

        {/* Emotional Language Factor */}
        <div className="flex items-center gap-3">
          {getFactorIcon(result.emotionalLanguage)}
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm">Emotional Language</span>
              <span className="text-sm font-medium">{result.emotionalLanguage}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getIndicatorColor(result.emotionalLanguage)} rounded-full`}
                style={{ width: `${result.emotionalLanguage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Factual Consistency Factor */}
        <div className="flex items-center gap-3">
          {getFactorIcon(result.factualConsistency)}
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm">Factual Consistency</span>
              <span className="text-sm font-medium">{result.factualConsistency}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getIndicatorColor(result.factualConsistency)} rounded-full`}
                style={{ width: `${result.factualConsistency}%` }}
              />
            </div>
          </div>
        </div>

        {/* Source Reputation Factor */}
        <div className="flex items-center gap-3">
          {getFactorIcon(result.sourceReputation)}
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm">Source Reputation</span>
              <span className="text-sm font-medium">{result.sourceReputation}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getIndicatorColor(result.sourceReputation)} rounded-full`}
                style={{ width: `${result.sourceReputation}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDetails;
