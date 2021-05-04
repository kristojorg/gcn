const race = {
  title: 'Tour of Rwanda Stage 2',
  date: '04/05',
  results: [
    { name: 'Alan Boileau', team: 'B&B Hotels p/b KTM' },
    { name: 'Carlos Quintero', team: 'Terengganu Cycling Team' },
    { name: 'James Piccoli', team: 'Israel Start-Up Nation' },
  ],
};

function makeRace(title: String, date: string): typeof race {
  return {
    ...race,
    title,
    date,
  };
}

const races = [
  makeRace('Tour of Rwanda Stage 1', '03/05'),
  makeRace('Tour de Romandie Stage 5', '02/05'),
  makeRace('Tour de Romandie Stage 4', '01/05'),
  makeRace('Tour de Romandie Stage 3', '30/04'),
  makeRace('Tour de Romandie Stage 2', '29/05'),
  makeRace('Tour de Romandie Stage 1', '28/05'),
];

export default races;
