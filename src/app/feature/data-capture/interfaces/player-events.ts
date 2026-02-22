type OutcomeId = 'successful' | 'unsuccessful' | 'goal' | 'missed_wide' | 'saved' | 'won' | 'lost';
export interface BaseEventItem {
  id: string;
  name: string;
  icon: string;
  hotkey: string;
  allowedOutcomes: OutcomeId[]
}

interface AttackingItem extends BaseEventItem {
  categoryType: 'attacking';
  requiresShotMap: boolean;
}

interface DefendingItem extends BaseEventItem {
  categoryType: 'defending';
  isPhysicalDuel: boolean;
}

interface DisciplineItem extends BaseEventItem {
  categoryType: 'discipline';
  cardColor?: 'yellow' | 'red' | 'none';
}
export interface TransitionItem extends BaseEventItem { categoryType: 'transitions'; }
export interface SetPieceItem extends BaseEventItem { categoryType: 'set_pieces'; }

export type FootballItem = AttackingItem | DefendingItem | DisciplineItem | TransitionItem | SetPieceItem;

export interface FootballCategory<T extends FootballItem>{
  name: string;
  type: T['categoryType'];
  items: T[];
}

export interface EventOutcome {
  id: string;
  label: string;
  color: string;
  icon: string;
}

export interface FootballEventsData {
  categories: [
    FootballCategory<AttackingItem>,
    FootballCategory<DefendingItem>,
    FootballCategory<DisciplineItem>,
    FootballCategory<TransitionItem>,
    FootballCategory<SetPieceItem>,
  ];
  outcomes: EventOutcome[];
}
