import Loader from "../../../components/loader";
import useSessionDetailsController from "./session-details-controller";

const SessionDetails = () => {
  const {
    sessionData,
    newNote,
    isAddingNote,
    setNewNote,
    setIsAddingNote,
    handleAddNote,
    navigate,
    notes,
    isLoading,
    handleDeleteNote,
    userId,
  } = useSessionDetailsController();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                className="p-1 mr-3 text-black hover:text-gray-700"
                title="back"
                onClick={() => navigate(-1)}
              >
                {/* Back Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-black">Session Details</h1>
            </div>
          </div>
        </div>
      </header>

      {isLoading ? (
        <Loader />
      ) : (
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Session Info Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Therapist */}
              <div>
                <p className="text-sm font-montserrat text-gray-500 mb-1">
                  Therapist
                </p>
                <p className="font-montserrat font-bold text-black">
                  {sessionData.therapistName}
                </p>
              </div>
              {/* Patient */}
              <div>
                <p className="text-sm font-montserrat text-gray-500 mb-1">
                  Patient
                </p>
                <p className="font-montserrat font-bold text-black">
                  {sessionData.patientName}
                </p>
              </div>
              {/* Session Date */}
              <div>
                <p className="text-sm font-montserrat text-gray-500 mb-1">
                  Session Date
                </p>
                <p className="font-montserrat font-bold text-black">
                  {sessionData.sessionDate}
                </p>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-montserrat font-bold text-black">
                Session Notes
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsAddingNote(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple hover:text-black text-white font-montserrat font-bold rounded-lg transition-colors"
                >
                  {/* Plus SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add Note
                </button>
                {/* <button className="flex items-center gap-2 px-4 py-2 bg-purple hover:text-black text-white font-montserrat font-bold rounded-lg transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
        </svg>
        Upload
      </button> */}
              </div>
            </div>

            {/* Add Note Form */}
            {isAddingNote && (
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Write your session notes here..."
                  className="w-full h-32 p-3 mb-3 border rounded-lg font-montserrat resize-none focus:outline-none focus:ring-2 focus:ring-purple"
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsAddingNote(false)}
                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-montserrat font-bold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddNote}
                    className="px-4 py-2 bg-black hover:bg-gray-800 text-white  font-montserrat font-bold rounded-lg transition-colors"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            )}

            {/* Notes List */}
            {notes.length > 0 ? (
              <div className="space-y-4">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-montserrat text-gray-500">
                        {note.date}
                      </span>
                      <div className="flex space-x-2">
                        <p className="text-gray-500">
                          ~ {note.name}{" "}
                          {userId && userId === note.authorId ? "(You)" : ""}{" "}
                        </p>
                        <button
                          className="text-gray-400 hover:text-[#E07A5F]"
                          onClick={() => handleDeleteNote(note.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="font-montserrat text-black whitespace-pre-wrap">
                      {note.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="font-montserrat text-gray-500">
                  No notes have been added yet.
                </p>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default SessionDetails;
