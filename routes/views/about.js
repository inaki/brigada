var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'about';

	locals.organisers = [
		{ name: 'Imanol Aranzadi',    image: '/images/justMe.jpg',    twitter: 'iaranzadi',            title: 'Captain, and organizer.' },
		{ name: 'Stephanie Kruger',     image: '/images/stef.jpeg',     twitter: 'skruger74',   title: 'Captain and coordinator' },
		{ name: 'Froilan Irizarri',       image: '/images/froi.jpeg',       twitter: 'skfroi',        title: 'Code evangelist' },
		{ name: 'Alberto Colón',     image: '/images/albert.png',   twitter: 'alberti_co',      title: 'Data organizer' },
		{ name: 'Andrés Martínez',    image: '/images/otherandres.jpeg',    twitter: 'OtherAndres',            title: 'Public Relations' },
		{ name: 'Alán Taveras',     image: '/images/alan.jpeg',     twitter: 'AlanTaveras1',   title: 'Marketing' },
		{ name: 'Andrés Colón',       image: '/images/andrescolon.jpeg',       twitter: 'andrescolonpr',        title: 'Government Partner' },
		{ name: 'Roberto Rivera',     image: '/images/roberto.png',   twitter: 'DevStudioMedia',      title: 'Developer' }
	]

	view.render('site/about');

}
