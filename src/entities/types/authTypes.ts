export interface AuthState {
    isAuthenticated: boolean;
    user: {
      id: string | null;
      email: string | null;
    } | null;
  }