import React from 'react'

const Header = () => {

	// create star on github button
	const starButton = () => {
		const starButton = document.createElement('a');
		starButton.className = 'github-button';
		starButton.href = 'https://github.com/ademhatay/football-league';
		starButton.setAttribute('data-icon', 'octicon-star');
		starButton.setAttribute('data-size', 'large');
		starButton.setAttribute('data-show-count', 'true');
		starButton.setAttribute('aria-label', 'Star ademhatay/football-league on GitHub');
		return starButton;
	}

	return <>
		<header className='w-full gradient h-16'>
			<div className='flex justify-center items-center h-full'>
				<h1 className='text-3xl text-white font-bold text-shadow'>World Cup 2022 Simulator</h1>

				{/* create star on github button */}
				<a href="https://github.com/ademhatay/">Star on Github</a>

			</div>

		</header>
	</>
}

export default Header