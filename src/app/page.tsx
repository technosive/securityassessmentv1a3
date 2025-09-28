'use client';

import { AssessmentProvider } from '@/contexts/AssessmentContext';
import CybersecurityAssessment from '@/components/CybersecurityAssessment';

export default function Home() {
  return (
    <AssessmentProvider>
      <CybersecurityAssessment />
    </AssessmentProvider>
  );
}