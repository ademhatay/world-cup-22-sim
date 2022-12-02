import React from 'react'

const Team = ({ team, teams }) => {
	const { stats } = team;

	const position = teams.findIndex(t => t.name === team.name) + 1;

	const positionColor = position === 1 || position === 2 ? 'bg-green-200' : 'bg-gray-200';

	return <>
		<tr className=''>
			<td className={`${positionColor} border border-slate-700 text-center`}>{position}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{team.name}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.played}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.wins}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.draws}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.losses}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.goalsFor}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.goalsAgainst}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.goalDifference}</td>
			<td className={`${positionColor} border border-slate-700 text-center`}>{stats.points}</td>
		</tr>
	</>
}

export default Team