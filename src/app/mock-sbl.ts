import {Item} from './mock-item';

class SprintBacklog {
  sprintId: number;
  startTime: Date;
  endTime: number;
  items: Item[];
}

export const SBL: SprintBacklog[] = [
  {
    sprintId: 1,
    startTime: new Date(),
    endTime: Date.now(),
    items: []
  },
  {
    sprintId: 2,
    startTime: new Date(),
    endTime: Date.now(),
    items: []
  },
  {
    sprintId: 3,
    startTime: new Date(),
    endTime: Date.now(),
    items: []
  }
];
