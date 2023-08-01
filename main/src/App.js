import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/home/layout/HomePage";


export const App =()=> {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
