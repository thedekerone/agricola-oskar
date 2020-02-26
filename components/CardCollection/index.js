import React from 'react';
import { Grid } from './styles';
import { Label } from '../utils';

export const CardColleciton = ({ children, gap, title, minWidth }) => {
	return (
		<React.Fragment>
			{title && (
				<Label>
					<span>{title}</span>
				</Label>
			)}

			<Grid minWidth={minWidth} gap={gap}>
				{children}
			</Grid>
		</React.Fragment>
	);
};
