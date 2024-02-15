import StartingScreen from './pages/StartingScreen';
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/american-typewriter.woff";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingScreen />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
