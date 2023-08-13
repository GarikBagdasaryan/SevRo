import Footer from "./components/Footer/Footer";
import Newspage from "./pages/News-page/Newspage";
import Homepage from "./pages/Home-page/Homepage";
import Fighterspage from "./pages/Fighters-page/FightersPage";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="Page">
			<BrowserRouter>
				<Routes>
					<Route path="/news" element={<Newspage />} />
					<Route path="" element={<Homepage />} />
					<Route path="/fighters" element={<Fighterspage />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
