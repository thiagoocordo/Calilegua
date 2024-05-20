import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { User } from './users';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const usersFilePath = path.join(process.cwd(), 'users.json');

export async function readUsersFromFile(): Promise<User[]> {
  try {
    const data = await readFile(usersFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function writeUsersToFile(users: User[]): Promise<void> {
  const data = JSON.stringify(users, null, 2);
  await writeFile(usersFilePath, data, 'utf-8');
}
