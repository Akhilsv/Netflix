import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/Reuse/MovieCard';
import { motion } from 'framer-motion';


const Search = ({ framer, transition }) => {
	const [movies, setMovie] = useState();
	const serachRef = useRef();
	const fetchMovie = async (input) => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=84e826934d86626ac5c5d04c51830f3d&page=1`,
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
						placeholder='Serach for shows,movie etc..'
						ref={serachRef}></input>
				</SearchBar>
				<MovieContainer>
					{movies &&
						movies.results.map((movie) => {
							return (
								<MovieCard
									device={'movie'}
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
		margin-top: 0;
	}
`;
const SearchBar = styled.form`
	width: 100%;
	height: 20vh;
	display: flex;

	align-items: center;
	& input {
		margin: 0 auto;
		outline: none;
		border: none;
		background: #ebebeb;
		padding-left: 20px;
		border-radius: 5px;
		width: 80%;
		height: 50px;
		font-size: 1.2rem;
		font-family: 'Raleway', sans-serif;
		font-weight: 600;
		letter-spacing: 1px;
		@media (max-width: 600px) {
			width: 99%;
		}
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
export default Search;
