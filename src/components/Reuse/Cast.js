import React from 'react';
import styled from 'styled-components';

const Cast = ({ data }) => {
	data.cast.length = 6;
	console.log(data.cast);
	return (
		<>
			<CastBox>
				{data.cast.map((cast, index) => {
					return (
						<CastCard key={index}>
							<img
								src={`http://image.tmdb.org/t/p/w500/${cast.profile_path}`}
								onError={(e) => {
									e.target.src = '/Person.jpg';
								}}
								alt='cast'
							/>
							<p>{cast.name}</p>
						</CastCard>
					);
				})}
			</CastBox>
		</>
	);
};

const CastBox = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 25px;
	grid-auto-flow: dense;
`;
const CastCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 150px;
	img {
		width: 50px;
		border-radius: 5px;
	}
	p {
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 1px;
		margin: 0 0 0 5%;
		white-space: nowrap;
		color: white;
	}
`;

export default Cast;
