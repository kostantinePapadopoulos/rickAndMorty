import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import IntroGamePage from "../components/pages/IntroGamePage";
import MainGamePage from "../components/pages/MainGamePage";
import { GameProvider } from "../components/contextProviders/GameContext";

const queryClient = new QueryClient();

function App() {
  return (
    <GameProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroGamePage />} />
            <Route path="/game" element={<MainGamePage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </GameProvider>
  );
}

export default App;
