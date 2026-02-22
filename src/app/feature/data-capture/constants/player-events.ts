import {FootballEventsData} from '../interfaces/player-events';

export const footballEvents = {
  categories: [
    {
      name: "Attacking",
      items: [
        { id: "pass", name: "Pass", icon: "MoveRight", hotkey: "P" },
        { id: "shot", name: "Shot", icon: "Target", hotkey: "S" },
        { id: "key_pass", name: "Key Pass", icon: "Star", hotkey: "K" },
        { id: "cross", name: "Cross", icon: "GitMerge", hotkey: "C" },
        { id: "dribble", name: "Dribble", icon: "Zap", hotkey: "D" },
        { id: "prog_run", name: "Progressive Run", icon: "TrendingUp", hotkey: "R" },
        { id: "box_entry", name: "Box Entry", icon: "LogIn", hotkey: "B" },
        { id: "assist", name: "Assist", icon: "Handshake", hotkey: "A" }
      ]
    },
    {
      name: "Defending",
      items: [
        { id: "tackle", name: "Tackle", icon: "Shield", hotkey: "T" },
        { id: "interception", name: "Interception", icon: "Fingerprint", hotkey: "I" },
        { id: "clearance", name: "Clearance", icon: "ArrowUp", hotkey: "L" },
        { id: "block", name: "Block", icon: "Ban", hotkey: "O" },
        { id: "pressure", name: "Pressure", icon: "ArrowDownToLine", hotkey: "U" },
        { id: "aerial_duel", name: "Aerial Duel", icon: "Wind", hotkey: "W" },
        { id: "recovery", name: "Ball Recovery", icon: "RotateCcw", hotkey: "V" }
      ]
    },
    {
      name: "Transitions",
      items: [
        { id: "counter_attack", name: "Counter Attack", icon: "Flashlight", hotkey: "X" },
        { id: "trans_pass", name: "Transition Pass", icon: "GitBranch", hotkey: "Z" },
        { id: "turnover", name: "Turnover", icon: "ArrowLeftRight", hotkey: "H" }
      ]
    },
    {
      name: "Set Pieces",
      items: [
        { id: "corner", name: "Corner", icon: "CornerDownRight", hotkey: "O" },
        { id: "free_kick", name: "Free Kick", icon: "Flag", hotkey: "F" },
        { id: "throw_in", name: "Throw-in", icon: "Repeat", hotkey: "N" },
        { id: "penalty", name: "Penalty", icon: "Focus", hotkey: "Y" }
      ]
    },
    {
      name: "Discipline",
      items: [
        { id: "foul", name: "Foul Committed", icon: "AlertTriangle", hotkey: "G" },
        { id: "yellow_card", name: "Yellow Card", icon: "Square", hotkey: "1" },
        { id: "red_card", name: "Red Card", icon: "Square", hotkey: "2" },
        { id: "offside", name: "Offside", icon: "FlagOff", hotkey: "Q" }
      ]
    }
  ],
  outcomes: [
    { id: "successful", label: "Successful", color: "green" },
    { id: "unsuccessful", label: "Unsuccessful", color: "red" },
    { id: "goal", label: "Goal / Point", color: "bright-green" },
    { id: "missed_wide", label: "Missed (Wide)", color: "orange" },
    { id: "saved", label: "Saved", color: "blue" },
    { id: "won", label: "Won", color: "green" },
    { id: "lost", label: "Lost", color: "red" }
  ]
};

export const footballEventsGoogleSet: FootballEventsData = {
  categories: [
    {
      name: "Attacking",
      type: "attacking",
      items: [
        { id: "pass", name: "Pass", icon: "shortcut", hotkey: "P", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "shot", name: "Shot", icon: "recenter", hotkey: "S", categoryType: "attacking", allowedOutcomes: ["goal", "saved", "missed_wide", "unsuccessful"], requiresShotMap: true },
        { id: "key_pass", name: "Key Pass", icon: "grade", hotkey: "K", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "cross", name: "Cross", icon: "call_made", hotkey: "C", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "dribble", name: "Dribble", icon: "settings_motion_mode", hotkey: "D", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "prog_run", name: "Progressive Run", icon: "trending_up", hotkey: "R", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "box_entry", name: "Box Entry", icon: "login", hotkey: "B", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: true },
        { id: "assist", name: "Assist", icon: "handshake", hotkey: "A", categoryType: "attacking", allowedOutcomes: ["successful"], requiresShotMap: false }
      ]
    },
    {
      name: "Defending",
      type: "defending",
      items: [
        { id: "tackle", name: "Tackle", icon: "gavel", hotkey: "T", categoryType: "defending", allowedOutcomes: ["won", "lost"], isPhysicalDuel: true },
        { id: "interception", name: "Interception", icon: "front_hand", hotkey: "I", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"], isPhysicalDuel: false },
        { id: "clearance", name: "Clearance", icon: "move_up", hotkey: "L", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"], isPhysicalDuel: false },
        { id: "block", name: "Block", icon: "block", hotkey: "O", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"], isPhysicalDuel: false },
        { id: "pressure", name: "Pressure", icon: "expand_circle_down", hotkey: "U", categoryType: "defending", allowedOutcomes: ["successful"], isPhysicalDuel: false },
        { id: "aerial_duel", name: "Aerial Duel", icon: "air", hotkey: "W", categoryType: "defending", allowedOutcomes: ["won", "lost"], isPhysicalDuel: true },
        { id: "recovery", name: "Ball Recovery", icon: "replay", hotkey: "V", categoryType: "defending", allowedOutcomes: ["successful"], isPhysicalDuel: false }
      ]
    },
    {
      name: "Discipline",
      type: "discipline",
      items: [
        { id: "foul", name: "Foul Committed", icon: "warning", hotkey: "G", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: 'none' },
        { id: "yellow_card", name: "Yellow Card", icon: "rectangle", hotkey: "1", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: 'yellow' },
        { id: "red_card", name: "Red Card", icon: "rectangle", hotkey: "2", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: 'red' },
        { id: "offside", name: "Offside", icon: "outlined_flag", hotkey: "Q", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: 'none' }
      ]
    },
    {
      name: "Transitions",
      type: "transitions",
      items: [
        { id: "counter_attack", name: "Counter Attack", icon: "bolt", hotkey: "X", categoryType: "transitions", allowedOutcomes: ["successful", "unsuccessful", "goal"] },
        { id: "trans_pass", name: "Transition Pass", icon: "alt_route", hotkey: "Z", categoryType: "transitions", allowedOutcomes: ["successful", "unsuccessful"] },
        { id: "turnover", name: "Turnover", icon: "sync_alt", hotkey: "H", categoryType: "transitions", allowedOutcomes: ["lost"] }
      ]
    },
    {
      name: "Set Pieces",
      type: "set_pieces",
      items: [
        { id: "corner", name: "Corner", icon: "turn_slight_right", hotkey: "O", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful"] },
        { id: "free_kick", name: "Free Kick", icon: "flag", hotkey: "F", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful", "goal"] },
        { id: "throw_in", name: "Throw-in", icon: "swipe_up", hotkey: "N", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful"] },
        { id: "penalty", name: "Penalty", icon: "adjust", hotkey: "Y", categoryType: "set_pieces", allowedOutcomes: ["goal", "saved", "missed_wide"] }
      ]
    }
  ],
  outcomes: [
    { id: "successful", label: "Successful", color: "green", icon: "check_circle" },
    { id: "unsuccessful", label: "Unsuccessful", color: "red", icon: "cancel" },
    { id: "goal", label: "Goal / Point", color: "bright-green", icon: "sports_soccer" },
    { id: "missed_wide", label: "Missed (Wide)", color: "orange", icon: "near_me_disabled" },
    { id: "saved", label: "Saved", color: "blue", icon: "pan_tool" },
    { id: "won", label: "Won", color: "green", icon: "thumb_up" },
    { id: "lost", label: "Lost", color: "red", icon: "thumb_down" }
  ]
};



// export const footballEventsGoogleSet: FootballEventsData = {
//   categories: [
//     {
//       name: "Attacking",
//       type: "attacking",
//       items: [
//         { id: "pass", name: "Pass", icon: "shortcut", hotkey: "P", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "shot", name: "Shot", icon: "recenter", hotkey: "S", categoryType: "attacking", allowedOutcomes: ["goal", "saved", "missed_wide", "unsuccessful"] },
//         { id: "key_pass", name: "Key Pass", icon: "grade", hotkey: "K", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "cross", name: "Cross", icon: "call_made", hotkey: "C", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "dribble", name: "Dribble", icon: "settings_motion_mode", hotkey: "D", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "prog_run", name: "Progressive Run", icon: "trending_up", hotkey: "R", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "box_entry", name: "Box Entry", icon: "login", hotkey: "B", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "assist", name: "Assist", icon: "handshake", hotkey: "A", categoryType: "attacking", allowedOutcomes: ["successful"] }
//       ]
//     },
//     {
//       name: "Defending",
//       type: "defending",
//       items: [
//         { id: "tackle", name: "Tackle", icon: "gavel", hotkey: "T", categoryType: "defending", allowedOutcomes: ["won", "lost"] },
//         { id: "interception", name: "Interception", icon: "front_hand", hotkey: "I", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "clearance", name: "Clearance", icon: "move_up", hotkey: "L", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "block", name: "Block", icon: "block", hotkey: "O", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "pressure", name: "Pressure", icon: "expand_circle_down", hotkey: "U", categoryType: "defending", allowedOutcomes: ["successful"] },
//         { id: "aerial_duel", name: "Aerial Duel", icon: "air", hotkey: "W", categoryType: "defending", allowedOutcomes: ["won", "lost"] },
//         { id: "recovery", name: "Ball Recovery", icon: "replay", hotkey: "V", categoryType: "defending", allowedOutcomes: ["successful"] }
//       ]
//     },
//     {
//       name: "Transitions",
//       type: "transitions",
//       items: [
//         { id: "counter_attack", name: "Counter Attack", icon: "bolt", hotkey: "X", categoryType: "transitions", allowedOutcomes: ["successful", "unsuccessful", "goal"] },
//         { id: "trans_pass", name: "Transition Pass", icon: "alt_route", hotkey: "Z", categoryType: "transitions", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "turnover", name: "Turnover", icon: "sync_alt", hotkey: "H", categoryType: "transitions", allowedOutcomes: ["lost"] }
//       ]
//     },
//     {
//       name: "Set Pieces",
//       type: "set_pieces",
//       items: [
//         { id: "corner", name: "Corner", icon: "turn_slight_right", hotkey: "O", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "free_kick", name: "Free Kick", icon: "flag", hotkey: "F", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful", "goal"] },
//         { id: "throw_in", name: "Throw-in", icon: "swipe_up", hotkey: "N", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful"] },
//         { id: "penalty", name: "Penalty", icon: "adjust", hotkey: "Y", categoryType: "set_pieces", allowedOutcomes: ["goal", "saved", "missed_wide"] }
//       ]
//     },
//     {
//       name: "Discipline",
//       type: "discipline",
//       items: [
//         { id: "foul", name: "Foul Committed", icon: "warning", hotkey: "G", categoryType: "discipline", allowedOutcomes: ["successful"] },
//         { id: "yellow_card", name: "Yellow Card", icon: "rectangle", hotkey: "1", categoryType: "discipline", allowedOutcomes: ["successful"] },
//         { id: "red_card", name: "Red Card", icon: "rectangle", hotkey: "2", categoryType: "discipline", allowedOutcomes: ["successful"] },
//         { id: "offside", name: "Offside", icon: "outlined_flag", hotkey: "Q", categoryType: "discipline", allowedOutcomes: ["successful"] }
//       ]
//     }
//   ],
//   outcomes: [
//     { id: "successful", label: "Successful", color: "green", icon: "check_circle" },
//     { id: "unsuccessful", label: "Unsuccessful", color: "red", icon: "cancel" },
//     { id: "goal", label: "Goal / Point", color: "bright-green", icon: "sports_soccer" },
//     { id: "missed_wide", label: "Missed (Wide)", color: "orange", icon: "near_me_disabled" },
//     { id: "saved", label: "Saved", color: "blue", icon: "pan_tool" },
//     { id: "won", label: "Won", color: "green", icon: "thumb_up" },
//     { id: "lost", label: "Lost", color: "red", icon: "thumb_down" }
//   ]
// };

// export const footballEventsGoogleSet: FootballEventsData = {
//   categories: [
//     {
//       name: "Attacking",
//       items: [
//         { id: "pass", name: "Pass", icon: "shortcut", hotkey: "P" },
//         { id: "shot", name: "Shot", icon: "recenter", hotkey: "S" },
//         { id: "key_pass", name: "Key Pass", icon: "grade", hotkey: "K" },
//         { id: "cross", name: "Cross", icon: "call_made", hotkey: "C" },
//         { id: "dribble", name: "Dribble", icon: "settings_motion_mode", hotkey: "D" },
//         { id: "prog_run", name: "Progressive Run", icon: "trending_up", hotkey: "R" },
//         { id: "box_entry", name: "Box Entry", icon: "login", hotkey: "B" },
//         { id: "assist", name: "Assist", icon: "handshake", hotkey: "A" }
//       ]
//     },
//     {
//       name: "Defending",
//       items: [
//         { id: "tackle", name: "Tackle", icon: "gavel", hotkey: "T" },
//         { id: "interception", name: "Interception", icon: "front_hand", hotkey: "I" },
//         { id: "clearance", name: "Clearance", icon: "move_up", hotkey: "L" },
//         { id: "block", name: "Block", icon: "block", hotkey: "O" },
//         { id: "pressure", name: "Pressure", icon: "expand_circle_down", hotkey: "U" },
//         { id: "aerial_duel", name: "Aerial Duel", icon: "air", hotkey: "W" },
//         { id: "recovery", name: "Ball Recovery", icon: "replay", hotkey: "V" }
//       ]
//     },
//     {
//       name: "Transitions",
//       items: [
//         { id: "counter_attack", name: "Counter Attack", icon: "bolt", hotkey: "X" },
//         { id: "trans_pass", name: "Transition Pass", icon: "alt_route", hotkey: "Z" },
//         { id: "turnover", name: "Turnover", icon: "sync_alt", hotkey: "H" }
//       ]
//     },
//     {
//       name: "Set Pieces",
//       items: [
//         { id: "corner", name: "Corner", icon: "turn_slight_right", hotkey: "O" },
//         { id: "free_kick", name: "Free Kick", icon: "flag", hotkey: "F" },
//         { id: "throw_in", name: "Throw-in", icon: "swipe_up", hotkey: "N" },
//         { id: "penalty", name: "Penalty", icon: "adjust", hotkey: "Y" }
//       ]
//     },
//     {
//       name: "Discipline",
//       items: [
//         { id: "foul", name: "Foul Committed", icon: "warning", hotkey: "G" },
//         { id: "yellow_card", name: "Yellow Card", icon: "rectangle", hotkey: "1" },
//         { id: "red_card", name: "Red Card", icon: "rectangle", hotkey: "2" },
//         { id: "offside", name: "Offside", icon: "outlined_flag", hotkey: "Q" }
//       ]
//     }
//   ],
//   outcomes: [
//     { id: "successful", label: "Successful", color: "green", icon: "check_circle" },
//     { id: "unsuccessful", label: "Unsuccessful", color: "red", icon: "cancel" },
//     { id: "goal", label: "Goal / Point", color: "bright-green", icon: "sports_soccer" },
//     { id: "missed_wide", label: "Missed (Wide)", color: "orange", icon: "near_me_disabled" },
//     { id: "saved", label: "Saved", color: "blue", icon: "pan_tool" },
//     { id: "won", label: "Won", color: "green", icon: "thumb_up" },
//     { id: "lost", label: "Lost", color: "red", icon: "thumb_down" }
//   ]
// };
