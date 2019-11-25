export class Item {
  itemId: string;
  sprintId: number;
  userId: string;
  priority: string;
  status: string;
  title: string;
  content: string;
  note: string;
  startTime: Date;
  endTime: number;
}
export const ITEMS: Item[] = [
  {
    itemId: '1',
    sprintId: 1,
    userId:  'dev',
    priority: 'urgent',
    status: 'In progress',
    title: 'Backoffice - Update UI Withdrawal',
    content: 'Please help update the UI',
    note: '',
    startTime: new Date(2019, 1, 20),
    endTime: Date.now(),
  },
  {
    itemId: '2',
    sprintId: 1,
    userId:  'dev1',
    priority: 'high',
    status: 'In progress',
    title: 'Member mobile - Can reactive Exchange Game home page when clicking on the logo',
    content: '*Expected:* Should navigate to Exchange Game home page',
    note: '',
    startTime: new Date(2018, 8, 16),
    endTime: Date.now(),
  },
  {
    itemId: '3',
    sprintId: 1,
    userId:  'dev1',
    priority: 'normal',
    status: 'In progress',
    title: 'Member mobile - Missing exchange game details page when active the menu',
    content: '*Expected:* Should display exchange game details page user select on a game to go to game table',
    note: '',
    startTime: new Date(2018, 9, 23),
    endTime: Date.now(),
  },
  {
    itemId: '4',
    sprintId: 2,
    userId:  'dev1',
    priority: 'normal',
    status: 'In progress',
    title: 'Mobile site - Odds are enabled when sport list is inactivated',
    content: 'Expected: Odds should be blurred.',
    note: '',
    startTime: new Date(2018, 9, 23),
    endTime: Date.now(),
  },
  {
    itemId: '5',
    sprintId: 2,
    userId:  'dev2',
    priority: 'normal',
    status: 'In progress',
    title: 'Agent site - Quick Search - Bet setting listing - Make the width of Soccer flexible like to others',
    content: 'Expected: Make the width of Soccer flexible like to others',
    note: '',
    startTime: new Date(2018, 12, 2),
    endTime: Date.now(),
  },
  {
    itemId: '6',
    sprintId: 2,
    userId:  'dev2',
    priority: 'low',
    status: 'In progress',
    title: 'Member desktop - Searching - Missing sports and incorrect caption on the Search result',
    content: 'Expected\n' +
      'Display correct caption and have sports on the Search result.\n' +
      'besides the above issues, help to highlight the keyword filtering.',
    note: '',
    startTime: new Date(2018, 2, 14),
    endTime: Date.now(),
  },
  {
    itemId: '7',
    sprintId: 3,
    userId:  'dev3',
    priority: 'urgent',
    status: 'In progress',
    title: 'Member desktop - Racing odds - Non-Runner shall be displayed on the bottom',
    content: 'Expected: Non-Runner shall be displayed on the bottom',
    note: '',
    startTime: new Date(2018, 2, 14),
    endTime: Date.now(),
  },
  {
    itemId: '8',
    sprintId: 3,
    userId:  'dev3',
    priority: 'normal',
    status: 'In progress',
    title: 'Member Mobile - Lottery & Slots - Incorrect background color',
    content: '*Expected:* Should be FS style.',
    note: '',
    startTime: new Date(2018, 3, 10),
    endTime: Date.now(),
  },
  {
    itemId: '9',
    sprintId: 3,
    userId:  'dev3',
    priority: 'low',
    status: 'In progress',
    title: 'Member Mobile - Statement - Negative odds should be in red',
    content: '*Expected:* Negative odds should be red.',
    note: '',
    startTime: new Date(2018, 2, 14),
    endTime: Date.now(),
  }
];
