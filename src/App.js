import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Home";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='home1' element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
