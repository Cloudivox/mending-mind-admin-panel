import { useUser } from "../../../context/user-context";
import { IEvents } from "../services/create-event/create-event";

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: IEvents;
  onJoin: () => void;
}

const EventDetailModal = ({
  isOpen,
  onClose,
  event,
  onJoin,
}: EventDetailModalProps) => {
  const { user } = useUser();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-playfair font-bold text-2xl text-[#2C3E50]">
              {event.name}
            </h2>
            <button
              onClick={onClose}
              className="text-[#2C3E50] hover:text-[#16A085] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"
              alt={event.name}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          <div className="space-y-4">
            <p className="font-montserrat text-[#34495E]">
              {event.description}
            </p>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#74B9FF]"
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
              <span className="font-montserrat text-[#34495E]">
                {event.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF7675]"
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
              <span className="font-montserrat text-[#34495E]">
                {event.date} at {event.time} - {event.time}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#656564]"
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
              <span className="font-montserrat text-[#34495E]">
                {event.participants.length} Participants
              </span>
            </div>
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

            {event.isPaid && (
              <div className="flex items-center gap-2">
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
            {user && user.role === "client" && (
              <div className="pt-4">
                <button
                  onClick={onJoin}
                  className={`w-full py-3 rounded-xl font-montserrat font-semibold transition-colors ${"bg-[#16A085] text-white hover:bg-[#457067]"}`}
                >
                  Join Event
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
