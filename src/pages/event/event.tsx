import { useEffect, useState } from "react";
import EventModal from "./event-modal";
import EventDetailModal from "./event-details-modal/event-details-modal";
import useCreateEvent, { IEvents } from "./services/create-event/create-event";
import useGetAllEvents from "./services/get-all-events/get-all-events";
import useJoinEvent from "./services/join-event/join-event";
import { toast } from "react-toastify";
import { useUser } from "../../context/user-context";

interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  endTime: string;
  participants: string[];
  isPaid: boolean;
  price: number;
  host: string;
  hostDescription?: string;
}
const Event = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvents | null>(null);
  const [events, setEvents] = useState<IEvents[]>([]);
  const createEvent = useCreateEvent();
  const getAllEvents = useGetAllEvents();
  const joinEvent = useJoinEvent();
  const { user } = useUser();
  const handleCreateEvent = (eventData: any) => {
    // Calculate end time
    const [hours, minutes] = eventData.time.split(":").map(Number);
    const endHours = hours + eventData.duration;
    const endTimeStr = `${endHours % 24}:${minutes
      .toString()
      .padStart(2, "0")}`;

    const newEvent = {
      id: Date.now().toString(),
      ...eventData,
      endTime: endTimeStr,
      participants: [],
    };
    createEvent.mutate(newEvent);
    // setEvents([newEvent, ...events]);
  };

  const handleViewDetails = (event: IEvents) => {
    setSelectedEvent(event);
    setIsDetailModalOpen(true);
  };

  const handleJoinEvent = () => {
    if (!selectedEvent) return;

    // Add current user to participants
    const updatedEvents = events.map((event) => {
      if (event.id === selectedEvent.id) {
        return {
          ...event,
          participants: [...event.participants, "current-user"],
        };
      }
      return event;
    });

    joinEvent.mutate(selectedEvent.id);

    // Update selected event
    const updatedEvent = updatedEvents.find(
      (event) => event.id === selectedEvent.id
    );
    if (updatedEvent) {
      setSelectedEvent(updatedEvent);
    }
  };

  useEffect(() => {
    if (getAllEvents.isSuccess && getAllEvents.data) {
      setEvents(getAllEvents.data);
    }
  }, [getAllEvents.isSuccess && getAllEvents.data]);

  useEffect(() => {
    if (createEvent.isSuccess && createEvent.data) {
      getAllEvents.refetch();
    }
  }, [createEvent.isSuccess && createEvent.data]);

  useEffect(() => {
    if (joinEvent.isSuccess && joinEvent.data) {
      getAllEvents.refetch();
      toast.success("You've successfully joined the event!");
      setSelectedEvent(null);
    }
  }, [joinEvent.isSuccess && joinEvent.data]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-8">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-playfair font-bold text-4xl text-[#2C3E50]">
            Events
          </h1>
          {user && user.role === "admin" && (
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Create New Event
            </button>
          )}
        </div>

        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl mb-8 text-[#2c5049]">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {events &&
              !!events.length &&
              events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"
                      alt="Workshop"
                      className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-playfair font-bold text-xl text-[#2C3E50] hover:text-[#64B5F6] transition-colors duration-300">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-1 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#656564] group-hover:text-[#64B5F6] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="font-montserrat text-[#656564] group-hover:text-[#64B5F6] transition-colors duration-300">
                        {event.participants.length} Participants
                      </span>
                    </div>
                  </div>
                  <p className="font-montserrat text-[#34495E] mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#FF7675] group-hover:text-[#64B5F6] transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-montserrat text-[#34495E] group-hover:text-[#64B5F6] transition-colors duration-300">
                      {event.time} - {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#74B9FF] group-hover:text-[#64B5F6] transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-montserrat text-[#34495E] group-hover:text-[#64B5F6] transition-colors duration-300">
                      {event.location}
                    </span>
                  </div>
                  {event.isPaid && (
                    <div className="flex items-center gap-2 mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#F1C40F]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-montserrat font-bold text-[#34495E]">
                        ${event.price.toFixed(2)}
                      </span>
                    </div>
                  )}
                  {(event.host || event.hostDescription) && (
                    <>
                      <hr className="m-4" />
                      <p>Host Info:</p>
                      {event.host && (
                        <div className="flex items-center gap-2 mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-[#239c25]"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M19.618 21.25c0-3.602-4.016-6.53-7.618-6.53s-7.618 2.928-7.618 6.53M12 11.456a4.353 4.353 0 1 0 0-8.706a4.353 4.353 0 0 0 0 8.706"
                            />
                          </svg>
                          <p className="font-montserrat text-[#34495E]">
                            {event.host}
                          </p>
                        </div>
                      )}
                      {event.hostDescription && (
                        <div className="flex items-center gap-2 mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="h-5 w-5 text-[#3f3dcf]"
                          >
                            <path
                              fill="currentColor"
                              d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM2 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"
                            />
                          </svg>
                          <p className="font-montserrat text-[#34495E]">
                            {event.hostDescription}
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  <button
                    onClick={() => handleViewDetails(event)}
                    className={`mt-5 w-full font-montserrat font-semibold py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${"bg-[#E3F2FD] text-[#64B5F6] hover:bg-[#64B5F6] hover:text-white"}`}
                  >
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Create Event Modal */}
      <EventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateEvent}
      />

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          event={selectedEvent}
          onJoin={handleJoinEvent}
        />
      )}
    </div>
  );
};

export default Event;
