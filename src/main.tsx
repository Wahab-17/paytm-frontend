import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Import the ping utility
import { startServerPing } from './utils/pingServer.ts';

// ✅ Start pinging the backend every 4 minutes
startServerPing();

createRoot(document.getElementById("root")!).render(<App />);
