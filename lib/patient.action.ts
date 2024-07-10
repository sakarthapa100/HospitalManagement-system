// lib/patient.action.ts
'use server'
import {ID, Query} from 'node-appwrite';
import {users} from '@/lib/appwrite.config';
import { parseStringify} from '../utils'



interface UserData {
  name: string;
  email: string;
  phone: string;
}

export const createUser = async (userData: UserData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  const user = await response.json();
  return user.data;
};
