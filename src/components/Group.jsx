import React from 'react';
import Fixtures from './Fixtures';
import Team from './Team';


const Group = ({ group, showFixtures, setShowFixtures }) => {


	const toggleFixtures = (id) => {
		setShowFixtures({
			...showFixtures,
			[id]: !showFixtures[id]
		})
	}

	const showTable = group.id < 9;




	return <> <div className='bg-white flex flex-col items-center rounded-lg shadow-lg h-60 overflow-auto '>
		<h1 className='text-center text-xl font-bold'>Group {group.name}</h1>
		{showTable && <table className='bg-gray-100 border-seperate border border-slate-500'>
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
		</table>}

		{showTable && <button className='my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => toggleFixtures(group.id)} >
			<span className='mr-2'>{!showFixtures[group.id] ? "Show Fixture" : "Hide Fixture"}</span>
		</button>}

		{showFixtures[group.id] && <Fixtures showTable={showTable} group={group} />}
	</div>
	</>
}

export default Group