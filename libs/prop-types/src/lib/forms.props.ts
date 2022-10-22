import { UserLoginProps } from './user.props';

export interface RegisterFormProps {
  name?: string;
  password: string;
  email: string;
}

export interface RegisterFormFuncProps {
  closePop: () => void;
  registerSubmit: (values: UserLoginProps) => void;
}
