import React from 'react';
import styled from 'styled-components';
import HorizontalContainer from '../components/HorizontalContainer';
import OneMovieContainer from '../components/OneMovieContainer';
import { motion } from 'framer-motion';

const Home = ({ framer, transition }) => {
	return (
		<>
			<Holder
				as={motion.div}
				initial='initial'
				animate='in'
				exit='out'
				variants={framer}
				transition={transition}>
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

export const Holder = styled(motion.div)`
	@media (max-width: 600px) {
		padding-bottom: 60px;
	}
`;
export default Home;
