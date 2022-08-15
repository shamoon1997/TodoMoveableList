import React, { useState, useEffect } from 'react';
import '../styles/Slides.css';
function Slides({ slides }) {
	const [count, setCount] = useState(0);
	const [currentSlide, setcurrentSlide] = useState(slides[count]);
	const [restartButton, setrestartButton] = useState(true);
	const [prevButton, setprevButton] = useState(true);
	const [nextButton, setnextButton] = useState(false);
	useEffect(() => {
		setcurrentSlide(slides[count]);
		check();
	});
	function check() {
		if (count == 0) {
			setrestartButton(true);
			setprevButton(true);
			setnextButton(false);
		} else if (count > 0 && count != slides.length - 1) {
			setrestartButton(false);
			setprevButton(false);
		} else if (count == slides.length - 1) {
			setnextButton(true);
			setrestartButton(false);
			setprevButton(false);
		}
	}
	function setNextSlide() {
		setCount((prevCount) => prevCount + 1);
	}
	function setPrevSlide() {
		setCount((prevCount) => prevCount - 1);
	}
	function setRestartSlide() {
		setCount((prevCount) => prevCount - prevCount);
	}
	return (
		<div>
			<div id="navigation" className="text-center">
				<button
					data-testid="button-restart"
					className="small outlined"
					disabled={restartButton}
					onClick={setRestartSlide}
				>
					Restart
				</button>
				<button
					data-testid="button-prev"
					className="small"
					disabled={prevButton}
					onClick={setPrevSlide}
				>
					Prev
				</button>
				<button
					data-testid="button-next"
					className="small"
					disabled={nextButton}
					onClick={setNextSlide}
				>
					Next
				</button>
			</div>
			<div id="slide" className="card text-center">
				<h1 data-testid="title">{currentSlide.title}</h1>
				<p data-testid="text">{currentSlide.text}</p>
			</div>
		</div>
	);
}

export default Slides;
