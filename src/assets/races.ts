const liveRace = {
  title: 'Tour of Rwanda',
  stage: 'Stage 3',
  imageUrl:
    'https://angliru-production.imgix.net/6d016387-a2d1-4679-b066-660c59e3d4e4?w=320&auto=format',
};

const race = {
  title: 'Tour of Rwanda',
  stage: 'Stage 2',
  imageUrl:
    'https://angliru-production.imgix.net/6d016387-a2d1-4679-b066-660c59e3d4e4?w=320&auto=format',
  date: '04/04/2021',
  results: [
    { name: 'Alan Boileau', team: 'B&B Hotels p/b KTM' },
    { name: 'Carlos Quintero', team: 'Terengganu Cycling Team' },
    { name: 'James Piccoli', team: 'Israel Start-Up Nation' },
  ],
};

function makeRace(
  title: string,
  stage: string,
  date: string,
  imageUrl: string
): typeof race {
  return {
    ...race,
    title,
    stage,
    date,
    imageUrl,
  };
}

const races = {
  live: [liveRace],
  replays: [
    makeRace(
      'Tour of Rwanda',
      'Stage 2',
      '05/04/2021',
      'https://angliru-production.imgix.net/6d016387-a2d1-4679-b066-660c59e3d4e4?w=320&auto=format'
    ),
    makeRace(
      'Tour of Rwanda',
      'Stage 1',
      '05/03/2021',
      'https://angliru-production.imgix.net/6d016387-a2d1-4679-b066-660c59e3d4e4?w=320&auto=format'
    ),
    makeRace(
      'Tour de Romandie',
      'Stage 5',
      '05/02/2021',
      'https://angliru-production.imgix.net/6cb98157-4754-4152-b866-498b3ef78643?w=320&auto=format'
    ),
    makeRace(
      'Tour de Romandie',
      'Stage 4',
      '05/01/2021',
      'https://angliru-production.imgix.net/6cb98157-4754-4152-b866-498b3ef78643?w=320&auto=format'
    ),
    makeRace(
      'Tour de Romandie',
      'Stage 3',
      '04/30/2021',
      'https://angliru-production.imgix.net/6cb98157-4754-4152-b866-498b3ef78643?w=320&auto=format'
    ),
    makeRace(
      'Tour de Romandie',
      'Stage 2',
      '04/29/2021',
      'https://angliru-production.imgix.net/6cb98157-4754-4152-b866-498b3ef78643?w=320&auto=format'
    ),
    makeRace(
      'Tour de Romandie',
      'Stage 1',
      '04/28/2021',
      'https://angliru-production.imgix.net/6cb98157-4754-4152-b866-498b3ef78643?w=320&auto=format'
    ),
  ],
};

export default races;
