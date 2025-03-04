import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateSessionNote,
  useDeleteSessionNote,
  useGetAllSessionNotes,
  useGetSessionById,
} from "../services";
import { toast } from "react-toastify";
import { useUser } from "../../../context/user-context";

const useSessionDetailsController = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams<{
    sessionId: string;
  }>();

  const { user } = useUser();

  const getSessionDetails = useGetSessionById(sessionId);
  const getSessionNotes = useGetAllSessionNotes(sessionId);
  const createSessionNote = useCreateSessionNote(sessionId);
  const deleteSessionNote = useDeleteSessionNote();

  const [sessionData, setSessionData] = useState({
    therapistName: "",
    patientName: "",
    sessionDate: "",
  });

  const [notes, setNotes] = useState<
    {
      id: string;
      content: string;
      date: string;
      name: string;
      authorId: string;
    }[]
  >([]);

  const [newNote, setNewNote] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddNote = () => {
    if (newNote.trim() === "") return;
    createSessionNote.mutate({ commentText: newNote });
  };

  const handleDeleteNote = (noteId: string) => {
    deleteSessionNote.mutate(noteId);
  };

  useEffect(() => {
    if (deleteSessionNote.isSuccess) {
      getSessionNotes.refetch();
      toast.success("Note deleted successfully");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSessionNote.isSuccess]);

  useEffect(() => {
    if (createSessionNote.isSuccess) {
      setNewNote("");
      setIsAddingNote(false);
      toast.success("Note added successfully");
      getSessionNotes.refetch();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createSessionNote.isSuccess]);

  useEffect(() => {
    if (getSessionDetails.isSuccess && getSessionDetails.data) {
      setSessionData({
        therapistName: getSessionDetails.data.therapistName,
        patientName: getSessionDetails.data.clientName,
        sessionDate: new Date(
          getSessionDetails.data.sessionDateTime
        ).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }
  }, [getSessionDetails.isSuccess, getSessionDetails.data]);

  useEffect(() => {
    if (getSessionNotes.isSuccess && getSessionNotes.data) {
      const notesData = getSessionNotes.data.map((note) => ({
        id: note.id,
        content: note.commentText,
        name: note.authorName,
        date: new Date(note.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        authorId: note.authorId,
      }));
      setNotes(notesData);
    }
  }, [getSessionNotes.isSuccess, getSessionNotes.data]);

  return {
    isLoading: getSessionDetails.isLoading || getSessionNotes.isLoading,
    sessionData,
    newNote,
    isAddingNote,
    setNewNote,
    setIsAddingNote,
    handleAddNote,
    navigate,
    notes,
    handleDeleteNote,
    userId: user?.id,
  };
};
export default useSessionDetailsController;
