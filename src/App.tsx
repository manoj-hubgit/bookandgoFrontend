import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LazyHome, LazyMovies } from "./LazyLoader";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/Movies" element={<LazyMovies/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
