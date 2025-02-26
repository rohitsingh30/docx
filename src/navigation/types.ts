export type RootStackParamList = {
  Dashboard: undefined;
  ChatBot: undefined;
  DoctorSearch: undefined;
  DoctorProfile: { doctorId: string };
  AppointmentBooking: { doctor: { id: string; name: string; specialty: string } };
  AppointmentConfirmation: undefined;
  MedicalRecords: { report: HealthReport };
  ReportDetail: undefined;
  Profile: undefined;
  Settings: undefined;
  Help: undefined;
  Login: undefined;
  SignUp: undefined;
};

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
