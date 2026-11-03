import * as SQLite from 'expo-sqlite';
import { Task } from '../types';
let connection: Promise<SQLite.SQLiteDatabase> | undefined;
async function db() {
  if (!connection) connection = (async () => {
    const database = await SQLite.openDatabaseAsync('focus.db');
    await database.execAsync('CREATE TABLE IF NOT EXISTS tasks (id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, priority TEXT NOT NULL, completed INTEGER NOT NULL DEFAULT 0, createdAt INTEGER NOT NULL)');
    return database;
  })().catch(error => { connection = undefined; throw error; });
  return connection;
}
export async function listTasks(): Promise<Task[]> {
  const rows = await (await db()).getAllAsync<Omit<Task, 'completed'> & {completed: number}>('SELECT * FROM tasks ORDER BY createdAt DESC');
  return rows.map(row => ({...row, completed: !!row.completed}));
}
export async function insertTask(task: Task) {
  await (await db()).runAsync('INSERT INTO tasks VALUES (?, ?, ?, ?, ?, ?)', task.id, task.title, task.description, task.priority, 0, task.createdAt);
}
export async function completeTask(id: string, completed: boolean) { await (await db()).runAsync('UPDATE tasks SET completed = ? WHERE id = ?', completed ? 1 : 0, id); }
export async function deleteTask(id: string) { await (await db()).runAsync('DELETE FROM tasks WHERE id = ?', id); }
