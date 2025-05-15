export const analyzeText = async (title: string, text: string): Promise<any> => {
       await new Promise((resolve) => setTimeout(resolve, 1500));

       const lowerTitle = title.toLowerCase();
       const lowerText = text.toLowerCase();
       const combinedText = `${lowerTitle} ${lowerText}`;

       const titleHasClickbait = /you won't believe|shocking|mind-?blowing|jaw-?dropping|incredible|breaking|this is why/i.test(lowerTitle);
       const titleHasQuestion = /\?/.test(title);
       const titleAllCaps = title === title.toUpperCase() && title.length > 10;
       const hasClickbait = /you won't believe|shocking|mind-?blowing|jaw-?dropping|incredible|breaking/i.test(combinedText);
       const hasExaggeration = /all|every|none|always|never|best|worst|greatest|perfect/i.test(combinedText);
       const hasEmotionalLanguage = /outrageous|alarming|terrifying|devastating|horrible|amazing|wonderful|extraordinary/i.test(combinedText);
       const hasMisleadingStats = /\d{2,}%|thousands|millions|billions/i.test(combinedText);
       const hasUnreliableSources = /anonymous|unnamed|unverified|sources say|someone said/i.test(combinedText);
       const isBriefText = text.length < 100;

       const issues = [
         hasClickbait, 
         hasExaggeration, 
         hasEmotionalLanguage, 
         hasMisleadingStats, 
         hasUnreliableSources,
         titleHasClickbait,
         titleAllCaps
       ].filter(Boolean).length;

       const titleCredibilityScore = 100 - (
         (titleHasClickbait ? 20 : 0) + 
         (titleHasQuestion ? 10 : 0) + 
         (titleAllCaps ? 15 : 0)
       );

       const emotionalLanguageScore = hasEmotionalLanguage ? 45 : 85;
       const factualConsistencyScore = hasMisleadingStats ? 40 : hasExaggeration ? 60 : 80;
       const sourceReputationScore = hasUnreliableSources ? 30 : Math.floor(Math.random() * 40) + 40;

       let credibilityScore = 100 - (issues * 10);
       if (isBriefText) credibilityScore -= 10;
       if (titleHasClickbait) credibilityScore -= 15;
       if (title && !text) credibilityScore -= 40;

       credibilityScore = Math.max(10, Math.min(95, credibilityScore));

       const isFakeNews = credibilityScore < 60;

       const accuracyConfidence = Math.min(95, Math.max(60, 
         100 - Math.abs(credibilityScore - 50) / 2
       ));

       const warningFlags = [];
       if (titleHasClickbait) warningFlags.push("Title contains clickbait phrases");
       if (titleAllCaps) warningFlags.push("Title uses all capital letters (sensationalist)");
       if (hasClickbait) warningFlags.push("Contains clickbait phrases or sensationalist language");
       if (hasExaggeration) warningFlags.push("Uses sweeping generalizations or absolute claims");
       if (hasEmotionalLanguage) warningFlags.push("Contains emotionally charged language that may influence perception");
       if (hasMisleadingStats) warningFlags.push("Contains statistics without proper context or verification");
       if (hasUnreliableSources) warningFlags.push("References anonymous or unverified sources");
       if (isBriefText) warningFlags.push("Content is very brief, limiting factual verification");

       return {
         credibilityScore,
         classification: credibilityScore >= 80 ? "Likely Reliable" :
                         credibilityScore >= 60 ? "Somewhat Reliable" :
                         credibilityScore >= 40 ? "Potentially Misleading" : 
                         "Likely Unreliable",
         isFakeNews,
         accuracyConfidence,
         warningFlags,
         emotionalLanguage: emotionalLanguageScore,
         factualConsistency: factualConsistencyScore,
         sourceReputation: sourceReputationScore,
         titleCredibility: titleCredibilityScore,
       };
     };
