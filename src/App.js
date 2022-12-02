import React, { useState } from 'react'
import Group from './components/Group'
import Header from './components/Header';
import {
	groups as allGroup,
	createFixtures,
	playMatches,
	resetMatches,
	updateStats,
	resetStats,
	sortTeams
} from './db';

const App = () => {
	const [groups, setGroups] = useState(allGroup);
	const [showFixtures, setShowFixtures] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false
	});

	const handlePlay = () => {
		playMatches();
		updateStats();
		sortTeams();
		setGroups([...groups]);
	}

	const handleReset = () => {
		resetMatches();
		resetStats();
		sortTeams();
		setGroups([...groups]);
	}


	return <>
		<div className='container  mx-auto flex flex-col justify-center my-4 p-1 md:p-6'>
			<div className='grid grid-cols-1 gap-2 md:gap-x-5 gap-y-0  px-5 md:px-0 pb-2 fixed bottom-0 right-0 bg-slate-300 opacity-50'>
				<button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={createFixtures} >
					CreateFixture
				</button>

				<button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handlePlay} >
					Play All Matches
				</button>
				<button disabled={true} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400' >
					Play Last 16
				</button>
				<button disabled={true} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400' >
					Play Quarter Finals
				</button>
				<button disabled={true} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400' >
					Play Semi Finals
				</button>
				<button disabled={true} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400' >
					Play Finals
				</button>
				<button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleReset} >
					Reset
				</button>
			</div>
			create grid of groups
			<div className='flex justify-evenly flex-wrap gap-6  mx-5 md:mx-0'>
				{groups.map(group => <Group key={group.name}
					group={group}
					showFixtures={showFixtures}
					setShowFixtures={setShowFixtures}
				/>)}
			</div>
		</div>
	</>
}

export default App