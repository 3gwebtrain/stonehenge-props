export interface UserRegisterProps {
  name: string;
  email: string;
  password: string;
  status: string;
}

export interface UserLoginProps {
  email: string;
  password: string;
  status: string;
}
export interface UserLoggedInProps extends UserLoginProps {
  userDetails: {
    token: string;
  };
}
