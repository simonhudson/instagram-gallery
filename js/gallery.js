let returnData;
const getMedia = (options) => {
	options = options || {};
	const count = options.count || '';

	const request = {
		url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=1400621600.75f2cc1.57c8f0dec0564e43929bd3b09dea5152&count=${count}`,
		mode: 'cors'
	};
	fetch(request.url)
	    .then(blob => blob.json())
	    .then(data => console.log(data));
};

const init = () => {
	const gallery = document.querySelector('.js-gallery');
	if (!gallery) return;
	getMedia();
};
init();
