// Common styles for consistent UI across the app
export const colors = {
  primary: '#6366F1', // Indigo-600 for primary actions
  primaryLight: '#EEF2FF', // Indigo-50 for backgrounds
  secondary: '#4B5563', // Gray-600 for secondary text
  success: '#059669', // Emerald-600 for success states
  danger: '#DC2626', // Red-600 for errors/alerts
  warning: '#D97706', // Amber-600 for warnings
  background: '#F9FAFB', // Gray-50 for main background
  white: '#FFFFFF',
  border: '#E5E7EB', // Gray-200 for borders
};

export const typography = {
  heading: {
    h1: 'text-2xl font-bold text-gray-900',
    h2: 'text-xl font-semibold text-gray-900',
    h3: 'text-lg font-semibold text-gray-900',
  },
  body: {
    regular: 'text-base text-gray-600',
    small: 'text-sm text-gray-500',
  }
};

export const spacing = {
  container: 'px-4 py-6 md:px-6 lg:px-8',
  section: 'mb-8',
  card: 'p-6',
};

export const components = {
  card: 'bg-white rounded-lg shadow-sm border border-gray-100',
  button: {
    primary: 'bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50',
    secondary: 'bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors',
    outline: 'border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors',
  },
  input: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
  select: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
  badge: {
    success: 'bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm',
    warning: 'bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm',
    danger: 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm',
  },
};

export const layout = {
  header: 'flex items-center justify-between h-16 px-6 border-b border-gray-200',
  sidebar: 'w-64 border-r border-gray-200 bg-white',
  content: 'flex-1 overflow-y-auto',
  footer: 'border-t border-gray-200 px-6 py-4',
};

export const animations = {
  transition: 'transition-all duration-200 ease-in-out',
  hover: 'hover:shadow-lg hover:-translate-y-1',
};

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

// Common utility classes
export const utils = {
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexStart: 'flex items-center justify-start',
  gridCols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
};
