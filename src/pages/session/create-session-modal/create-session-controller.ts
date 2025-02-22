import { useEffect, useState } from "react";
import { CreateSessionForm } from "../../../utils/types";
import { useCheckAvailibility, useGetAllUsers } from "../services";
import { IUsers } from "../../../types";

interface CreateSessionControllerProps {
    onClose: () => void;
}

const useCreateSessionController = ({ onClose }: CreateSessionControllerProps) => {
    const [allTherapists, setAllTherapists] = useState<IUsers[]>([]);
    const [allPatients, setAllPatients] = useState<IUsers[]>([]);
    const [isSlotAvailable, setIsSlotAvailable] = useState<boolean>(false);
    const [form, setForm] = useState<CreateSessionForm>({
        therapist: "",
        patient: "",
        meetingName: "",
        type: "",
        duration: "30m",
        date: "",
        time: "",
        autoConfirm: false,
        paymentType: "free",
        location: "",
    });

    const getAllUsers = useGetAllUsers();
    const availabilityQuery = useCheckAvailibility(form.therapist, form.date);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose();
    };

    useEffect(() => {
        if (getAllUsers.isSuccess && getAllUsers.data) {
            const therapists = getAllUsers.data.users.filter(
                (user) => user.role === "therapist"
            );
            const patients = getAllUsers.data.users.filter(
                (user) => user.role === "client"
            );
            setAllTherapists(therapists);
            setAllPatients(patients);
        }
    }, [getAllUsers.isSuccess, getAllUsers.data]);

    // // Helper function to convert time string to minutes since midnight
    // const timeToMinutes = (time: string): number => {
    //     const [hours, minutes] = time.split(':').map(Number);
    //     return hours * 60 + minutes;
    // };

    // // Helper function to get end time based on start time and duration
    // const getEndTime = (startTime: string, duration: string): number => {
    //     const startMinutes = timeToMinutes(startTime);
    //     const durationMinutes = parseInt(duration.replace('m', ''));
    //     return startMinutes + durationMinutes;
    // };

    // Check availability when the data changes
    useEffect(() => {
        if (availabilityQuery.data?.availibility && form.time) {
            const selectedTime = form.time;

            // Find if the time slot is booked
            const isTimeBooked = availabilityQuery.data.availibility.some(slot => {
                return slot.startTime === selectedTime && slot.status === "available" && !slot.clientId;
            });

            // Set availability - true if time is booked
            setIsSlotAvailable(isTimeBooked);
        } else {
            setIsSlotAvailable(false);
        }
    }, [availabilityQuery.data, form.time]);

    return {
        form,
        setForm,
        handleSubmit,
        allTherapists,
        allPatients,
        isSlotAvailable,
        isCheckingAvailability: availabilityQuery.isLoading,
    };
};

export default useCreateSessionController;