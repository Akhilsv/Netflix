import { useContext } from 'react';
import { FetchContext } from './FetchContext';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import Tv from './Pages/Tv'
import Home from './Pages/Home';
import MovieDetails from './components/Reuse/MovieDetails';

function App() {
	// const { fetchData,data } = useContext(FetchContext);
	// const popularHandler = (e) => {
	// 	fetchData(e.target.value);
	// };

	return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/home'>
					<Home />
				</Route>
				<Route exact path='/tv'>
					<Tv />
				</Route>
				<Route exact path='/:movieId'>
					<MovieDetails />
				</Route>
				<Route exact path='*'>
					<Home />
				</Route>
			</Switch>
		</>
	);
}

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
