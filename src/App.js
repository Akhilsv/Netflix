import { useContext } from 'react';
import { FetchContext } from './FetchContext';
import Nav from './components/Nav';
import { Redirect, Route, Switch } from 'react-router-dom';
import Tv from './Pages/Tv';
import Home from './Pages/Home';
import MovieDetails from './components/Reuse/MovieDetails';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Search from './Pages/Search';



function App() {
	// const { fetchData,data } = useContext(FetchContext);
	// const popularHandler = (e) => {
	// 	fetchData(e.target.value);
	// };
	const pageVarient = {
		initial: {
			opacity: 0,
			x: '100vw',
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: '-100vw',
		},
	};
	const pageTransition = {
		
	};

	return (
		<>
			<Nav />
			<Out>
				<AnimatePresence>
					<Switch>
						<Route exact path='/movie'>
							<Home framer={pageVarient} transition={pageTransition} />
						</Route>
						<Route exact path='/tv'>
							<Tv framer={pageVarient} transition={pageTransition} />
						</Route>
						<Route exact path='/search'>
							<Search framer={pageVarient} transition={pageTransition} />
						</Route>
						<Route exact path='/:type/:movieId'>
							<MovieDetails framer={pageVarient} transition={pageTransition} />
						</Route>
						<Route exact path='*'>
							<Redirect to='/movie' />
						</Route>
					</Switch>
				</AnimatePresence>
			</Out>
		</>
	);
}
const Out = styled.div`
	overflow-y: hidden;
	overflow-x: hidden;
	width: 100%;
	height: 100%;
`;
export default App;

// const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
{
	/* <button onClick={popularHandler} value='upcoming'>
				Upcoming
			</button>
			<button onClick={popularHandler} value='popular'>
				popular
			</button>
			<button onClick={popularHandler} value='top_rated'>
				Top Rated
			</button> */
}
