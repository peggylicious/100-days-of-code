export const outcomeCommentaryLibrary: Record<string, Record<string, string[]>> = { //This config was done by AI
  // --- ATTACKING ---
  pass: {
    successful: [
      "{{player}} finds his man perfectly in the {{area}}.",
      "Clinical distribution from {{player}}.",
      "{{player}} keeps the play moving through the {{area}}.",
      "Pinpoint pass by {{player}}.",
      "{{player}} threads it through the {{area}} with ease."
    ],
    unsuccessful: [
      "{{player}}'s pass is cut out in the {{area}}.",
      "Poor delivery from {{player}} there.",
      "{{player}} tries the long ball but it’s over-hit.",
      "Lack of precision from {{player}} in the {{area}}.",
      "Pass intercepted! {{player}} couldn't find the gap."
    ]
  },
  shot: {
    goal: [
      "GOAL! {{player}} strikes gold from the {{area}}!",
      "UNSTOPPABLE! {{player}} finds the back of the net!",
      "{{player}} buries it! Pure class from the {{area}}.",
      "Clinical finish! {{player}} puts it home.",
      "{{player}} fires it in! The keeper had no chance."
    ],
    saved: [
      "Great save! {{player}} denied from the {{area}}.",
      "{{player}} tests the keeper, but it's parried away.",
      "Denied! A brilliant stop to keep {{player}} out.",
      "The keeper wins that battle against {{player}}.",
      "{{player}} hits it well, but the keeper is equal to it."
    ],
    missed_wide: [
      "Wide! {{player}} couldn't keep that on target.",
      "{{player}} drags the shot just past the post.",
      "So close! {{player}} misses the target from {{area}}.",
      "{{player}} swings at it, but it's well wide.",
      "Frustration for {{player}} as the shot sails off-target."
    ],
    unsuccessful: [
      "Blocked! {{player}}'s effort doesn't get through.",
      "{{player}} scuffs the shot in the {{area}}.",
      "Messy attempt from {{player}}.",
      "The defense swarms {{player}} to prevent the shot.",
      "{{player}} loses his footing—shot blocked."
    ]
  },
  key_pass: {
    successful: [
      "What a ball! {{player}} carves them open in the {{area}}.",
      "{{player}} provides a killer pass!",
      "Visionary play from {{player}} to create that chance.",
      "{{player}} unlocks the defense from the {{area}}.",
      "That's a defense-splitting pass by {{player}}!"
    ],
    unsuccessful: [
      "{{player}} tries the spectacular ball but it's cut out.",
      "The vision was there, but {{player}}'s pass is blocked.",
      "Close! {{player}} almost threads the needle.",
      "{{player}}'s creative spark is snuffed out by the defense.",
      "The final ball from {{player}} just isn't there."
    ]
  },
  cross: {
    successful: [
      "{{player}} whips a dangerous ball into the {{area}}.",
      "Great delivery! {{player}} finds a target.",
      "{{player}} puts it on a plate from the wing.",
      "Quality cross from {{player}} in the {{area}}.",
      "{{player}} drills it in—a perfect delivery!"
    ],
    unsuccessful: [
      "{{player}}'s cross is over-hit and goes out.",
      "First man hit! {{player}} fails to clear the defender.",
      "The keeper gathers {{player}}'s cross with ease.",
      "{{player}}'s delivery lacks the necessary curve.",
      "No one on the end of {{player}}'s cross."
    ]
  },
  dribble: {
    successful: [
      "{{player}} dances past his man in the {{area}}!",
      "Lovely footwork from {{player}} to beat the marker.",
      "{{player}} is taking them on! Great run.",
      "Pure skill! {{player}} leaves the defender behind.",
      "{{player}} drives forward with the ball at his feet."
    ],
    unsuccessful: [
      "{{player}} is tackled mid-dribble in the {{area}}.",
      "The defender reads {{player}}'s movement perfectly.",
      "{{player}} overruns the ball and loses it.",
      "Nowhere to go for {{player}}—dispossessed.",
      "{{player}} tried one trick too many there."
    ]
  },
  prog_run: {
    successful: [
      "{{player}} is eating up the ground in the {{area}}!",
      "Dynamic run by {{player}}, driving the team forward.",
      "{{player}} breaks the lines with a powerful burst.",
      "Strong progressive carry there by {{player}}.",
      "{{player}} surges into space in the {{area}}."
    ],
    unsuccessful: [
      "{{player}}'s run is halted by a solid defense.",
      "{{player}} is forced wide and loses momentum.",
      "The defense closes the gap on {{player}}'s run.",
      "{{player}} runs into a dead end in the {{area}}.",
      "{{player}}'s driving run is snuffed out."
    ]
  },
  box_entry: {
    successful: [
      "{{player}} penetrates the box! Danger here...",
      "{{player}} has worked it into a dangerous area.",
      "They've breached the area! {{player}} looks for an opening.",
      "{{player}} finds a way into the penalty box.",
      "Incursion! {{player}} forces the defense back."
    ],
    unsuccessful: [
      "{{player}} is kept out of the penalty area.",
      "The defense holds firm against {{player}}'s entry.",
      "{{player}} can't find a way into the box.",
      "Pushed back! {{player}} is denied the entry.",
      "Sturdy defending stops {{player}} on the edge."
    ]
  },
  assist: {
    successful: [
      "The architect! {{player}} claims the assist.",
      "{{player}} sets it up perfectly for the goal.",
      "All about the service! {{player}} provides the final ball.",
      "{{player}}'s vision pays off with a direct assist.",
      "A selfless play from {{player}} to create the goal."
    ]
  },

  // --- DEFENDING ---
  tackle: {
    won: [
      "Strong challenge! {{player}} wins the ball.",
      "Perfectly timed tackle by {{player}}.",
      "{{player}} dispossesses him with a superb challenge.",
      "No way through! {{player}} wins it back in {{area}}.",
      "{{player}} cleans up the danger with a crunching tackle."
    ],
    lost: [
      "{{player}} is skipped past! Tackle missed.",
      "{{player}} dives in but can't win the ball.",
      "The attacker turns {{player}} far too easily.",
      "{{player}}'s challenge is too late.",
      "Beaten! {{player}} loses the duel in the {{area}}."
    ]
  },
  interception: {
    successful: [
      "{{player}} reads the play and cuts it out!",
      "Interception! {{player}} snaps it up in the {{area}}.",
      "Great anticipation from {{player}} to win it back.",
      "{{player}} stops the attack in its tracks.",
      "Brilliant reading of the game by {{player}}."
    ],
    unsuccessful: [
      "{{player}} almost had it, but the ball slips through.",
      "{{player}} lunges for the interception and misses.",
      "{{player}} misreads the pass in the {{area}}.",
      "Attempted interception by {{player}} fails.",
      "The pass just evades {{player}}'s reach."
    ]
  },
  clearance: {
    successful: [
      "{{player}} hooves it clear from the {{area}}.",
      "No-nonsense defending by {{player}} to get it away.",
      "{{player}} relieves the pressure with a big clearance.",
      "Safe and sound! {{player}} boots it out of danger.",
      "{{player}} stands tall and clears the lines."
    ],
    unsuccessful: [
      "Poor clearance! It's gone straight to an opponent.",
      "{{player}} slices it! That's a dangerous clearance.",
      "{{player}} fails to get enough distance on it.",
      "The clearance from {{player}} stays in the danger zone.",
      "Shaky defending as {{player}}'s clearance is blocked."
    ]
  },
  block: {
    successful: [
      "Great block! {{player}} puts his body on the line.",
      "{{player}} gets across to shut down the shot.",
      "Vital intervention by {{player}} in the {{area}}.",
      "{{player}} stands firm to deny the effort.",
      "Blocked! {{player}} wasn't letting that through."
    ],
    unsuccessful: [
      "{{player}} tries to block, but it deflects through.",
      "Missed block! {{player}} couldn't get in the way.",
      "The ball bypasses {{player}}'s attempted block.",
      "{{player}} is a split-second too slow to block.",
      "It's through! {{player}} couldn't stop the strike."
    ]
  },
  pressure: {
    successful: [
      "{{player}} is hounding the man in possession.",
      "High intensity from {{player}} to force the error.",
      "{{player}} isn't giving them a moment's peace.",
      "Relentless pressure applied by {{player}}.",
      "{{player}} closes down the space quickly in {{area}}."
    ]
  },
  aerial_duel: {
    won: [
      "{{player}} towers over everyone in the {{area}}!",
      "Aerial dominance! {{player}} wins the header.",
      "{{player}} rises highest to win that duel.",
      "Nobody was beating {{player}} in the air there.",
      "{{player}} wins the physical battle in the air."
    ],
    lost: [
      "{{player}} is beaten in the air in the {{area}}.",
      "Lost that one! {{player}} couldn't get high enough.",
      "{{player}} comes second best in the aerial duel.",
      "Outjumped! {{player}} loses out in the {{area}}.",
      "{{player}} struggles to cope with the height there."
    ]
  },
  recovery: {
    successful: [
      "{{player}} tidies up and wins the ball back.",
      "Ball recovery! {{player}} is there to sweep up.",
      "{{player}} reacts quickest to the loose ball.",
      "Possession regained thanks to {{player}}.",
      "{{player}} cleans up the second ball in the {{area}}."
    ]
  },

  // --- DISCIPLINE ---
  foul: {
    successful: [
      "Foul! The referee blows against {{player}}.",
      "{{player}} is penalized for that challenge.",
      "Whistle goes! {{player}} was a bit too aggressive.",
      "{{player}} gives away a free kick in the {{area}}.",
      "Illegal challenge from {{player}}."
    ]
  },
  yellow_card: {
    successful: [
      "Yellow card for {{player}}. That’s a booking.",
      "{{player}} goes into the referee's book.",
      "Cautioned! {{player}} needs to be careful now.",
      "A tactical foul? {{player}} sees yellow in the {{area}}.",
      "The referee shows {{player}} a yellow card."
    ]
  },
  red_card: {
    successful: [
      "RED CARD! {{player}} is sent for an early shower!",
      "OFF! The referee shows {{player}} the red card.",
      "Disaster! {{player}} is sent off.",
      "{{player}} sees red! They'll play with ten men.",
      "A straight red for {{player}}! Game-changer."
    ]
  },
  offside: {
    successful: [
      "Flag is up! {{player}} is caught offside.",
      "{{player}} timed that run just a fraction too early.",
      "Offside! The attack is halted in the {{area}}.",
      "{{player}} is caught out by the defensive line.",
      "Wait—the flag is up against {{player}}."
    ]
  },

  // --- TRANSITIONS ---
  counter_attack: {
    goal: [
      "GOAL! A textbook counter-attack finished by {{player}}!",
      "Lightning speed! {{player}} scores on the break.",
      "Counter-attack complete! {{player}} finds the net.",
      "{{player}} caps off a brilliant break with a goal.",
      "From one end to the other! {{player}} converts!"
    ],
    successful: [
      "They’re away! {{player}} leads a blistering counter.",
      "Fast transition! {{player}} moves it through the {{area}}.",
      "The counter is on! {{player}} driving forward.",
      "Lightning fast break led by {{player}}.",
      "{{player}} sparks a dangerous counter-attack!"
    ],
    unsuccessful: [
      "The counter fizzles out for {{player}}.",
      "{{player}}'s break is stopped by the retreating defense.",
      "The transition was slow, and {{player}} is caught.",
      "Counter-attack halted in the {{area}}.",
      "{{player}} fails to make the break count."
    ]
  },
  trans_pass: {
    successful: [
      "Quick transition! {{player}} moves it wide.",
      "{{player}} switches the point of attack beautifully.",
      "Efficient play by {{player}} during the break.",
      "{{player}} finds the outlet pass in the {{area}}.",
      "Transition play at its best from {{player}}."
    ],
    unsuccessful: [
      "Transition pass failed! {{player}} misses the outlet.",
      "{{player}} gives it away during the break.",
      "The transition stalls as {{player}} misplaces the ball.",
      "Intercepted! {{player}} couldn't find the transition pass.",
      "A heavy touch from {{player}} ruins the transition."
    ]
  },
  turnover: {
    lost: [
      "Possession lost. {{player}} gives it away in the {{area}}.",
      "Turnover! {{player}} loses control of the ball.",
      "Careless from {{player}}—the opposition takes it.",
      "The attack breaks down as {{player}} loses it.",
      "{{player}} caught in possession in the {{area}}."
    ]
  },

  // --- SET PIECES ---
  corner: {
    successful: [
      "Great delivery from the corner by {{player}}.",
      "{{player}} puts it right into the danger zone.",
      "Target found! {{player}} swings a beauty in.",
      "{{player}} creates real danger from the corner flag.",
      "Pinpoint corner from {{player}} into the {{area}}."
    ],
    unsuccessful: [
      "{{player}}'s corner is easily cleared.",
      "Low corner from {{player}}—hit the first man.",
      "The keeper claims {{player}}'s corner with ease.",
      "{{player}} puts too much on it; it's out for a goal kick.",
      "A wasted opportunity from the corner for {{player}}."
    ]
  },
  free_kick: {
    goal: [
      "GOAL! {{player}} curls it over the wall and in!",
      "Breathtaking! {{player}} scores from the free kick.",
      "{{player}} strikes it pure! What a goal.",
      "Dead-ball specialist! {{player}} finds the net.",
      "The keeper didn't move! {{player}} converts!"
    ],
    successful: [
      "{{player}} finds a teammate from the set piece.",
      "Good delivery by {{player}} from the free kick.",
      "{{player}} puts it into a dangerous area.",
      "The free kick from {{player}} creates a chance.",
      "Well-worked set piece by {{player}}."
    ],
    unsuccessful: [
      "{{player}} hits the wall with the free kick.",
      "Well over! {{player}}'s effort lacks composure.",
      "The free kick from {{player}} is easily defended.",
      "{{player}} tries the trick play but it fails.",
      "Disappointing effort from the free kick by {{player}}."
    ]
  },
  throw_in: {
    successful: [
      "{{player}} finds a teammate with the throw.",
      "Quick throw from {{player}} to keep play moving.",
      "{{player}}'s throw keeps the possession.",
      "Easy ball in from the sideline by {{player}}.",
      "{{player}} gets the game restarted quickly."
    ],
    unsuccessful: [
      "{{player}} throws it straight to an opponent.",
      "Foul throw? No, just a poor one from {{player}}.",
      "Turnover from the throw-in by {{player}}.",
      "{{player}} can't find a way through with that throw.",
      "Possession lost on the sideline by {{player}}."
    ]
  },
  penalty: {
    goal: [
      "GOAL! {{player}} converts from the spot!",
      "Cool as you like. {{player}} scores the penalty.",
      "{{player}} hammers it home! Penalty scored.",
      "No mistake from {{player}} from 12 yards.",
      "The keeper dives, but {{player}} finds the corner!"
    ],
    saved: [
      "SAVED! The keeper denies {{player}} from the spot!",
      "{{player}}'s penalty is guessed correctly!",
      "Brilliant stop! {{player}} is thwarted.",
      "The keeper is the hero! {{player}} misses the penalty.",
      "Denied! {{player}} can't beat the keeper from 12 yards."
    ],
    missed_wide: [
      "He's missed it! {{player}} puts the penalty wide.",
      "Over the bar! {{player}} wastes the chance.",
      "{{player}} can't believe it—the penalty is off-target.",
      "Drama! {{player}} sends the penalty flying wide.",
      "A huge miss from {{player}} from the spot."
    ]
  }
};


export function getOutcomeCommentary(playerName: string, eventId: string, outcomeId: string, zoneId: string){
  console.log(eventId, outcomeId)
  const selectedOutcomeCommentary = outcomeCommentaryLibrary[eventId][outcomeId]
  if(!selectedOutcomeCommentary){
    return ''
  }
  const selectedCommentary = selectedOutcomeCommentary[Math.floor(Math.random() * selectedOutcomeCommentary.length)]
  // return  selectedCommentary.replace('{{player}}', playerName).replace('{{area}}', zoneId) // area should be position
  return  selectedCommentary.replace('{{area}}', zoneId) // area should be position
}
