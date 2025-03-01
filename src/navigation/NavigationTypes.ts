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
  title: string;
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

export type Appointment = {
  id: string;
  doctorId: string;
  patientId: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  type: 'in-person' | 'video';
  reason: string;
  notes?: string;
};

// Auth Stack Navigator types
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

// User Stack Navigator types
export type UserStackParamList = {
  Dashboard: undefined;
  ChatBot: undefined;
  DoctorSearch: undefined;
  DoctorProfile: { doctorId: string };
  AppointmentBooking: { doctor?: Doctor };
  AppointmentConfirmation: { appointmentId: string };
  AppointmentList: undefined;
  AppointmentDetail: { appointmentId: string };
  MedicalRecords: { report?: HealthReport };
  ReportDetail: { reportId: string; isReviewed?: boolean };
  Profile: undefined;
};

// Doctor specific navigation types
export type DoctorStackParamList = {
  DoctorDashboard: undefined;
  ReportVerification: undefined;
  ReportDetail: { reportId: string };
  AppointmentManagement: undefined;
  AppointmentDetail: { appointmentId: string };
  AvailabilitySettings: undefined;
  ConsultationSettings: undefined;
  DoctorProfile: { doctorId: string };
  DoctorChat: { chatId: string };
  ConsultationRequests: undefined;
  ConsultationRequestDetail: { requestId: string };
};

// Combined root stack type for app-wide navigation
export type RootStackParamList = AuthStackParamList & UserStackParamList & DoctorStackParamList;
