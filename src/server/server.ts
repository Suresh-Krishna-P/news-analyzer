import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/analyze', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  // Mocked analysis response
  const mockResult = {
    credibilityScore: Math.floor(Math.random() * 100),
    classification: Math.random() > 0.5 ? 'Reliable' : 'Unreliable',
    isFakeNews: Math.random() > 0.5,
    accuracyConfidence: Math.random(),
    warningFlags: Math.random() > 0.5 ? ['Sensationalist language detected'] : [],
    emotionalLanguage: Math.random(),
    factualConsistency: Math.random(),
    sourceReputation: Math.random(),
    titleCredibility: Math.random(),
  };

  res.json(mockResult);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
