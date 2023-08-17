import Footer from "./components/Footer/Footer";
import Newspage from "./pages/News-page/Newspage";
import Homepage from "./pages/Home-page/Homepage";
import NewsOpenPage from "./pages/NewsOpen-page/NewsOpenPage";
import Fighterspage from "./pages/Fighters-page/FightersPage";
import AboutPage from "./pages/About-page/AboutPage";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import SquadPage from "./pages/Squad-page/SquadPage";
import AlbumsPage from "./pages/Albums-page/AlbumsPage";
import PhotoPage from "./pages/Photos-page/PhotoPage";

function App() {
	return (
		<div className="Page">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/SquadPage" element={<SquadPage />} />
					<Route path="/news" element={<Newspage />} />
					<Route path="" element={<Homepage />} />
					<Route path="/fighters" element={<Fighterspage />} />
					<Route path="/news/open" element={<NewsOpenPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/gallery" element={<AlbumsPage />} />
					<Route path="/photopage" element={<PhotoPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
