import { toast } from 'sonner';

export const analyzeText = async (title: string, content: string) => {
  try {
    const response = await fetch('http://localhost:3001/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze content');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error analyzing text:', error);
    toast.error('Failed to analyze content. Please try again.');
    throw error;
  }
};
