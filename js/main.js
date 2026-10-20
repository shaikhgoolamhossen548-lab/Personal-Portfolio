
		const words = ['matter', 'connect', 'inspire', 'last'];
		const animatedText = document.getElementById('animated-text');
		let wordIndex = 0;
		if (animatedText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			function changeWord() {
				const current = animatedText.textContent;
				let count = current.length;
				const erase = () => {
					if (count > 0) { animatedText.textContent = current.slice(0, --count); setTimeout(erase, 55); return; }
					wordIndex = (wordIndex + 1) % words.length;
					const next = words[wordIndex]; let i = 0;
					const type = () => { animatedText.textContent = next.slice(0, ++i); if (i < next.length) setTimeout(type, 95); else setTimeout(changeWord, 1700); };
					type();
				};
				erase();
			}
			setTimeout(changeWord, 1700);
		}
		const year = document.getElementById('year');
		if (year) year.textContent = new Date().getFullYear();

		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver(entries => entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			}), { threshold: .12 });
			document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
		}