import { IUsers } from "../types";

export interface TimeSlot {
  userId: {
    _id: string;
    name: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  clientId: string;
  _id: string;
  type: "online" | "offline";
}

export interface AddSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    startTime: string,
    endTime: string,
    type: "online" | "offline"
  ) => void;
  selectedDate: Date;
  isPastDate?: boolean;
  slot?: {
    _id: string;
    startTime: string;
    endTime: string;
    type: "online" | "offline";
  };
  therapists?: IUsers[];
}

export interface BlogPost {
  _id: string;
  title: string;
  desc: string;
  img: string;
  read: string;
  date: string;
  author: string;
}

export interface BlogRequest {
  id: string;
  title: string;
  status: "pending" | "approved" | "rejected";
  author: {
    name: string;
    id: string;
  };
}

export interface Sessions {
  _id: string;
  name: string;
  therapistId: string;
  clientId: string;
  status: string;
  type: string;
  sessionDateTime: string;
  duration: string;
  location: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  therapistName: string;
  packageId: string;
  isPackageCreated: boolean;
}

export interface CreateSessionForm {
  therapist: string;
  patient: string;
  meetingName: string;
  duration: string;
  type: string;
  isNewClient: boolean;
  date: string;
  time: string;
  autoConfirm: boolean;
  paymentType: "free" | "paid" | "no-booking-fee";
  location: string;
}

export interface IProfile {
  userId: string;
  bio: string;
  qualification: string;
  specialization: string;
  experience: string;
  phone: string;
  name: string;
  email: string;
  age: string;
  gender: string;
}
