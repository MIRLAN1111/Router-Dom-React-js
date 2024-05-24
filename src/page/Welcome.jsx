import React from "react";
import styled from "styled-components";
import video from "../assets/video/mixkit-dashboard-of-a-car-72-hd-ready.mp4";
import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<AppContainer>
			<div>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Rubik+Mono+One&display=swap');
				</style>
			</div>
			<NameWelcome>
				<Nametext>WELCOME TO THE SUMMER OF CARS</Nametext>
				<div>
					<Link to={"/car"}>
						<ShadowButton>Come in</ShadowButton>
					</Link>
				</div>
			</NameWelcome>

			<BackgroundVideo src={video} autoPlay muted loop />
		</AppContainer>
	);
};

export default Welcome;

const AppContainer = styled.div`
	position: relative;
`;

const BackgroundVideo = styled.video`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;

const Nametext = styled.p`
	background: linear-gradient(to right, #ff0000, #000000);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: "Rubik Mono One", monospace;
	font-weight: 400;
	font-size: 45px;
	font-style: normal;
`;

const NameWelcome = styled.div`
	text-align: center;
`;

const ShadowButton = styled.button`
	margin-top: 150px;
	padding: 10px 20px;
	border: none;
	font-size: 17px;
	color: #fff;
	border-radius: 7px;
	letter-spacing: 4px;
	font-weight: 700;
	text-transform: uppercase;
	transition: 0.5s;
	transition-property: box-shadow;
	background: rgba(0, 140, 255, 0.629);
	box-shadow: 0 0 25px rgb(0, 140, 255);
	cursor: pointer;
	&:hover {
		background: rgb(0, 140, 255);

		box-shadow: 0 0 5px rgb(0, 140, 255), 0 0 25px rgb(0, 140, 255),
			0 0 50px rgb(0, 140, 255), 0 0 100px rgb(0, 140, 255);
	}
`;
