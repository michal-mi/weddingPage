/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
function goCountown() {
	const fest = new Date(2025, 7, 9, 15, 0);
	const current = new Date();
	const sec = (fest - current) / 1000;

	const daysEl = document.getElementById('days');
	const hoursEl = document.getElementById('hours');
	const minutesEl = document.getElementById('minutes');
	const secondsEl = document.getElementById('seconds');

	if (sec > 0) {
		// Przed ślubem – odliczanie do ślubu
		const d = Math.floor(sec / 3600 / 24);
		const hrs = Math.floor(sec / 3600) % 24;
		const min = Math.floor(sec / 60) % 60;
		const s = Math.floor(sec) % 60;

		daysEl.innerText = d;
		hoursEl.innerText = hrs;
		minutesEl.innerText = min;
		secondsEl.innerText = s;
	} else {
		// Po ślubie – czas od ślubu
		const secPassed = Math.abs(sec);
		const d = Math.floor(secPassed / 3600 / 24);
		const hrs = Math.floor(secPassed / 3600) % 24;
		const min = Math.floor(secPassed / 60) % 60;
		const s = Math.floor(secPassed) % 60;

		// Zmieniamy tytuł i wyświetlamy czas trwania małżeństwa
		document.querySelector('#banner h1').innerText = "Jesteśmy już małżeństwem od:";
		daysEl.innerText = d;
		hoursEl.innerText = hrs;
		minutesEl.innerText = min;
		secondsEl.innerText = s;
	}
}


(function($) {
	const days = document.getElementById('days')
	const hours = document.getElementById('hours')
	const minutes = document.getElementById('minutes')
	const seconds = document.getElementById('seconds')

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
		goCountown()

		setInterval(goCountown, 1000)

})(jQuery);