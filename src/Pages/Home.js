import React from 'react';
import styled from 'styled-components';
import HorizontalContainer from '../components/HorizontalContainer';
import OneMovieContainer from '../components/OneMovieContainer';

const Home = () => {
	return (
		<>
			<Holder>
				<OneMovieContainer device={'movie'} type={'popular'} />
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
			</Holder>
		</>
	);
};

export const Holder = styled.div`
	@media (max-width: 600px) {
		padding-bottom: 60px;
	}
`;
export default Home;
