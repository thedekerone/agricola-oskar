import { getPosts } from '../firebase';
import React, { useState, useEffect } from 'react';

export const useGetPosts = (lang = 'en') => {
	const [
		data,
		setData
	] = useState([]);

	useEffect(() => {
		(async () => {
			if (data.length === 0) {
				const posts = await getPosts(lang);
				setData(posts);
			}
		})();
	}, []);

	return [
		data
	];
};
