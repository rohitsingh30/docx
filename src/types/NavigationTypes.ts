// Common types for navigation

export type Symptom = {
  id: string;
  name: string;
  severity: number;
  duration: string;
  description?: string;
};

export type HealthReport = {
  id?: string;
  patientId?: string;
  symptoms: Symptom[];
  possibleConditions: string[];
  recommendations: string[];
  shouldSeeDoctor: boolean;
  aiDiagnosis?: string;
  doctorVerification?: {
    doctorId: string;
    verifiedAt: string;
    comments: string;
    isVerified: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  consultationFee: number;
  availability: {
    days: string[];
    slots: string[];
  };
  qualifications: string[];
  about: string;
  image: string;
};

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  medicalHistory: string[];
  allergies: string[];
  currentMedications: string[];
  image?: string;
};

// Root Stack Navigator types
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  ChatBot: undefined;
  DoctorSearch: undefined;
  DoctorProfile: { doctorId: string };
  AppointmentBooking: { doctor?: { id: string; name: string; specialty: string } };
  AppointmentConfirmation: undefined;
  MedicalRecords: { report?: HealthReport };
  ReportDetail: { reportId: string; isReviewed?: boolean };
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

// Doctor specific navigation types
export type DoctorStackParamList = {
  DoctorDashboard: undefined;
  ReportVerification: undefined;
  AppointmentManagement: undefined;
  AvailabilitySettings: undefined;
  ConsultationSettings: undefined;
  DoctorProfile: { doctorId: string };
  DoctorChat: { chatId: string };
  PaymentHistory: undefined;
};

// Auth specific navigation types
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

