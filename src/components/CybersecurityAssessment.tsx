'use client';

import { useAssessment } from '@/contexts/AssessmentContext';
import WelcomeScreen from './WelcomeScreen';
import OnboardingScreen from './OnboardingScreen';
import QuestionnaireScreen from './QuestionnaireScreen';
import ResultsScreen from './ResultsScreen';
import LeadCaptureScreen from './LeadCaptureScreen';

export default function CybersecurityAssessment() {
  const { state, dispatch } = useAssessment();

  const renderScreen = () => {
    switch (state.currentStep) {
      case 'welcome':
        return <WelcomeScreen onStart={() => dispatch({ type: 'NEXT_STEP' })} />;
      case 'onboarding':
        return <OnboardingScreen />;
      case 'questionnaire':
        return <QuestionnaireScreen />;
      case 'results':
        return <ResultsScreen />;
      case 'lead-capture':
        return <LeadCaptureScreen />;
      default:
        return <WelcomeScreen onStart={() => dispatch({ type: 'NEXT_STEP' })} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderScreen()}
    </div>
  );
}