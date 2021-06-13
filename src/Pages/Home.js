import React from 'react';
import HorizontalContainer from '../components/HorizontalContainer';
import OneMovieContainer from '../components/OneMovieContainer';

const Home = () => {
	return (
		<>
            <OneMovieContainer device={ 'movie'} type={'popular'} />
			<HorizontalContainer
				device={'movie'}
				type={'popular'}
				name={'Popular on Netflix'}
			/>

			<HorizontalContainer
				device={'movie'}
				type={'top_rated'}
				name={'Top Rated'}
			/>
			<HorizontalContainer
				device={'movie'}
				type={'upcoming'}
				name={'Upcoming'}
			/>
		</>
	);
};

export default Home;
