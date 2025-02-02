export interface TimeSlot {
    id: string
    date: string
    startTime: string
    endTime: string
  }
  
  export interface AddSlotModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (startTime: string, endTime: string) => void
    selectedDate: Date
    isPastDate: boolean
  }
  
  export interface BlogPost {
    id: string
    title: string
    description: string
    coverImage: string
    readTime: number
    lastModified: string
    author: {
      name: string
      id: string
    }
  }
  
  export interface BlogRequest {
    id: string
    title: string
    status: "pending" | "approved" | "rejected"
    author: {
      name: string
      id: string
    }
  }
  
  export interface Sessions {
    patientName: string
    patientEmail: string
    patientPhone: string
    therapistName: string
    sessionDate: string
    duration: string
  }
  
  export interface CreateSessionForm {
    therapist: string;
    patient: string;
    meetingName: string;
    duration: string;
    date: string;
    time: string;
    autoConfirm: boolean;
    paymentType: 'free' | 'paid' | 'no-booking-fee';
    location: string;
  }
  