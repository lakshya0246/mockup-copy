import { v4 as uuid } from 'uuid';

interface Notification {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  type: 'apple' | 'banana' | 'caramel' | 'dolphin';
}

interface User {
  id: string;
  name: string;
  sunstoneId: string;
  campus: string;
  batch: string;
  specialization: string;
  activeApplications: number;
  opportunities: number;
  profilePictureUrl: string;
}

interface Application {
  id: string;
  title: string;
  startDate: Date;
  questionType: string;
  durationDisplay: string;
  durationInMinutes: number;
  venue: string;
}

interface Opportunity {
  id: string;
  title: string;
  salary: string;
  startDate: Date;
  isTrending: boolean;
  isUserInterested?: boolean;
  location: string;
  jobType: 'full time' | 'part time';
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: uuid(),
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(),
    type: 'apple',
  },
  {
    id: uuid(),
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(),
    type: 'banana',
  },
  {
    id: uuid(),
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(),
    type: 'caramel',
  },
  {
    id: uuid(),
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(),
    type: 'dolphin',
  },
];

export const RAJAT_BHANDARI: User = {
  id: uuid(),
  name: 'Rajat Bhandari',
  sunstoneId: '12345678',
  campus: 'NIU Noida',
  batch: '2019-2022',
  specialization: 'Marketing',
  opportunities: 78,
  activeApplications: 10,
  profilePictureUrl:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
};
