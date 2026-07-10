import { create } from 'zustand';
interface UserType {
  username: string;
}
interface UserAuth {
  setUser: (loggedUser: UserType) => void;
  user: UserType | null;
}

export const useAuth = create<UserAuth>((set) => ({
  user: null,
  setUser: (loggedUser: UserType) => {
    set(() => ({ user: loggedUser }));
  },
}));
