import Footer from "./components/Footer/Footer";
import Newspage from "./pages/Magazine-page/Magazinepage";
import Homepage from "./pages/Home-page/Homepage";
import NewsOpenPage from "./pages/NewsOpen-page/NewsOpenPage"
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
					<Route path="/newsopen" element={< NewsOpenPage />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
