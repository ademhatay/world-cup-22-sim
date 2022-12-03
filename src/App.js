import React, { useState } from 'react'
import Group from './components/Group'

import {
	groups as allGroup,
	playMatches,
	getFinalMatch,
	resetAll
} from './db';
import Header from './components/Header';

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
		8: false,
		9: true,
		10: true,
		11: true,
		12: true,
	});

	const handlePlay = async () => {
		await playMatches();
		setGroups([...allGroup]);
	}

	const playFinals = async () => {
		if (allGroup[0].matches[0].winner === null) {
			alert('Please play groups first');
			return;
		}
		await getFinalMatch();
		setGroups([...allGroup]);
	}

	const reset = async () => {
		await resetAll();
		setGroups([...allGroup]);
	}
	return <>
		<Header /> 
		<div className='grid grid-cols-1 gap-2 md:gap-x-5 gap-y-0  px-5 md:px-0 pb-2 fixed bottom-0 right-0 bg-slate-300'>
			<button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400' onClick={handlePlay}>
				Play Group Matches
			</button>
			<button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400' onClick={playFinals}>
				Play Finals
			</button>
			<button onClick={reset} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >
				Reset
			</button>
		</div>
		<div className="grid  grid-cols-1 md:grid-cols-2 auto-rows-auto md:gap-5 h-screen">
			{groups.map(group => <Group key={group.name}
				group={group}
				showFixtures={showFixtures}
				setShowFixtures={setShowFixtures}
			/>)}
		</div>
	</>
}

export default App