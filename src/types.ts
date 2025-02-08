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
  user: {
    id: string;
    email: string;
    phone: string;
    role: string;
    token: string;
  };
}

export interface IAuthData {
  email?: string;
  phone?: string;
  password?: string;
}

export interface IAvailabilityResponse {
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  status: string;
  clientId: string;
}

export interface IAvailabilityData {
  date: string;
  startTime: string;
  endTime: string;
  type: string;
}

export interface IUsers {
  name: string;
  email: string;
  role: string;
  status: string;
  _id: string;
}
