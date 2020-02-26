import React from 'react';
import { ImgContainer, Img, ImgLink } from '../utils';
import { useNearScreen } from '../../hooks/useNearScreen';

export const StandardImg = (props) => {
	const [
		show,
		element
	] = useNearScreen();

	return (
		<div ref={element}>
			{props.isLink ? (
				<ImgLink show={show}>
					<Img {...props} />
				</ImgLink>
			) : (
				<ImgContainer show={show}>
					<Img {...props} />
				</ImgContainer>
			)}
		</div>
	);
};
