/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
	'particles-js',

	{
		particles: {
			number: {
				value: 34,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: '#ffffff'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#ffffff'
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: 'https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate.png',
					width: 300,
					height: 300
				}
			},
			opacity: {
				value: 0.9540301762149861,
				random: true,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 8.017060304327615,
				random: false,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 1,
				direction: 'bottom',
				random: true,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: false,
					mode: 'grab'
				},
				onclick: {
					enable: false,
					mode: 'repulse'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 0,
					line_linked: {
						opacity: 0
					}
				},
				bubble: {
					distance: 0,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	}
)
