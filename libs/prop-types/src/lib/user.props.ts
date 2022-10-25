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

export interface landLordProps {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    doorNo: string;
  };
}

export interface AdminUserInfoProps {
  adminUser: {
    name: string;
    email: string;
  } | null;
  landLords: landLordProps[] | null;
  status: 'pending' | 'success' | 'failed';
}
