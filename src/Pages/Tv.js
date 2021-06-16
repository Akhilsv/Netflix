import React from 'react';
import HorizontalContainer from '../components/HorizontalContainer';
import OneMovieContainer from '../components/OneMovieContainer';
import { Holder } from './Home';
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
				transition={transition}
				>
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
			</Holder>
		</>
	);
};

export default Home;
