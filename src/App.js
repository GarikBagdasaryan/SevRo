import Footer from "./components/Footer/Footer";
import Newspage from "./pages/News-page/Newspage";
import Homepage from "./pages/Home-page/Homepage";
import NewsOpenPage from "./pages/NewsOpen-page/NewsOpenPage"
import Fighterspage from "./pages/Fighters-page/FightersPage";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="Page">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/news" element={<Newspage />} />
					<Route path="" element={<Homepage />} />
					<Route path="/fighters" element={<Fighterspage />} />
					<Route path="/newsopen" element={< NewsOpenPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
