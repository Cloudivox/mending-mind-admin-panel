export interface IAPIError {
  response: {
    Status: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    Error?: {
      message: string;
      name: string;
      code?: string;
      errorCode?: string;
    };
  };
  status: number;
}

export interface IAxiosResponse<T> {
  data: {
    Data: T;
    Status: string;
  };
}

export interface IAuthResponse {
  id: string;
  email: string;
  phone: string;
  type: string;
  token: string;
}

export interface IAuthData {
  email?: string;
  phone?: string;
  password?: string;
}
