import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inroCar } from "../utils/constants/data";
import styled from "styled-components";
const CarDed = () => {
	const { id } = useParams();
	console.log(id);
	const navigate = useNavigate();
	const userId = inroCar.find((item) => item.id === +id);
	console.log(userId, "user");
	return (
		<CardBox>
			<h2>{id}</h2>
			<h2>{userId.name}</h2>
			<CardCar src={userId.image} />
			<Summ>
				<p>Ценна:{userId.price}</p>
				<p>Год:{userId.year}</p>
			</Summ>
			<EditCome>
				<button onClick={() => navigate(-1)}>Назад</button>
				{/* <button onClick={() => navigate(`/car/${id}/edit`)}>Изменить</button> */}
			</EditCome>
		</CardBox>
	);
};

export default CarDed;

const EditCome = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
`;
const CardBox = styled.div`
	text-align: center;
`;
const CardCar = styled.img`
	width: 500px;
	height: 300px;
	cursor: pointer;
`;

const Summ = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
`;
