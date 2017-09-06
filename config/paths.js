'use strict';

module.exports = app =>	{
	const envFile = process.env;

	let protocol = (envFile.USE_HTTPS === 'true') ? 'https' : 'http';
	let root = `${protocol}://${envFile.HOST}`;
	if (envFile.PORT) root = `${root}:${envFile.PORT}`;

	Object.assign(app.locals, {
		assetRoot: envFile.ASSETS_PATH,
		root
	});
};
