// Exercise 1.5's platform-aware proxy: AsyncStorage on web, SQLite on native.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types';
const KEY = 'focus.tasks.v1';
let queue: Promise<unknown> = Promise.resolve();
export async function listTasks(): Promise<Task[]> { const raw = await AsyncStorage.getItem(KEY); return raw ? JSON.parse(raw) : []; }
function update(change: (tasks: Task[]) => Task[]) {
  const pending = queue.then(async () => { const tasks = await listTasks(); await AsyncStorage.setItem(KEY, JSON.stringify(change(tasks))); });
  queue = pending.catch(() => {}); return pending;
}
export function insertTask(task: Task) { return update(tasks => [task, ...tasks]); }
export function completeTask(id: string, completed: boolean) { return update(tasks => tasks.map(task => task.id === id ? {...task, completed} : task)); }
export function deleteTask(id: string) { return update(tasks => tasks.filter(task => task.id !== id)); }
