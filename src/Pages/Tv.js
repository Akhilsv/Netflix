import React from 'react';
import HorizontalContainer from '../components/HorizontalContainer';
import OneMovieContainer from '../components/OneMovieContainer';

const Home = () => {
	return (
		<>
			<OneMovieContainer type={'airing_today'} device={'tv'} />

			<HorizontalContainer
				device={'tv'}
				type={'popular'}
				name={'Popular on Netflix'}
			/>
			<HorizontalContainer
				device={'tv'}
				type={'top_rated'}
				name={'Top Rated'}
			/>
			<HorizontalContainer
				device={'tv'}
				type={'on_the_air'}
				name={'Upcoming'}
			/>
		</>
	);
};

export default Home;
