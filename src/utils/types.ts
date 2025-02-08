export interface TimeSlot {
  userId: string;
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
  isPastDate: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  readTime: number;
  lastModified: string;
  author: {
    name: string;
    id: string;
  };
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
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  therapistName: string;
  sessionDate: string;
  duration: string;
}

export interface CreateSessionForm {
  therapist: string;
  patient: string;
  meetingName: string;
  duration: string;
  date: string;
  time: string;
  autoConfirm: boolean;
  paymentType: "free" | "paid" | "no-booking-fee";
  location: string;
}
