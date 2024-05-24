import React from "react";

import { inroCar } from "../utils/constants/data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const CarPaking = () => {
	return (
		<div>
			<CardImages>
				{inroCar.map((item) => (
					<PhotoHow key={item.id}>
						<NavLink to={`/car/${item.id}`}>
							<ImagePhone src={item.image} />
						</NavLink>
						<NameText>
							<p>{item.name}</p>
							<p>{item.price}</p>
							<p>{item.year}</p>
						</NameText>
					</PhotoHow>
				))}
			</CardImages>
		</div>
	);
};

export default CarPaking;

const PhotoHow = styled.div`
	cursor: pointer;
	border: 1px solid gray;
	&:hover {
		transform: scale(1.1);
		transition: 0.5s;
	}
`;
const NameText = styled.div`
	font-size: 20px;
	display: flex;
	justify-content: center;
	gap: 30px;
`;
const CardImages = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	justify-content: center;
`;
const ImagePhone = styled.img`
	width: 450px;
	height: 300px;
`;
