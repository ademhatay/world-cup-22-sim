import React from 'react';
import Team from './Team';


const Group = ({ group, showFixtures, setShowFixtures }) => {

	const toggleFixtures = (id) => {
		if (group.matches.length < 1) {
			alert('No fixtures available');
			return;
		}
		setShowFixtures({
			...showFixtures,
			[id]: !showFixtures[id]
		})
	}

	// const toggleFixtures = () => {
	// 	if (group.matches.length < 1) {
	// 		alert('No fixtures available');
	// 		return;
	// 	}
	// 	setShowFixtures(!showFixtures);
	// }

	// winner team background color is green
	const winnerColor = 'bg-green-500';
	// draw team background color is yellow
	const drawColor = 'bg-yellow-500';
	// loser team background color is red
	const loserColor = 'bg-red-500';

	return <>
		<div className='bg-white flex flex-col items-center rounded-lg shadow-lg'>
			<h1 className='text-center text-xl font-bold'>Group {group.name}</h1>
			<table className='bg-gray-100 border-seperate border border-slate-500'>
				<thead>
					<tr>
						<th className="border border-slate-600 w-9">Pos</th>
						<th className="border border-slate-600 w-40">Team</th>
						<th className="border border-slate-600 w-9">Pld</th>
						<th className="border border-slate-600 w-9">W</th>
						<th className="border border-slate-600 w-9">D</th>
						<th className="border border-slate-600 w-9">L</th>
						<th className="border border-slate-600 w-9">GF</th>
						<th className="border border-slate-600 w-9">GA</th>
						<th className="border border-slate-600 w-9">GD</th>
						<th className="border border-slate-600 w-9">Pts</th>
					</tr>
				</thead>
				<tbody>
					{group.teams.map((team, index) => (
						<Team key={index} team={team} teams={group.teams} />
					))}
				</tbody>
			</table>

			<button className='my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => toggleFixtures(group.id)} >
				<span className='mr-2'>{!showFixtures[group.id] ? "Show Fixtures" : "Hide Fixtures"}</span>
			</button>

			{showFixtures[group.id] && <table className={`my-5 bg-stone-300 border-seperate border border-slate-500`}>
				<thead>
					<tr>
						<th className="border border-slate-600">Week</th>
						<th className="border border-slate-600 w-44">Home</th>
						<th className="border border-slate-600 w-16">MS</th>
						<th className="border border-slate-600 w-44">Away</th>
					</tr>
				</thead>
				<tbody>
					{/* Week 1*/}
					<tr>
						<td className="border border-slate-600 text-center">1</td>
						<td className="border border-slate-600 text-center">{group.matches[0].home.name}</td>
						<td className="border border-slate-600 text-center">{group.matches[0].homeGoals} - {group.matches[0].awayGoals}</td>
						<td className="border border-slate-600 text-center">{group.matches[0].away.name}</td>
					</tr>
					{/* Week 1*/}
					<tr>
						<td className="border border-slate-600 text-center">1</td>
						<td className="border border-slate-600 text-center">{group.matches[5].home.name}</td>
						<td className="border border-slate-600 text-center">{group.matches[5].homeGoals} - {group.matches[5].awayGoals}</td>
						<td className="border border-slate-600 text-center">{group.matches[5].away.name}</td>
					</tr>

					{/* Week 2*/}
					<tr>
						<td className="border border-slate-600 text-center">2</td>
						<td className="border border-slate-600 text-center">{group.matches[1].home.name}</td>
						<td className="border border-slate-600 text-center">{group.matches[1].homeGoals} - {group.matches[1].awayGoals}</td>
						<td className="border border-slate-600 text-center">{group.matches[1].away.name}</td>
					</tr>
					{/* Week 2*/}
					<tr>
						<td className="border border-slate-600 text-center">2</td>
						<td className="border border-slate-600 text-center">{group.matches[4].home.name}</td>
						<td className="border border-slate-600 text-center">{group.matches[4].homeGoals} - {group.matches[4].awayGoals}</td>
						<td className="border border-slate-600 text-center">{group.matches[4].away.name}</td>
					</tr>
					{/* Week 3*/}
					<tr>
						<td className="border border-slate-600 text-center">3</td>
						<td className="border border-slate-600 text-center">{group.matches[2].home.name}</td>
						<td className="border border-slate-600 text-center">{group.matches[2].homeGoals} - {group.matches[2].awayGoals}</td>
						<td className="border border-slate-600 text-center">{group.matches[2].away.name}</td>
					</tr>
					{/* Week 3*/}
					<tr>
						<td className="border border-slate-600 text-center">3</td>
						<td className="border border-slate-600 text-center">{group.matches[3].home.name}</td>
						<td className="border border-slate-600 text-center">{group.matches[3].homeGoals} - {group.matches[3].awayGoals}</td>
						<td className="border border-slate-600 text-center">{group.matches[3].away.name}</td>
					</tr>
				</tbody>
			</table>}
		</div>
	</>
}

export default Group