import Footer from "./components/Footer/Footer";
import Newspage from "./Newspage";
import Homepage from "./pages/Home-page/Homepage";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="HomePage">
			<BrowserRouter>
				<Routes>
					<Route path="/news" element={<Newspage />} />
					<Route path="" element={<Homepage />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
