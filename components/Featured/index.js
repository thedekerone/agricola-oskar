import React, { useContext } from 'react';

import { FeaturedGrid, MainGrid, GridCell, Container } from './styles';
import { MainButton, CenterContainer, Label } from '../utils';
import { Card } from '../Card';
import { ThemeContext } from 'styled-components';

export const Featured = () => {
	const { data, lang } = useContext(ThemeContext);

	return (
		<CenterContainer>
			<Label>
				<span> {lang == 'es' ? 'Destacado' : 'Featured'}</span>
			</Label>
			<FeaturedGrid>
				{data.length > 0 && (
					<React.Fragment>
						{data.slice(0, 4).map((post) => {
							return (
								<GridCell key={post.id}>
									<Card {...post} />
								</GridCell>
							);
						})}

						<MainGrid>
							<Card
								titleSize='2.2rem'
								mini={false}
								{...data.find((el) => el.id === 'mQznO3VkBLXubcI2z4GM')}
								descriptionSize='1.1rem'
								padding='0rem 2.5rem 2.5rem'
							/>
						</MainGrid>
					</React.Fragment>
				)}
			</FeaturedGrid>
		</CenterContainer>
	);
};
