const groups = [
	{ id: 1, name: 'A', teams: [], matches: [] },
	{ id: 2, name: 'B', teams: [], matches: [] },
	{ id: 3, name: 'C', teams: [], matches: [] },
	{ id: 4, name: 'D', teams: [], matches: [] },
	{ id: 5, name: 'E', teams: [], matches: [] },
	{ id: 6, name: 'F', teams: [], matches: [] },
	{ id: 7, name: 'G', teams: [], matches: [] },
	{ id: 8, name: 'H', teams: [], matches: [] },
	{ id: 9, name: "Last 16", teams: [], matches: [] },
	{ id: 10, name: "Quarter-finals", teams: [], matches: [] },
	{ id: 11, name: "Semi-finals", teams: [], matches: [] },
	{ id: 12, name: "Final", teams: [], matches: [] },
];

const teams = [
	{
		id: 1, name: 'Qatar', group: 'A', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 2, name: 'Ecuador', group: 'A', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 3, name: 'Senegal', group: 'A', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 4, name: 'The Netherlands', group: 'A', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 5, name: 'England', group: 'B', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 6, name: 'IR Iran', group: 'B', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 7, name: 'USA', group: 'B', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 8, name: 'Wales', group: 'B', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 9, name: 'Argentina', group: 'C', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 10, name: 'Saudi Arabia', group: 'C', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 11, name: 'Mexico', group: 'C', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 12, name: 'Poland', group: 'C', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 13, name: 'France', group: 'D', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 14, name: 'Australia', group: 'D', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 15, name: 'Denmark', group: 'D', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 16, name: 'Tunisia', group: 'D', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 17, name: 'Spain', group: 'E', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 18, name: 'Costa Rica', group: 'E', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 19, name: 'Germany', group: 'E', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 20, name: 'Japan', group: 'E', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 21, name: 'Belgium', group: 'F', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 22, name: 'Canada', group: 'F', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 23, name: 'Morocco', group: 'F', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 24, name: 'Croatia', group: 'F', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 25, name: 'Brazil', group: 'G', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 26, name: 'Serbia', group: 'G', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 27, name: 'Switzerland', group: 'G', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 28, name: 'Cameroon', group: 'G', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 29, name: 'Portugal', group: 'H', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 30, name: 'Ghana', group: 'H', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 31, name: 'Uruguay', group: 'H', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},
	{
		id: 32, name: 'Korea Republic', group: 'H', stats: {
			played: 0,
			wins: 0,
			draws: 0,
			losses: 0,
			goalsFor: 0,
			goalsAgainst: 0,
			goalDifference: 0,
			points: 0,
		}
	},

];

teams.forEach(team => {
	const group = groups.find(group => group.name === team.group)
	group.teams.push(team)
});


groups.forEach(group => {
	const matches = [];
	for (let i = 0; i < group.teams.length; i++) {
		for (let j = i + 1; j < group.teams.length; j++) {
			matches.push({
				home: group.teams[i],
				away: group.teams[j],
				homeGoals: null,
				awayGoals: null,
				played: false,
				winner: null,
			});
		}
	}
	group.matches = matches;
});

const updateStats = async () => {
	groups.forEach(group => {
		group.teams.forEach(team => {
			team.stats.played = 0;
			team.stats.wins = 0;
			team.stats.draws = 0;
			team.stats.losses = 0;
			team.stats.goalsFor = 0;
			team.stats.goalsAgainst = 0;
			team.stats.goalDifference = 0;
			team.stats.points = 0;
		});
		group.matches.forEach(match => {
			if (match.played) {
				match.home.stats.played++;
				match.away.stats.played++;
				match.home.stats.goalsFor += match.homeGoals;
				match.away.stats.goalsFor += match.awayGoals;
				match.home.stats.goalsAgainst += match.awayGoals;
				match.away.stats.goalsAgainst += match.homeGoals;
				match.home.stats.goalDifference = match.home.stats.goalsFor - match.home.stats.goalsAgainst;
				match.away.stats.goalDifference = match.away.stats.goalsFor - match.away.stats.goalsAgainst;
				if (match.winner === match.home) {
					match.home.stats.wins++;
					match.away.stats.losses++;
					match.home.stats.points += 3;
				} else if (match.winner === match.away) {
					match.home.stats.losses++;
					match.away.stats.wins++;
					match.away.stats.points += 3;
				} else {
					match.home.stats.draws++;
					match.away.stats.draws++;
					match.home.stats.points++;
					match.away.stats.points++;
				}
			}
		});
	});
}

const sortTeams = async () => {
	groups.forEach(group => {
		group.teams.sort((a, b) => {
			if (a.stats.points > b.stats.points) {
				return -1;
			} else if (a.stats.points < b.stats.points) {
				return 1;
			} else {
				if (a.stats.goalDifference > b.stats.goalDifference) {
					return -1;
				} else if (a.stats.goalDifference < b.stats.goalDifference) {
					return 1;
				} else {
					if (a.stats.goalsFor > b.stats.goalsFor) {
						return -1;
					} else if (a.stats.goalsFor < b.stats.goalsFor) {
						return 1;
					} else {
						return 0;
					}
				}
			}
		});
	});
}

const getGroupWinners = async () => {
	const winners = [];
	for (let i = 0; i < 8; i++) {
		const group = groups[i];
		const winner = group.teams[0];
		const second = group.teams[1];
		winners.push(winner);
		winners.push(second);
	}
	return winners;
}

const getKnockoutMatches = async () => {
	groups[8].teams = await getGroupWinners();
	const matches = [];
	for (let i = 0; i < groups[8].teams.length / 2; i++) {
		matches.push({
			home: groups[8].teams[i],
			away: groups[8].teams[groups[8].teams.length - i - 1],
			homeGoals: null,
			awayGoals: null,
			played: false,
			winner: null,
		});
	}
	groups[8].matches = matches;
	groups[8].matches.forEach(match => {
		match.homeGoals = Math.floor(Math.random() * 5);
		match.awayGoals = Math.floor(Math.random() * 5);
		match.played = true;
		if (match.homeGoals > match.awayGoals) {
			match.winner = match.home;
		} else if (match.homeGoals < match.awayGoals) {
			match.winner = match.away;
		} else {
			match.homeGoals += Math.floor(Math.random() * 3);
			match.awayGoals += Math.floor(Math.random() * 3);
			if (match.homeGoals > match.awayGoals) {
				match.winner = match.home;
			} else if (match.homeGoals < match.awayGoals) {
				match.winner = match.away;
			} else {
				match.homeGoals += Math.floor(Math.random() * 3);
				match.awayGoals += Math.floor(Math.random() * 3);
				if (match.homeGoals > match.awayGoals) {
					match.winner = match.home;
				} else if (match.homeGoals < match.awayGoals) {
					match.winner = match.away;
				} else {
					match.winner = match.home;
				}
			}
		}
	});
	return groups[8].matches.map(match => match.winner);
}


const getQuarterFinalMatches = async () => {
	groups[9].teams = await getKnockoutMatches();

	const matches = [];
	for (let i = 0; i < groups[9].teams.length / 2; i++) {
		matches.push({
			home: groups[9].teams[i],
			away: groups[9].teams[groups[9].teams.length - i - 1],
			homeGoals: null,
			awayGoals: null,
			played: false,
			winner: null,
		});
	}
	groups[9].matches = matches;
	groups[9].matches.forEach(match => {
		match.homeGoals = Math.floor(Math.random() * 5);
		match.awayGoals = Math.floor(Math.random() * 5);
		match.played = true;
		if (match.homeGoals > match.awayGoals) {
			match.winner = match.home;
		} else if (match.homeGoals < match.awayGoals) {
			match.winner = match.away;
		} else {
			match.homeGoals += Math.floor(Math.random() * 3);
			match.awayGoals += Math.floor(Math.random() * 3);
			if (match.homeGoals > match.awayGoals) {
				match.winner = match.home;
			} else if (match.homeGoals < match.awayGoals) {
				match.winner = match.away;
			} else {
				match.homeGoals += Math.floor(Math.random() * 3);
				match.awayGoals += Math.floor(Math.random() * 3);
				if (match.homeGoals > match.awayGoals) {
					match.winner = match.home;
				} else if (match.homeGoals < match.awayGoals) {
					match.winner = match.away;
				} else {
					match.winner = match.home;
				}
			}
		}
	});
	return groups[9].matches.map(match => match.winner);
}

const getSemiFinalMatches = async () => {
	groups[10].teams = await getQuarterFinalMatches();

	const matches = [];
	for (let i = 0; i < groups[10].teams.length / 2; i++) {
		matches.push({
			home: groups[10].teams[i],
			away: groups[10].teams[groups[10].teams.length - i - 1],
			homeGoals: null,
			awayGoals: null,
			played: false,
			winner: null,
		});
	}
	groups[10].matches = matches;
	groups[10].matches.forEach(match => {
		match.homeGoals = Math.floor(Math.random() * 5);
		match.awayGoals = Math.floor(Math.random() * 5);
		match.played = true;
		if (match.homeGoals > match.awayGoals) {
			match.winner = match.home;
		} else if (match.homeGoals < match.awayGoals) {
			match.winner = match.away;
		} else {
			match.homeGoals += Math.floor(Math.random() * 3);
			match.awayGoals += Math.floor(Math.random() * 3);
			if (match.homeGoals > match.awayGoals) {
				match.winner = match.home;
			} else if (match.homeGoals < match.awayGoals) {
				match.winner = match.away;
			} else {
				match.homeGoals += Math.floor(Math.random() * 3);
				match.awayGoals += Math.floor(Math.random() * 3);
				if (match.homeGoals > match.awayGoals) {
					match.winner = match.home;
				} else if (match.homeGoals < match.awayGoals) {
					match.winner = match.away;
				} else {
					match.winner = match.home;
				}
			}
		}
	});
	return groups[10].matches.map(match => match.winner);
}

const getFinalMatch = async () => {
	groups[11].teams = await getSemiFinalMatches();

	const matches = [];
	for (let i = 0; i < groups[11].teams.length / 2; i++) {
		matches.push({
			home: groups[11].teams[i],
			away: groups[11].teams[groups[11].teams.length - i - 1],
			homeGoals: null,
			awayGoals: null,
			played: false,
			winner: null,
		});

	}
	groups[11].matches = matches;
	groups[11].matches.forEach(match => {
		match.homeGoals = Math.floor(Math.random() * 5);
		match.awayGoals = Math.floor(Math.random() * 5);
		match.played = true;
		if (match.homeGoals > match.awayGoals) {
			match.winner = match.home;
		} else if (match.homeGoals < match.awayGoals) {
			match.winner = match.away;
		} else {
			match.homeGoals += Math.floor(Math.random() * 3);
			match.awayGoals += Math.floor(Math.random() * 3);
			if (match.homeGoals > match.awayGoals) {
				match.winner = match.home;
			} else if (match.homeGoals < match.awayGoals) {
				match.winner = match.away;
			} else {
				match.homeGoals += Math.floor(Math.random() * 3);
				match.awayGoals += Math.floor(Math.random() * 3);
				if (match.homeGoals > match.awayGoals) {
					match.winner = match.home;
				} else if (match.homeGoals < match.awayGoals) {
					match.winner = match.away;
				} else {
					match.winner = match.home;
				}
			}
		}
	});
	return groups[11].matches.map(match => match.winner);
}

const playMatches = async () => {
	groups.forEach(group => {
		group.matches.forEach(match => {
			if (!match.played) {
				match.homeGoals = Math.floor(Math.random() * 5);
				match.awayGoals = Math.floor(Math.random() * 5);
				match.played = true;
				if (match.homeGoals > match.awayGoals) {
					match.winner = match.home;
				} else if (match.homeGoals < match.awayGoals) {
					match.winner = match.away;
				} else {
					match.winner = 'draw';
				}
			}
		});
	});
	await updateStats();
	await sortTeams();
}

const resetAll = async () => {
	groups.forEach(group => {
		group.matches.forEach(match => {
			match.homeGoals = null;
			match.awayGoals = null;
			match.played = false;
			match.winner = null;
		});
	});
	groups.slice(8).forEach(group => {
		group.matches = [];
		group.teams = [];
	});
	await updateStats();
	await sortTeams();
}

export {
	groups,
	teams,
	playMatches,
	getFinalMatch,
	resetAll
};