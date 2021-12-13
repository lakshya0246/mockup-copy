import { v4 as uuid } from 'uuid';

export interface Notification {
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

export interface Application {
  id: string;
  title: string;
  company: string;
  startDate: Date;
  questionType: string;
  durationDisplay: string;
  durationInMinutes: number;
  venue: string;
  type: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  salary: string;
  startDate: Date;
  isTrending?: boolean;
  isUserInterested?: boolean;
  location: string;
  jobType: 'full time' | 'part time';
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: uuid(),
    company: 'SBI',
    title: 'Marketing Analyst',
    salary: 'INR 30,000/m',
    startDate: new Date(),
    jobType: 'full time',
    location: 'Bangalore',
  },
  {
    id: uuid(),
    company: 'SBI',
    title: 'Marketing Analyst',
    salary: 'INR 30,000/m',
    startDate: new Date(),
    jobType: 'full time',
    location: 'Bangalore',
    isTrending: true,
  },
  {
    id: uuid(),
    company: 'SBI',
    title: 'Marketing Analyst',
    salary: 'INR 30,000/m',
    startDate: new Date(),
    jobType: 'full time',
    location: 'Bangalore',
    isUserInterested: false,
  },
  {
    id: uuid(),
    company: 'SBI',
    title: 'Marketing Analyst',
    salary: 'INR 30,000/m',
    startDate: new Date(),
    jobType: 'full time',
    location: 'Bangalore',
  },
];

export const ONGOING_APPLICATIONS: Application[] = [
  {
    id: uuid(),
    title: 'Marketing Analyst',
    company: 'SBI',
    startDate: new Date(),
    questionType: 'MCQ',
    durationDisplay: '2 Hrs',
    durationInMinutes: 120,
    venue: 'Andheri Nagar, Sec 4, Mumbai',
    type: 'Test',
  },
  {
    id: uuid(),
    title: 'Marketing Analyst',
    company: 'SBI',
    startDate: new Date(),
    questionType: 'MCQ',
    durationDisplay: '2 Hrs',
    durationInMinutes: 120,
    type: 'Test',
    venue: 'Andheri Nagar, Sec 4, Mumbai',
  },
  {
    id: uuid(),
    title: 'Marketing Analyst',
    company: 'SBI',
    startDate: new Date(),
    questionType: 'MCQ',
    durationDisplay: '2 Hrs',
    durationInMinutes: 120,
    venue: 'Andheri Nagar, Sec 4, Mumbai',
    type: 'Test',
  },
];
export const NOTIFICATIONS: Notification[] = [
  {
    id: uuid(),
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    type: 'apple',
  },
  {
    id: uuid(),
    title: `consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    type: 'banana',
  },
  {
    id: uuid(),
    title: `Lorem ipsum dolor`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000),
    type: 'caramel',
  },
  {
    id: uuid(),
    title: `I dolor sit amet, consectetur adipiscing elit`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000),
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
