import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey            : process.env.FIREBASE_API_KEY,
	authDomain        : 'agricola-oskar.firebaseapp.com',
	databaseURL       : 'https://agricola-oskar.firebaseio.com',
	projectId         : 'agricola-oskar',
	storageBucket     : 'agricola-oskar.appspot.com',
	messagingSenderId : '724304465696',
	appId             : '1:724304465696:web:76ec529cc68884ed15d145',
	measurementId     : 'G-1NPPM6QTSH'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const firestore = firebase.firestore();

export const getPosts = async (lang = 'en') => {
	const snapshots = await firestore.collection(`${lang == 'es' ? 'es-' : ''}posts`).get();

	const posts = snapshots.docs.map((doc) => {
		let image;
		const data = doc.data();

		// Since there isn't a in-built image optimizer, having a switch statement helps optimize all image needed
		// data.imgPath contain a name referece to the image in the images folder

		switch (data.imgPath) {
			case '1-mango-kent':
				image = require('../static/images/1-mango-kent.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case '2-mango-keitt':
				image = require('../static/images/2-mango-keitt.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;

			case '3-mango-tommy-atkins':
				image = require('../static/images/3-mango-tommy-atkins.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case '4-mango-haden':
				image = require('../static/images/4-mango-haden.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case '5-mango-edward':
				image = require('../static/images/5-mango-edward.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'mango-avocado':
				image = require('../static/images/mango-avocado.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'mango-chicken':
				image = require('../static/images/mango-chicken.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'mango-fiber':
				image = require('../static/images/mango-fiber.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'mango-medium':
				image = require('../static/images/mango-medium.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'mango-peru':
				image = require('../static/images/mango-peru.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'peru-farming':
				image = require('../static/images/peru-farming.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case 'chankillofarmerscover':
				image = require('../static/images/chankillofarmerscover.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			case '_DSC7509':
				image = require('../static/images/_DSC7509.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
				break;
			default:
				image = require('../static/images/peru-farming.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800');
		}

		return { id: doc.id, ...data, src: image.src, srcSet: image.srcSet };
	});
	return posts;
};
export default firebase;
