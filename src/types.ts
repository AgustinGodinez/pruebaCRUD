export interface UserProps {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface UserStateProps {
  users: UserProps[];
  user: UserProps;
  loading: boolean;
  error: string | null;
  isModalShow: boolean;
}
