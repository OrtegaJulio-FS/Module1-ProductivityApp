export type Priority = 'High' | 'Medium' | 'Low';
export type Task = { id: string; title: string; description: string; priority: Priority; completed: boolean; createdAt: number };
export type Settings = { name: string; theme: 'light' | 'dark' };
