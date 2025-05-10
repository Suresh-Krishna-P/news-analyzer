import NewsAnalyzer from '../components/NewsAnalyzer';

     const Index = () => {
       return (
         <div className="container mx-auto">
           <div className="max-w-3xl mx-auto mb-8 text-center">
             <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
               Detect Fake News with AI
             </h2>
             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
               Our advanced NLP engine analyzes news titles and content for signs of misinformation, 
               bias, and unreliable information, helping you determine if news is likely true or fake.
             </p>
           </div>
           <NewsAnalyzer />
         </div>
       );
     };

     export default Index;
