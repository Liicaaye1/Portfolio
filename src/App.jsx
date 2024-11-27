import LandingPage from "./components/LandingPage";
import { Route ,Routes } from "react-router-dom";
function App(){
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
        </div>
    )

}

export default App;