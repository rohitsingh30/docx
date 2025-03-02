import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define doctor type
export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  avatar: string;
};

// Define the types for all the route parameters
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  ChatBot: undefined;
  DoctorSearch: undefined;
  DoctorProfile: {
    doctorId: string;
  };
  AppointmentBooking: {
    doctor?: Doctor;
  };
  AppointmentConfirmation: undefined;
  MedicalRecords: {
    report?: any;
  };
  ReportDetail: {
    reportId: string;
    isReviewed: boolean;
  };
};

// For doctor-specific screens
export type DoctorStackParamList = {
  DoctorDashboard: undefined;
  ReportVerification: undefined;
  PatientDetail: {
    patientId: string;
  };
  AppointmentManagement: undefined;
  AvailabilitySettings: undefined;
  ConsultationSettings: undefined;
};

// Common navigation prop type
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type HealthReport = {
  symptoms: Symptom[];
  possibleConditions: string[];
  recommendations: string[];
  shouldSeeDoctor: boolean;
};

type Symptom = {
  id: string;
  name: string;
  severity: number;
  duration: string;
};
