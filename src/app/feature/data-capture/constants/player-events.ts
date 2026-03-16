import {FootballEventsData} from '../interfaces/player-events';

export const footballEventsGoogleSet: FootballEventsData = {
  categories: [
    {
      name: "Attacking",
      type: "attacking",
      items: [
        { id: "pass", name: "Pass", icon: "trending_flat", color: "#11d442", hotkey: "P", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "shot", name: "Shot", icon: "gps_fixed", color: "#11d442", hotkey: "S", categoryType: "attacking", allowedOutcomes: ["goal", "saved", "missed_wide", "unsuccessful"], requiresShotMap: true },
        { id: "key_pass", name: "Key Pass", icon: "grade", color: "#11d442", hotkey: "K", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "cross", name: "Cross", icon: "call_made", color: "#11d442", hotkey: "C", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "dribble", name: "Dribble", icon: "directions_run", color: "#11d442", hotkey: "D", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "prog_run", name: "Progressive Run", icon: "trending_up", color: "#11d442", hotkey: "R", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: false },
        { id: "box_entry", name: "Box Entry", icon: "login", color: "#11d442", hotkey: "B", categoryType: "attacking", allowedOutcomes: ["successful", "unsuccessful"], requiresShotMap: true },
        { id: "assist", name: "Assist", icon: "handshake", color: "#11d442", hotkey: "A", categoryType: "attacking", allowedOutcomes: ["successful"], requiresShotMap: false }
      ]
    },
    {
      name: "Defending",
      type: "defending",
      items: [
        { id: "tackle", name: "Tackle", icon: "shield", color: "#3b82f6", hotkey: "T", categoryType: "defending", allowedOutcomes: ["won", "lost"], isPhysicalDuel: true },
        { id: "interception", name: "Interception", icon: "front_hand", color: "#3b82f6", hotkey: "I", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"], isPhysicalDuel: false },
        { id: "clearance", name: "Clearance", icon: "north", color: "#3b82f6", hotkey: "L", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"], isPhysicalDuel: false },
        { id: "block", name: "Block", icon: "block", color: "#3b82f6", hotkey: "O", categoryType: "defending", allowedOutcomes: ["successful", "unsuccessful"], isPhysicalDuel: false },
        { id: "pressure", name: "Pressure", icon: "expand_circle_down", color: "#3b82f6", hotkey: "U", categoryType: "defending", allowedOutcomes: ["successful"], isPhysicalDuel: false },
        { id: "aerial_duel", name: "Aerial Duel", icon: "air", color: "#3b82f6", hotkey: "W", categoryType: "defending", allowedOutcomes: ["won", "lost"], isPhysicalDuel: true },
        { id: "recovery", name: "Ball Recovery", icon: "replay", color: "#3b82f6", hotkey: "V", categoryType: "defending", allowedOutcomes: ["successful"], isPhysicalDuel: false }
      ]
    },
    {
      name: "Discipline",
      type: "discipline",
      items: [
        { id: "foul", name: "Foul Committed", icon: "warning", color: "#ef4444", hotkey: "G", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: "none" },
        { id: "yellow_card", name: "Yellow Card", icon: "rectangle", color: "#fbbf24", hotkey: "1", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: "yellow" },
        { id: "red_card", name: "Red Card", icon: "rectangle", color: "#ef4444", hotkey: "2", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: "red" },
        { id: "offside", name: "Offside", icon: "outlined_flag", color: "#ef4444", hotkey: "Q", categoryType: "discipline", allowedOutcomes: ["successful"], cardColor: "none" }
      ]
    },
    {
      name: "Transitions",
      type: "transitions",
      items: [
        { id: "counter_attack", name: "Counter Attack", icon: "bolt", color: "#a855f7", hotkey: "X", categoryType: "transitions", allowedOutcomes: ["successful", "unsuccessful", "goal"] },
        { id: "trans_pass", name: "Transition Pass", icon: "alt_route", color: "#a855f7", hotkey: "Z", categoryType: "transitions", allowedOutcomes: ["successful", "unsuccessful"] },
        { id: "turnover", name: "Turnover", icon: "sync_alt", color: "#a855f7", hotkey: "H", categoryType: "transitions", allowedOutcomes: ["lost"] }
      ]
    },
    {
      name: "Set Pieces",
      type: "set_pieces",
      items: [
        { id: "corner", name: "Corner", icon: "turn_slight_right", color: "#fbbf24", hotkey: "O", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful"] },
        { id: "free_kick", name: "Free Kick", icon: "flag", color: "#fbbf24", hotkey: "F", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful", "goal"] },
        { id: "throw_in", name: "Throw-in", icon: "sync_alt", color: "#fbbf24", hotkey: "N", categoryType: "set_pieces", allowedOutcomes: ["successful", "unsuccessful"] },
        { id: "penalty", name: "Penalty", icon: "adjust", color: "#fbbf24", hotkey: "Y", categoryType: "set_pieces", allowedOutcomes: ["goal", "saved", "missed_wide"] }
      ]
    }
  ],
  outcomes: [
    { id: "successful", label: "Successful", color: "#11d442", icon: "check_circle" },
    { id: "unsuccessful", label: "Unsuccessful", color: "#ef4444", icon: "cancel" },
    { id: "goal", label: "Goal / Point", color: "#11d442", icon: "sports_soccer" },
    { id: "missed_wide", label: "Missed (Wide)", color: "#fbbf24", icon: "near_me_disabled" },
    { id: "saved", label: "Saved", color: "#3b82f6", icon: "pan_tool" },
    { id: "won", label: "Won", color: "#11d442", icon: "thumb_up" },
    { id: "lost", label: "Lost", color: "#ef4444", icon: "thumb_down" }
  ]
};
