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

export interface AdminUserInfoProps {
  adminUser: {
    name: string;
    email: string;
  } | null;
}

export interface LandLordRegisterProps {
  name: string;
  email: string;
  address: {
    street: string;
    pin: string;
  };
  phone: string;
}
