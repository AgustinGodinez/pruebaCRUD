export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface UserStateProps {
  users: User[];
  loading: boolean;
  error: string | null;
  isModalShow:boolean
}
