import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../../page/Welcome";
import CarPaking from "../../page/CarPaking";
import CarDed from "../../page/CarDed";
const RouterPage = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="car" element={<CarPaking />} />
					<Route path="/car/:id" element={<CarDed />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouterPage;
