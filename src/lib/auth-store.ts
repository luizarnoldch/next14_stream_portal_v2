import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type User = {
  id: string;
  name: string;
  email: string;
};

export type State = {
  user: User | null;
};

export type Actions = {
  setUserAuth: ({ name, email }: User) => void;
};

const useAuth = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
          user: null,
          setUserAuth: ({ id, name, email }) =>
            set(() => ({
              user: { id, name, email },
            })),
        }),
      { name: 'authStore' },
    ),
  ),
)

export default useAuth