import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
	const [movie, setMovie] = useState('');
	const [loading, setLoading] = useState(true);
	const [toggle, setToggle] = useState('Cast');

	const params = useParams();
	const toggleTab = (e) => {
		setToggle(e.target.innerHTML);
	};

	useEffect(() => {
		fetchData(params.movieId, params.type);
	}, [params.movieId]);

	const fetchData = async (id, device) => {
		const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/${device}/${id}?api_key=${apiKey}&language=en-US&page=1`,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(`${data.status_message} ${response.status}`);
			setMovie(data);
			console.log(data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};
	let poster = '';
	if (!loading) {
		let img = movie.backdrop_path || movie.poster_path;
		const baseUrl = `https://image.tmdb.org/t/p/original/`;
		poster = `${baseUrl}${img}` ;
	}

	return (
		<>
			{!loading && (
				<DetailsHolder>
					<ImgContainer background={poster}></ImgContainer>
					<DetailsContainer>
						<Header>
							<Title>{movie.title || movie.original_name}</Title>
							<SymbolsHolder>
								<h1>⭐{movie.vote_average}</h1>
								<h1>📅{movie.release_date || movie.last_air_date}</h1>
								<h1>❓{movie.status}</h1>
							</SymbolsHolder>
						</Header>
						<Body>
							<SwitchChannel>
								<Button onClick={toggleTab}>Overview</Button>
								<Button onClick={toggleTab}>Cast</Button>
							</SwitchChannel>
							<ChannelDetails>
								{toggle === 'Overview' && <p>{movie.overview}</p>}
								{toggle === 'Cast' && <p>{'Showing Cast'}</p>}
							</ChannelDetails>
						</Body>
					</DetailsContainer>
				</DetailsHolder>
			)}
		</>
	);
};

const DetailsHolder = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	margin-top: 60px;
	background-color: #000000;
	display: flex;
	align-items: center;
	@media (max-width: 900px) {
		margin-top: 0;

		height: 100%;
		flex-direction: column;
		padding-bottom: 50px;
	}
`;
const ImgContainer = styled.div`
	min-width: 50%;
	height: 90%;
	background-image: ${(props) => `url(${props.background}) `};
	background-size: 100% 100%;
	@media (max-width: 900px) {
		width: 100%;
		height: 30%;
	}
`;
const DetailsContainer = styled.div`
	padding: 10px;
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 900px) {
		justify-content: space-around;
	}
`;

const Header = styled.div`
	padding-left: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 30vh;
	@media (max-width: 900px) {
		width: 100%;
		height: 30%;
		padding-left: 20px;
	}
`;
const Title = styled.h1`
	font-family: 'Noto Sans HK', sans-serif;
	color: #ebebeb;
	font-size: 1.5rem;
	@media (max-width:400px){
		font-size: 1.2rem;
	}
`;

const SymbolsHolder = styled.div`
	display: flex;
	padding-right: 30px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	& h1 {
		font-size: 1.4rem;
		color: white;
		@media (max-width: 400px) {
			font-weight: 500;
			font-size: 1rem;
		}
	}
`;
const Body = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	min-height: 70%;
	width: 90%;
	margin: auto;
	@media (max-width: 900px) {
		width: 100%;
	}
`;
const SwitchChannel = styled.div`
	height: 15%;
	width: 80%;
	color: white;
	display: flex;
	align-items: center;
	font-family: 'Noto Sans HK', sans-serif;

	justify-content: space-evenly;
	& h2 {
		cursor: pointer;
		&:hover {
		}
	}
	@media (max-width: 900px) {
		font-weight: 400;
		font-size: 0.7rem;
		width: 100%;
	
	}
`;
const Button = styled.h1`
	transition: all 0.5s;
	text-align: center;
	width: 40%;
	height: 100%;
	border-bottom: 5px solid black;
	@media (max-width: 900px) {
		font-weight: 600;
		font-size: 1rem;
	}
	&:hover {
		border-bottom: 5px solid #c28400;
		border-radius: 5px;
	}
`;
const ChannelDetails = styled.div`
	width: 90%;
	min-height: 65%;
	font-size: 1.2rem;
	letter-spacing: 1px;
	& p {
		color: #f7f4f4ef;
		@media (max-width: 900px) {
			overflow: scroll;
			font-size: 1rem;
		}
	}
`;
export default MovieDetails;
