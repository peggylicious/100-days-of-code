export const FIELD_ZONES = [

  {
    id: 1,
    name: 'goal-area',
    coordinates: { x1: 0, y1: 36.53, x2: 5.24, y2: 63.47 },
    labels: { home: 'Goal Area', away: 'Striking Area' }
  },
  // Striking Area (Away)
  {
    id: 2,
    name: 'striking-area',
    coordinates: { x1: 94.76, y1: 36.53, x2: 100, y2: 63.47 },
    labels: { home: 'Striking Area', away: 'Goal Area' }
  },
  // Penalty Box (Home - Top Section) - Unchanged
  {
    id: 3,
    name: 'left-central-defence',
    coordinates: { x1: 0, y1: 20.44, x2: 15.71, y2: 36.53 },
    labels: { home: 'Left central defence', away: 'Attacking Penalty Box' }
  },
  // Penalty Box (Home - Bottom Section) - Unchanged
  {
    id: 4,
    name: 'right-central-defence',
    coordinates: { x1: 0, y1: 63.47, x2: 15.71, y2: 79.56 },
    labels: { home: 'Right central defence', away: 'Attacking Penalty Box' }
  },
  // Penalty Box (Home - Central Section) - NEW
  {
    id: 5,
    name: 'central-defence',
    coordinates: { x1: 5.24, y1: 36.53, x2: 15.71, y2: 63.47 },
    // coordinates: { x1: 5.24, y1: 20.44, x2: 15.71, y2: 79.56 },
    labels: { home: 'Central defence', away: 'Attacking Penalty Box' }
  },
  // Attacking Penalty Box (Away - Top Section) - Unchanged
  {
    id: 6,
    name: 'left-attack',
    coordinates: { x1: 84.29, y1: 20.44, x2: 100, y2: 36.53 },
    labels: { home: 'Attacking Penalty Box', away: 'Penalty Box' }
  },
  // Attacking Penalty Box (Away - Bottom Section) - Unchanged
  {
    id: 7,
    name: 'right-attack',
    coordinates: { x1: 84.29, y1: 63.47, x2: 100, y2: 79.56 },
    labels: { home: 'Attacking Penalty Box', away: 'Penalty Box' }
  },
  // Attacking Penalty Box (Away - Central Section) - NEW
  {
    id: 8,
    name: 'central-attack',
    coordinates: { x1: 84.29, y1: 36.53, x2: 94.76, y2: 63.47 },
    labels: { home: 'Attacking Penalty Box', away: 'Penalty Box' }
  },
  // Backs / R-L Mid-field
  {
    id: 9,
    name: 'right-back',
    coordinates: { x1: 0, y1: 79.56, x2: 33.33, y2: 100 },
    labels: { home: 'Right-Back Zone', away: 'Left-Winger Zone' }
  },
  {
    id: 10,
    name: 'right-midfield',
    coordinates: { x1: 33.33, y1: 79.56, x2: 66.67, y2: 100 },
    labels: { home: 'Right-Midfielder Zone', away: 'Left-Midfielder Zone' }
  },
  {
    id: 11,
    name: 'left-back',
    coordinates: { x1: 0, y1: 0, x2: 33.33, y2: 20.44 },
    labels: { home: 'Left-Back Zone', away: 'Right-Winger Zone' }
  },
  {
    id: 12,
    name: 'left-midfield',
    coordinates: { x1: 33.33, y1: 0, x2: 66.67, y2: 20.44 },
    labels: { home: 'Left-Midfielder Zone', away: 'Right-Midfielder Zone' }
  },

  // Defensive Midfielder Zone (Defensive Third)
  {
    id: 13,
    name: 'defensive-midfield',
    // coordinates: { x1: 0, y1: 20.44, x2: 33.33, y2: 79.56 },
    coordinates: { x1: 15.71, y1: 20.44, x2: 33.33, y2: 79.56 },
    labels: { home: 'Defensive Midfielder Zone', away: 'Attacking Midfielder Zone' }
  },
  // Central Midfielder Zone (First half of Middle Third)
  {
    id: 14,
    name: 'central-midfield',
    coordinates: { x1: 33.33, y1: 20.44, x2: 50, y2: 79.56 },
    labels: { home: 'Central Midfielder Zone', away: 'Central Midfielder Zone' }
  },
  // Central Attack Midfield Zone (Second half of Middle Third)
  {
    id: 15,
    name: 'central-attack-midfield',
    coordinates: { x1: 50, y1: 20.44, x2: 66.67, y2: 79.56 },
    labels: { home: 'Central Attack Midfield Zone', away: 'Central Attack Midfield Zone' }
  },
  // Attack Midfield Zone (Attacking Third)
  {
    id: 16,
    name: 'attack-mid-field',
    coordinates: { x1: 66.67, y1: 20.44, x2: 84.28, y2: 79.56 },
    labels: { home: 'Attack Midfield Zone', away: 'Defensive Midfielder Zone' }
  },

  //   Wings
  {
    id: 17,
    name: 'right-wing',
    coordinates: { x1: 66.67, y1: 79.56, x2: 100, y2: 100 },
    labels: { home: 'Right Wing Zone', away: 'Left Back Zone' }
  },
  {
    id: 18,
    name: 'left-wing',
    coordinates: { x1: 66.67, y1: 0, x2: 100, y2: 20.44 },
    labels: { home: 'Left Wing Zone', away: 'Right Back Zone' }
  }
]



// export const FIELD_ZONES = [
//   // {
//   //   "id": 1,
//   //   "name": "goal-area",
//   //   "coordinates": { "x1": 0.00, "y1": 36.53, "x2": 5.24, "y2": 63.47 },
//   //   "labels": { "home": "Goal Area", "away": "Striking Area" },
//   //   "group": "Goal/Striking"
//   // },
//   // {
//   //   "id": 2,
//   //   "name": "striking-area",
//   //   "coordinates": { "x1": 94.76, "y1": 36.53, "x2": 100.00, "y2": 63.47 },
//   //   "labels": { "home": "Striking Area", "away": "Goal Area" },
//   //   "group": "Goal/Striking"
//   // },
//   // {
//   //   "id": 3,
//   //   "name": "left-central-defence",
//   //   "coordinates": { "x1": 0.00, "y1": 20.44, "x2": 15.71, "y2": 36.53 },
//   //   "labels": { "home": "Left central defence", "away": "Attacking Penalty Box" },
//   //   "group": "Penalty Box"
//   // },
//   // {
//   //   "id": 4,
//   //   "name": "right-central-defence",
//   //   "coordinates": { "x1": 0.00, "y1": 63.47, "x2": 15.71, "y2": 79.56 },
//   //   "labels": { "home": "Right central defence", "away": "Attacking Penalty Box" },
//   //   "group": "Penalty Box"
//   // },
//   // {
//   //   "id": 5,
//   //   "name": "central-defence",
//   //   "coordinates": { "x1": 5.24, "y1": 20.44, "x2": 15.71, "y2": 79.56 },
//   //   "labels": { "home": "Central defence", "away": "Attacking Penalty Box" },
//   //   "group": "Penalty Box"
//   // },
//   // {
//   //   "id": 6,
//   //   "name": "left-attack",
//   //   "coordinates": { "x1": 84.29, "y1": 20.44, "x2": 100.00, "y2": 36.53 },
//   //   "labels": { "home": "Attacking Penalty Box", "away": "Penalty Box" },
//   //   "group": "Penalty Box"
//   // },
//   // {
//   //   "id": 7,
//   //   "name": "right-attack",
//   //   "coordinates": { "x1": 84.29, "y1": 63.47, "x2": 100.00, "y2": 79.56 },
//   //   "labels": { "home": "Attacking Penalty Box", "away": "Penalty Box" },
//   //   "group": "Penalty Box"
//   // },
//   // {
//   //   "id": 8,
//   //   "name": "central-attack",
//   //   "coordinates": { "x1": 84.29, "y1": 20.44, "x2": 94.76, "y2": 79.56 },
//   //   "labels": { "home": "Attacking Penalty Box", "away": "Penalty Box" },
//   //   "group": "Penalty Box"
//   // },
//   // {
//   //   "id": 9,
//   //   "name": "right-back",
//   //   "coordinates": { "x1": 0.00, "y1": 79.56, "x2": 33.33, "y2": 100.00 },
//   //   "labels": { "home": "Right-Back Zone", "away": "Left-Winger Zone" },
//   //   "group": "Defensive Wide"
//   // },
//   // {
//   //   "id": 10,
//   //   "name": "right-midfield",
//   //   "coordinates": { "x1": 33.33, "y1": 79.56, "x2": 66.67, "y2": 100.00 },
//   //   "labels": { "home": "Right-Midfielder Zone", "away": "Left-Midfielder Zone" },
//   //   "group": "Midfield Wide"
//   // },
//   // {
//   //   "id": 11,
//   //   "name": "left-back",
//   //   "coordinates": { "x1": 0.00, "y1": 0.00, "x2": 33.33, "y2": 20.44 },
//   //   "labels": { "home": "Left-Back Zone", "away": "Right-Winger Zone" },
//   //   "group": "Defensive Wide"
//   // },
//   // {
//   //   "id": 12,
//   //   "name": "left-midfield",
//   //   "coordinates": { "x1": 33.33, "y1": 0.00, "x2": 66.67, "y2": 20.44 },
//   //   "labels": { "home": "Left-Midfielder Zone", "away": "Right-Midfielder Zone" },
//   //   "group": "Midfield Wide"
//   // },
//   // {
//   //   "id": 13,
//   //   "name": "defensive-midfield",
//   //   "coordinates": { "x1": 0.00, "y1": 20.44, "x2": 33.33, "y2": 79.56 },
//   //   "labels": { "home": "Defensive Midfielder Zone", "away": "Attacking Midfielder Zone" },
//   //   "group": "Central Thirds"
//   // },
//   // {
//   //   "id": 14,
//   //   "name": "central-midfield",
//   //   "coordinates": { "x1": 33.33, "y1": 20.44, "x2": 50.00, "y2": 79.56 },
//   //   "labels": { "home": "Central Midfielder Zone", "away": "Central Midfielder Zone" },
//   //   "group": "Central Thirds"
//   // },
//   // {
//   //   "id": 15,
//   //   "name": "central-attack-midfield",
//   //   "coordinates": { "x1": 50.00, "y1": 20.44, "x2": 66.67, "y2": 79.56 },
//   //   "labels": { "home": "Central Attack Midfield Zone", "away": "Central Attack Midfield Zone" },
//   //   "group": "Central Thirds"
//   // },
//   // {
//   //   "id": 16,
//   //   "name": "attack-mid-field",
//   //   "coordinates": { "x1": 66.67, "y1": 20.44, "x2": 100.00, "y2": 79.56 },
//   //   "labels": { "home": "Attack Midfield Zone", "away": "Defensive Midfielder Zone" },
//   //   "group": "Central Thirds"
//   // },
//   // {
//   //   "id": 17,
//   //   "name": "right-wing",
//   //   "coordinates": { "x1": 66.67, "y1": 79.56, "x2": 100.00, "y2": 100.00 },
//   //   "labels": { "home": "Right Wing Zone", "away": "Left Back Zone" },
//   //   "group": "Attacking Wide"
//   // },
//   // {
//   //   "id": 18,
//   //   "name": "left-wing",
//   //   "coordinates": { "x1": 66.67, "y1": 0.00, "x2": 100.00, "y2": 20.44 },
//   //   "labels": { "home": "Left Wing Zone", "away": "Right Back Zone" },
//   //   "group": "Attacking Wide"
//   // },
//   // // --- NEW ZONES (19-22) ---
//   // {
//   //   "id": 19,
//   //   "name": "left-half-space",
//   //   "coordinates": { "x1": 0.00, "y1": 20.44, "x2": 100.00, "y2": 40.14 },
//   //   "labels": { "home": "Left Half Space", "away": "Right Half Space" },
//   //   "group": "Cross-Field Strip"
//   // },
//   // {
//   //   "id": 20,
//   //   "name": "right-half-space",
//   //   "coordinates": { "x1": 0.00, "y1": 59.86, "x2": 100.00, "y2": 79.56 },
//   //   "labels": { "home": "Right Half Space", "away": "Left Half Space" },
//   //   "group": "Cross-Field Strip"
//   // },
//   // {
//   //   "id": 21,
//   //   "name": "defensive-d-zone",
//   //   "coordinates": { "x1": 15.71, "y1": 20.44, "x2": 25.00, "y2": 79.56 },
//   //   "labels": { "home": "Defensive D Zone", "away": "Attacking D Zone" },
//   //   "group": "Distance from Goal"
//   // },
//   // {
//   //   "id": 22,
//   //   "name": "attacking-d-zone",
//   //   "coordinates": { "x1": 75.00, "y1": 20.44, "x2": 84.29, "y2": 79.56 },
//   //   "labels": { "home": "Attacking D Zone", "away": "Defensive D Zone" },
//   //   "group": "Distance from Goal"
//   // }
//
//
//
//   // old
//
//   {
//     id: 1,
//     name: 'goal-area',
//     coordinates: { x1: 0, y1: 36.53, x2: 5.24, y2: 63.47 },
//     labels: { home: 'Goal Area', away: 'Striking Area' }
//   },
//   // Striking Area (Away)
//   {
//     id: 2,
//     name: 'striking-area',
//     coordinates: { x1: 94.76, y1: 36.53, x2: 100, y2: 63.47 },
//     labels: { home: 'Striking Area', away: 'Goal Area' }
//   },
//   // Penalty Box (Home - Top Section) - Unchanged
//   {
//     id: 3,
//     name: 'left-central-defence',
//     coordinates: { x1: 0, y1: 20.44, x2: 15.71, y2: 36.53 },
//     labels: { home: 'Left central defence', away: 'Attacking Penalty Box' }
//   },
//   // Penalty Box (Home - Bottom Section) - Unchanged
//   {
//     id: 4,
//     name: 'right-central-defence',
//     coordinates: { x1: 0, y1: 63.47, x2: 15.71, y2: 79.56 },
//     labels: { home: 'Right central defence', away: 'Attacking Penalty Box' }
//   },
//   // Penalty Box (Home - Central Section) - NEW
//   {
//     id: 5,
//     name: 'central-defence',
//     coordinates: { x1: 5.24, y1: 36.53, x2: 15.71, y2: 63.47 },
//     // coordinates: { x1: 5.24, y1: 20.44, x2: 15.71, y2: 79.56 },
//     labels: { home: 'Central defence', away: 'Attacking Penalty Box' }
//   },
//   // Attacking Penalty Box (Away - Top Section) - Unchanged
//   {
//     id: 6,
//     name: 'left-attack',
//     coordinates: { x1: 84.29, y1: 20.44, x2: 100, y2: 36.53 },
//     labels: { home: 'Attacking Penalty Box', away: 'Penalty Box' }
//   },
//   // Attacking Penalty Box (Away - Bottom Section) - Unchanged
//   {
//     id: 7,
//     name: 'right-attack',
//     coordinates: { x1: 84.29, y1: 63.47, x2: 100, y2: 79.56 },
//     labels: { home: 'Attacking Penalty Box', away: 'Penalty Box' }
//   },
//   // Attacking Penalty Box (Away - Central Section) - NEW
//   {
//     id: 8,
//     name: 'central-attack',
//     coordinates: { x1: 84.29, y1: 36.53, x2: 94.76, y2: 63.47 },
//     labels: { home: 'Attacking Penalty Box', away: 'Penalty Box' }
//   },
//   // Backs / R-L Mid-field
//   {
//     id: 9,
//     name: 'right-back',
//     coordinates: { x1: 0, y1: 79.56, x2: 33.33, y2: 100 },
//     labels: { home: 'Right-Back Zone', away: 'Left-Winger Zone' }
//   },
//   {
//     id: 10,
//     name: 'right-midfield',
//     coordinates: { x1: 33.33, y1: 79.56, x2: 66.67, y2: 100 },
//     labels: { home: 'Right-Midfielder Zone', away: 'Left-Midfielder Zone' }
//   },
//   {
//     id: 11,
//     name: 'left-back',
//     coordinates: { x1: 0, y1: 0, x2: 33.33, y2: 20.44 },
//     labels: { home: 'Left-Back Zone', away: 'Right-Winger Zone' }
//   },
//   {
//     id: 12,
//     name: 'left-midfield',
//     coordinates: { x1: 33.33, y1: 0, x2: 66.67, y2: 20.44 },
//     labels: { home: 'Left-Midfielder Zone', away: 'Right-Midfielder Zone' }
//   },
//
//   // Defensive Midfielder Zone (Defensive Third)
//   {
//     id: 13,
//     name: 'defensive-midfield',
//     // coordinates: { x1: 0, y1: 20.44, x2: 33.33, y2: 79.56 },
//     coordinates: { x1: 15.71, y1: 20.44, x2: 33.33, y2: 79.56 },
//     labels: { home: 'Defensive Midfielder Zone', away: 'Attacking Midfielder Zone' }
//   },
//   // Central Midfielder Zone (First half of Middle Third)
//   {
//     id: 14,
//     name: 'central-midfield',
//     coordinates: { x1: 33.33, y1: 20.44, x2: 50, y2: 79.56 },
//     labels: { home: 'Central Midfielder Zone', away: 'Central Midfielder Zone' }
//   },
//   // Central Attack Midfield Zone (Second half of Middle Third)
//   {
//     id: 15,
//     name: 'central-attack-midfield',
//     coordinates: { x1: 50, y1: 20.44, x2: 66.67, y2: 79.56 },
//     labels: { home: 'Central Attack Midfield Zone', away: 'Central Attack Midfield Zone' }
//   },
//   // Attack Midfield Zone (Attacking Third)
//   {
//     id: 16,
//     name: 'attack-mid-field',
//     coordinates: { x1: 66.67, y1: 20.44, x2: 84.28, y2: 79.56 },
//     labels: { home: 'Attack Midfield Zone', away: 'Defensive Midfielder Zone' }
//   },
//
//   //   Wings
//   {
//     id: 17,
//     name: 'right-wing',
//     coordinates: { x1: 66.67, y1: 79.56, x2: 100, y2: 100 },
//     labels: { home: 'Right Wing Zone', away: 'Left Back Zone' }
//   },
//   {
//     id: 18,
//     name: 'left-wing',
//     coordinates: { x1: 66.67, y1: 0, x2: 100, y2: 20.44 },
//     labels: { home: 'Left Wing Zone', away: 'Right Back Zone' }
//   }
//

export const  swapedCoords = FIELD_ZONES.map(zone => {
  const {x1, x2, y1, y2} = zone.coordinates
  return {
    ...zone,
    coordinates: {
      x1: 100 - x2,
      y1: 100 - y2,
      x2: 100 - x1,
      y2: 100 - y1
    }
  }
})
console.log(swapedCoords)
