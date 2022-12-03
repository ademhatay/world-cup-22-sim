import React from 'react'

const Fixtures = ({ group, showTable }) => {

	if (group.matches.length === 0) {
		return <p>No fixtures yet, play groups first</p>
	}
	return <>{showTable && <div>slide down for fixtures</div>}<table className={`my-5 bg-stone-300 border-seperate border border-slate-500 `}>
		<thead>
			<tr>
				<th className="border border-slate-600">ID</th>
				<th className="border border-slate-600 w-44">Home</th>
				<th className="border border-slate-600 w-16">MS</th>
				<th className="border border-slate-600 w-44">Away</th>
			</tr>
		</thead>
		<tbody>
			{group.matches.map((match, index) => (
				<tr key={index}>
					<td className="border border-slate-600">{index}</td>
					<td className="border border-slate-600">{match.home.name}</td>
					<td className="border border-slate-600">
						{match.homeGoals} - {match.awayGoals}
					</td>
					<td className="border border-slate-600">{match.away.name}</td>
				</tr>
			))}
		</tbody>
	</table></>
}

export default Fixtures