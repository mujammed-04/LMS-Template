'use client';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem: async () => null,
  setItem: async (_: string, value: string) => value,
  removeItem: async () => { }
});

export const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();
