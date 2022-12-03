import React from 'react'
import GitHubButton from 'react-github-btn'
const Header = () => {
	return <>
		<div className="container w-full flex justify-center bg-black h-20 items-center text-white">
			<GitHubButton href="https://github.com/ademhatay/world-cup-22-sim" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ademhatay/world-cup-22-sim on GitHub">Star</GitHubButton> &nbsp; &nbsp;
			<GitHubButton href="https://github.com/ademhatay" data-size="large" data-show-count="true" aria-label="Follow @ademhatay on GitHub">Follow @ademhatay</GitHubButton>
		</div>
	</>
}

export default Header