import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SuccessPage from "./pages/success";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/success" element={<SuccessPage/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
