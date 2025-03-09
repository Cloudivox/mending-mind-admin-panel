import type React from "react";
import { useEffect, useRef, useState } from "react";
import Pdf from "../pdf";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useCreateSessionPackage } from "../services";
import { useGetSessionById } from "../../session/services";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/loader";
type TherapyGoalFormProps = {};

interface StylesType {
  primaryLightBlue: string;
  primaryYellow: string;
  primaryBlack: string;
  secondaryRed: string;
  secondaryOrange: string;
  secondaryPurple: string;
  playfairFont: string;
  montserratFont: string;
}

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  accentColor: string;
  styles: StylesType;
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  styles: StylesType;
}

// Custom checkbox component
const CustomCheckbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  accentColor,
  styles,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <div
        onClick={onChange}
        style={{
          width: "16px",
          height: "16px",
          border: `1px solid ${accentColor}`,
          borderRadius: "3px",
          backgroundColor: checked ? accentColor : "transparent",
          cursor: "pointer",
          position: "relative",
          marginRight: "8px",
        }}
      >
        {checked && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <path
              d="M4 8L7 11L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <label
        htmlFor={id}
        style={{
          fontFamily: styles.montserratFont,
          fontSize: "0.9rem",
          cursor: "pointer",
        }}
      >
        {label}
      </label>
    </div>
  );
};

// Custom button component
const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  backgroundColor,
  textColor,
  styles,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        color: textColor,
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        fontFamily: styles.montserratFont,
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        margin: "0 8px",
      }}
    >
      {children}
    </button>
  );
};

// Custom card component
const Card: React.FC<{
  children: React.ReactNode;
  headerColor?: string;
  borderColor?: string;
  title?: string;
  styles: StylesType;
}> = ({ children, headerColor, borderColor, title, styles }) => {
  return (
    <div
      style={{
        border: `2px solid ${borderColor || "#e1e1e1"}`,
        borderRadius: "12px",
        marginBottom: "2rem",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {title && (
        <div
          style={{
            backgroundColor: headerColor || "#f5f5f5",
            padding: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: styles.playfairFont,
              margin: 0,
              color: styles.primaryBlack,
              fontSize: "1.75rem",
            }}
          >
            {title}
          </h2>
        </div>
      )}
      <div style={{ padding: "1.5rem" }}>{children}</div>
    </div>
  );
};

// Main component
const CreatePackage: React.FC<TherapyGoalFormProps> = () => {
  // Style definitions
  const styles: StylesType = {
    // Primary colors from brand book
    primaryLightBlue: "#A9D7D8", // Light blue color from palette
    primaryYellow: "#F3C745", // Yellow color from palette
    primaryBlack: "#231F20", // Black color from palette

    // Secondary colors from brand book
    secondaryRed: "#D3573E", // Red color from palette
    secondaryOrange: "#F47F57", // Orange color from palette
    secondaryPurple: "#9A95CD", // Purple color from palette

    // Font families
    playfairFont: '"Playfair Display", serif',
    montserratFont: '"Montserrat", sans-serif',
  };

  // Data for therapies and goals
  const therapies = [
    "Cognitive Behavioral Therapy",
    "Dialectical Behavior Therapy",
    "Psychodynamic Therapy",
    "Humanistic Therapy",
    "Client-Centered Therapy",
    "Gestalt Therapy",
    "Existential Therapy",
    "Interpersonal Therapy",
    "Solution-Focused Brief Therapy",
    "Acceptance and Commitment Therapy",
    "Mindfulness-Based Cognitive Therapy",
    "Narrative Therapy",
    "Rational Emotive Behavior Therapy",
    "Trauma-Focused Cognitive Behavioral Therapy",
    "Complex Trauma Therapy",
    "Family Systems Therapy",
    "Emotionally Focused Therapy",
    "Expressive Arts Therapy",
    "Somatic Experiencing Therapy",
    "Clinical Hypnotherapy",
    "Couples Counseling",
    "Mindfulness Based Therapy",
    "Family Therapy",
    "Emotions-Focused Therapy",
    "Positive Psychotherapy",
    "Person-Centered Therapy",
    "Integrative Therapy",
    "Attachment-Based Therapy",
    "Compassion-Focused Therapy",
    "Relational Therapy",
    "Somatic Therapy",
    "Transpersonal Therapy",
    "Internal Family Systems Therapy (IFS)",
    "Play Therapy",
    "Dance/Movement Therapy",
    "Clinical Hypnotherapy",
    "Somatic Hypnotherapy",
    "Shadow Work Therapy",
    "Regression Based therapies",
    "Inner child therapy",
    "Trauma-Informed Expressive Arts Therapy",
  ];

  const goals = [
    "Improve Coping Skills",
    "Reduce Symptoms of Anxiety",
    "Enhance Emotional Regulation",
    "Address Depression",
    "Increase Self-Esteem and Self-Worth",
    "Promote Healing from Trauma",
    "Develop Healthy Relationships",
    "Improve Communication Skills",
    "Set and Achieve Life Goals",
    "Overcome Unhealthy Habits and Addictions",
    "Enhance Problem-Solving Skills",
    "Reduce Symptoms of PTSD",
    "Increase Resilience",
    "Improve Sleep Hygiene",
    "Strengthen Boundaries",
    "Develop Mindfulness",
    "Improve Self-Awareness",
    "Enhance Conflict Resolution Skills",
    "Manage Anger",
    "Enhance Social Skills",
    "Improve Decision-Making Skills",
    "Heal from Grief and Loss",
    "Foster Meaning and Purpose",
    "Achieve Work-Life Balance",
    "Promote Cognitive Flexibility",
    "Support Personal Growth and Self-Actualization",
    "Strengthen Family Dynamics",
    "Overcome Phobias and Fears",
    "Enhance Parenting Skills",
    "Improve Life Satisfaction",
    "Build emotional resilience",
    "Enhance focus & concentration",
    "Develop stress management skills",
    "Improve adaptability to change",
    "Strengthen coping strategies",
    "Foster self-confidence & self-worth",
    "Improve decision-making skills",
    "Cultivate mindfulness & gratitude",
    "Strengthen relationships & communication",
    "Support healthy habits & routines",
    "Promote self-expression & creativity",
    "Encourage work-life balance",
    "Manage fears & anxieties",
    "Heal from grief & trauma",
    "Foster a sense of purpose",
  ];

  // State to store selected therapies and goals
  const [formData, setFormData] = useState<any>({
    name: "",
    age: "",
    gender: "",
    therapist: "",
    clientId: "",
    therapistId: "",
    therapistName: "",
    sessionId: "",
    selectedTherapies: {},
    selectedGoals: {},
  });
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const { sessionId } = useParams<{ sessionId: string }>();
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const getSessionById = useGetSessionById(sessionId);
  const createPackage = useCreateSessionPackage();
  const navigate = useNavigate();
  const pdfRef = useRef<any>("");

  const handlePrint = () => {
    const printContent = pdfRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent; 
    window.print();

    document.body.innerHTML = originalContent; 
    window.location.reload(); 
  };

  // Handle therapy checkbox changes
  const handleTherapyChange = (therapy: string) => {
    setFormData((prev: any) => ({
      ...prev,
      selectedTherapies: {
        ...prev.selectedTherapies,
        [therapy]: !prev.selectedTherapies[therapy],
      },
    }));
  };

  // Handle goal checkbox changes
  const handleGoalChange = (goal: string) => {
    setFormData((prev: any) => ({
      ...prev,
      selectedGoals: {
        ...prev.selectedGoals,
        [goal]: !prev.selectedGoals[goal],
      },
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  // Preview PDF
  const handlePreview = () => {
    setIsPreviewing(true);
  };

  // Send request
  const handleSubmit = () => {
    const newFormData = {
      name: formData?.name + formData?.therapistName,
      clientId: formData?.clientId,
      therapistId: formData?.therapistId,
      sessionId: formData?.sessionId,
      totalSessions: formData?.therapist,
      sessions: Object.keys(formData?.selectedTherapies).filter(
        (key) => formData?.selectedTherapies[key]
      ),
      goals: Object.keys(formData.selectedGoals).filter(
        (key) => formData.selectedGoals[key]
      ),
    };
    createPackage.mutate(newFormData);
  };

  useEffect(() => {
    if (getSessionById.isSuccess && getSessionById.data) {
      setFormData((prev: any) => ({
        ...prev,
        name: getSessionById.data.clientName,
        age: getSessionById.data.clientAge,
        gender: getSessionById.data.clientGender,
        clientId: getSessionById.data.clientId,
        therapistId: getSessionById.data.therapistId,
        sessionId: getSessionById.data._id,
        therapistName: getSessionById.data.therapistName,
      }));
    }
  }, [getSessionById.isSuccess, getSessionById.data]);

  useEffect(() => {
    if (createPackage.isSuccess) {
      navigate("/package");
      toast.success("Session Package created successfully!");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPackage.isSuccess]);

  return (
    <div
      style={{
        fontFamily: styles.montserratFont,
        color: styles.primaryBlack,
        background: "rgba(169, 215, 216, 0.1)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {isPreviewing ? (
        <Modal
          isOpen={isPreviewing}
          onRequestClose={() => setIsPreviewing(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              width: "60%", // Adjust width to fit the PDF
              maxWidth: "655px", // Set a reasonable max width
              height: "90vh", // Ensure it fits the screen
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0",
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              inset: "unset", // Removes the default positioning
            },
          }}
        >
          <div className="mt-16 flex justify-between items-center w-full p-4 bg-white border-b">
            <h2 className="text-lg font-semibold">PDF Viewer</h2>
            <div className="flex gap-2 justify-end items-center">
              <CustomButton
                onClick={handlePrint}
                backgroundColor={styles.primaryBlack}
                textColor="white"
                styles={styles}
              >
                Print
              </CustomButton>
              <button
                onClick={() => setIsPreviewing(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                X
              </button>
            </div>
          </div>
          <div className="w-full h-full p-4 bg-gray-100">
            <div ref={pdfRef}>
              <Pdf formData={formData} />
            </div>
          </div>
        </Modal>
      ) : (
        <>
          {getSessionById.isLoading ? (
            <Loader />
          ) : (
            <>
              <h1
                style={{
                  fontFamily: styles.playfairFont,
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "2rem",
                  color: styles.primaryBlack,
                }}
              >
                Please Add Details
              </h1>
              <Card
                borderColor={styles.primaryYellow}
                headerColor={styles.primaryYellow}
                title="Personal Information"
                styles={styles}
              >
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontFamily: styles.montserratFont,
                        fontWeight: "600",
                        color: styles.primaryBlack,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: `1px solid ${styles.secondaryPurple}`,
                        fontFamily: styles.montserratFont,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      style={{
                        display: "block",
                        fontWeight: "600",
                        color: styles.primaryBlack,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Enter your age"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: `1px solid ${styles.secondaryPurple}`,
                        fontFamily: styles.montserratFont,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontWeight: "600",
                        color: styles.primaryBlack,
                        marginBottom: "0.5rem",
                      }}
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: `1px solid ${styles.secondaryPurple}`,
                        fontFamily: styles.montserratFont,
                      }}
                      onChange={(event: any) =>
                        handleSelectChange(event.target.value, "gender")
                      }
                      value={formData.gender}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontWeight: "600",
                        color: styles.primaryBlack,
                        marginBottom: "0.5rem",
                      }}
                      htmlFor="therapist"
                    >
                      Total session number
                    </label>
                    <input
                      id="therapist"
                      name="therapist"
                      type="number"
                      value={formData.therapist}
                      onChange={handleInputChange}
                      placeholder="Enter total session number"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: `1px solid ${styles.secondaryPurple}`,
                        fontFamily: styles.montserratFont,
                      }}
                    />
                  </div>
                </div>
              </Card>

              <Card
                borderColor={styles.primaryLightBlue}
                headerColor={styles.primaryLightBlue}
                title="Therapies"
                styles={styles}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {therapies.map((therapy) => (
                    <CustomCheckbox
                      key={therapy}
                      id={`therapy-${therapy}`}
                      label={therapy}
                      checked={formData.selectedTherapies[therapy] || false}
                      onChange={() => handleTherapyChange(therapy)}
                      accentColor={styles.secondaryRed}
                      styles={styles}
                    />
                  ))}
                </div>
              </Card>

              <Card
                borderColor={styles.primaryYellow}
                headerColor={styles.primaryYellow}
                title="Goals"
                styles={styles}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {goals.map((goal) => (
                    <CustomCheckbox
                      key={goal}
                      id={`goal-${goal}`}
                      label={goal}
                      checked={formData.selectedGoals[goal] || false}
                      onChange={() => handleGoalChange(goal)}
                      accentColor={styles.secondaryRed}
                      styles={styles}
                    />
                  ))}
                </div>
              </Card>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
              >
                <CustomButton
                  onClick={handlePreview}
                  backgroundColor={styles.secondaryOrange}
                  textColor="white"
                  styles={styles}
                >
                  Preview PDF
                </CustomButton>
                <CustomButton
                  onClick={handleSubmit}
                  backgroundColor={styles.secondaryPurple}
                  textColor="white"
                  styles={styles}
                >
                  Submit Request
                </CustomButton>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreatePackage;
