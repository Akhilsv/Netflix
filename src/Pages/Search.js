import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/Reuse/MovieCard';
import { motion } from 'framer-motion';

const Search = ({ framer, transition }) => {
	const [movies, setMovie] = useState();
	const [choose, setChoose] = useState('movie');
	const serachRef = useRef();
	const fetchMovie = async (input) => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/${choose}?query=${input}&api_key=84e826934d86626ac5c5d04c51830f3d&page=1`,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(`${data.status_message} ${response.status}`);
			setMovie(data);
		} catch (error) {
			console.log(error);
		}
	};
	const serachSubmitHandler = (e) => {
		e.preventDefault();
		const serachInput = serachRef.current.value;
		fetchMovie(serachInput);
	};
	console.log(choose);
	return (
		<>
			<SearchPage
				as={motion.div}
				initial='initial'
				animate='in'
				exit='out'
				variants={framer}
				transition={transition}>
				<SearchBar onSubmit={serachSubmitHandler}>
					<input
						type='text'
						placeholder={
							choose === 'movie'
								? 'Searching from movies..'
								: 'Searching from tv-shows..'
						}
						ref={serachRef}></input>
					<ChooseContainer>
						<Choose
							className={choose === 'movie' && 'active'}
							onClick={() => {
								setChoose('movie');
							}}>
							<h1>Movie</h1>
						</Choose>
						<Choose
							className={choose === 'tv' && 'active'}
							onClick={() => {
								setChoose('tv');
							}}>
							<h1>Tv-shows</h1>
						</Choose>
					</ChooseContainer>
				</SearchBar>
				<MovieContainer>
					{movies &&
						movies.results.map((movie) => {
							return (
								<MovieCard
									device={choose}
									key={movie.id}
									mid={movie.id}
									img={movie.poster_path}
									details={movie}
								/>
							);
						})}
				</MovieContainer>
			</SearchPage>
		</>
	);
};

const SearchPage = styled(motion.div)`
	margin-top: 80px;
	width: 99vw;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding-bottom: 100px;
	@media (max-width: 600px) {
		margin-top: 20px;
	}
`;
const SearchBar = styled.form`
	width: 100%;
	height: 25vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 800px) {
		flex-direction: column;
	}
	transition: all 0.5s;
	& input {
		outline: none;
		border: none;
		background: #ebebeb;
		padding-left: 20px;
		border-radius: 5px;
		width: 68%;
		height: 50px;
		font-size: 1.2rem;
		font-family: 'Raleway', sans-serif;
		font-weight: 600;
		letter-spacing: 1px;
		@media (max-width: 800px) {
		
			width: 98%;
		}
	}
`;
const MovieContainer = styled.div`
	width: 90%;
	min-height: 80vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	overflow-y: scroll;
	flex-wrap: wrap;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const ChooseContainer = styled.div`
	width: 30%;
	height: 50px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 800px) {
		width: 90%;
		height: 40px;
	}
`;
const Choose = styled.button`
	border-radius: 5px;
	outline: none;
	border: none;
	height: 100%;
	width: 40%;
	background-color: #838383;
	transition: all 0.5s;
	& h1 {
		color: #0a0a0a;
		font-size: 1rem;
	}
	&.active {
		background: #ebebeb;
	}
`;
export default Search;
