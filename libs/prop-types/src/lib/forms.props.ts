export interface RegisterFormProps {
  name?: string;
  password: string;
  email: string;
}

export interface RegisterFormFuncProps {
  closePop: () => void;
  registerSubmit: (values: RegisterFormProps) => void;
}
