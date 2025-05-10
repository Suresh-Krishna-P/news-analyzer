 A web application for detecting fake news using NLP with Hugging Face Transformers. The frontend is built with React and TypeScript, and the backend uses Node.js, Express, and a pre-trained `facebook/bart-large-mnli` model for zero-shot classification.

 ## Setup with GitHub

 1. **Create a GitHub Repository**:
    - Go to GitHub and create a new repository named `news-analyzer`.
    - Initialize it with a README and `.gitignore` for Node.js.

 2. **Push Code**:
    - Clone the repository locally:
      ```bash
      git clone https://github.com/your-username/news-analyzer.git
      cd news-analyzer
      ```
    - Copy all files from this project into the repository.
    - Commit and push:
      ```bash
      git add .
      git commit -m "Initial commit with fake news detection app"
      git push origin main
      ```

 3. **Use GitHub Codespaces**:
    - Open the repository in GitHub.
    - Click the "Code" button and select "Create codespace on main".
    - Codespaces will set up the environment using `.devcontainer/devcontainer.json`.
    - Once the environment is ready, run:
      ```bash
      npm run dev
      ```
    - Access the frontend at `https://<codespace-name>-5173.app.github.dev` and backend at `https://<codespace-name>-3001.app.github.dev`.

 4. **Deploy with GitHub Actions**:
    - Set up a Render account and create a new Node.js service.
    - Obtain your `RENDER_API_KEY` and `RENDER_SERVICE_ID` from Render.
    - In GitHub, go to Settings > Secrets and variables > Actions > New repository secret.
    - Add `RENDER_API_KEY` and `RENDER_SERVICE_ID`.
    - Push changes to the `main` branch to trigger the deployment workflow.

 ## Project Structure

 - `.devcontainer/`: Codespaces configuration
 - `.github/workflows/`: GitHub Actions workflows
 - `src/client/`: Frontend React application
   - `components/`: Reusable UI components
   - `pages/`: Page components
   - `services/`: API and analysis logic
 - `src/server/`: Backend Express server
   - `server.ts`: Main server file with Hugging Face Transformers integration

 ## Notes

 - The NLP analysis uses `facebook/bart-large-mnli` for zero-shot classification, enhanced with rule-based checks.
 - For production, consider fine-tuning a model specifically for fake news detection or using a cloud-based NLP service.
 - Ensure the backend URL in `connectanalyzer.tsx` is updated to the deployed backend URL after deployment.
 - The frontend uses Tailwind CSS and Radix UI for styling and components.
