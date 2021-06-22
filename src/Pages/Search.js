import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/Reuse/MovieCard';
import { motion } from 'framer-motion';
import { BiSearchAlt } from 'react-icons/bi';

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
	console.log(movies);
	let filterMovie;
	if (movies) {
		filterMovie = movies.results.filter((m) => {
			return m.backdrop_path !== null;
		});
	}

	return (
		<>
			<SearchPage
				as={motion.div}
				initial='initial'
				animate='in'
				exit='out'
				variants={framer}
				transition={transition}>
				<Header>
					<SearchBar onSubmit={serachSubmitHandler}>
						<input
							type='text'
							placeholder={
								choose === 'movie'
									? 'Searching from movies..'
									: 'Searching from tv-shows..'
							}
							ref={serachRef}></input>
						<button type='submit'>
							<BiSearchAlt size={34} style={{ color: 'black' }} />
						</button>
					</SearchBar>
					<ChooseContainer>
						<Choose
							className={choose === 'movie' && 'active'}
							onClick={() => setChoose('movie')}>
							<h1>Movie</h1>
						</Choose>
						<Choose
							className={choose === 'tv' && 'active'}
							onClick={() => setChoose('tv')}>
							<h1>Tv-shows</h1>
						</Choose>
					</ChooseContainer>
				</Header>
				<MovieContainer>
					{movies &&
						filterMovie.map((movie) => {
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
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 600px) {
		margin-top: 20px;
	}
`;
const Header = styled.div`
	display: flex;
	width: 100%;
	height: 200px;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;
const SearchBar = styled.form`
	position: relative;
	width: 65%;
	transition: all 0.5s;
	& input {
		outline: none;
		border: none;
		background: #ebebeb;
		padding-left: 20px;
		border-radius: 5px;
		width: 100%;
		height: 50px;
		font-size: 1.2rem;
		font-family: 'Raleway', sans-serif;
		font-weight: 600;
		letter-spacing: 1px;
		@media (max-width: 800px) {
			width: 99%;
		}
	}
	& button {
		cursor: pointer;
		position: absolute;
		top: 18%;
		left: 95%;
		outline: none;
		border: none;
		background: none;
		@media (max-width: 800px) {
			left: 88%;
		}
	}
	@media (max-width: 800px) {
		width: 99%;
	}
`;

const MovieContainer = styled.div`
	width: 90%;
	height: 100%;
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
