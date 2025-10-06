import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
// import SuccessPage from "./pages/success";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/blog" element={<Blog/>}/>
				{/* <Route path="/success" element={<SuccessPage/>}/> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
