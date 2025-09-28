'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
export interface AssessmentState {
  currentStep: 'welcome' | 'onboarding' | 'questionnaire' | 'results' | 'lead-capture';
  country: string;
  industry: string;
  selectedFrameworks: string[];
  answers: Record<string, number>;
  scores: Record<string, number>;
  benchmarks: Record<string, number>;
  leadData: {
    name: string;
    company: string;
    email: string;
    concern: string;
  };
}

export type AssessmentAction =
  | { type: 'SET_COUNTRY'; payload: string }
  | { type: 'SET_INDUSTRY'; payload: string }
  | { type: 'SET_FRAMEWORKS'; payload: string[] }
  | { type: 'SET_ANSWER'; payload: { questionId: string; answer: number } }
  | { type: 'CALCULATE_SCORES'; payload: Record<string, number> }
  | { type: 'SET_BENCHMARKS'; payload: Record<string, number> }
  | { type: 'SET_LEAD_DATA'; payload: Partial<AssessmentState['leadData']> }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'RESET_ASSESSMENT' };

const initialState: AssessmentState = {
  currentStep: 'welcome',
  country: '',
  industry: '',
  selectedFrameworks: [],
  answers: {},
  scores: {},
  benchmarks: {},
  leadData: {
    name: '',
    company: '',
    email: '',
    concern: '',
  },
};

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'SET_COUNTRY':
      return { ...state, country: action.payload };
    case 'SET_INDUSTRY':
      return { ...state, industry: action.payload };
    case 'SET_FRAMEWORKS':
      return { ...state, selectedFrameworks: action.payload };
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };
    case 'CALCULATE_SCORES':
      return { ...state, scores: action.payload };
    case 'SET_BENCHMARKS':
      return { ...state, benchmarks: action.payload };
    case 'SET_LEAD_DATA':
      return {
        ...state,
        leadData: { ...state.leadData, ...action.payload },
      };
    case 'NEXT_STEP':
      const steps: AssessmentState['currentStep'][] = ['welcome', 'onboarding', 'questionnaire', 'results', 'lead-capture'];
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex < steps.length - 1) {
        return { ...state, currentStep: steps[currentIndex + 1] };
      }
      return state;
    case 'PREVIOUS_STEP':
      const prevSteps: AssessmentState['currentStep'][] = ['welcome', 'onboarding', 'questionnaire', 'results', 'lead-capture'];
      const prevIndex = prevSteps.indexOf(state.currentStep);
      if (prevIndex > 0) {
        return { ...state, currentStep: prevSteps[prevIndex - 1] };
      }
      return state;
    case 'RESET_ASSESSMENT':
      return initialState;
    default:
      return state;
  }
}

const AssessmentContext = createContext<{
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
} | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}