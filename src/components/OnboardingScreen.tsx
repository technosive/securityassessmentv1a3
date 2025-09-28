'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Globe, Building, Shield } from 'lucide-react';
import { useAssessment } from '@/contexts/AssessmentContext';

const countries = [
  'Saudi Arabia',
  'UAE',
  'Qatar',
  'Other GCC',
  'International'
];

const industries = [
  'Banking',
  'Healthcare',
  'Government',
  'Retail',
  'Logistics',
  'Oil & Gas',
  'SaaS/Tech',
  'Other'
];

const frameworks = [
  { 
    id: 'iso-27001', 
    name: 'ISO 27001', 
    description: 'International standard for information security management systems',
    icon: '🔒',
    complexity: 'Medium',
    estimatedTime: '15-20 min',
    category: 'International Standards',
    relevance: 'High'
  },
  { 
    id: 'nca-ecc', 
    name: 'NCA ECC', 
    description: 'Saudi Arabia Essential Cybersecurity Controls - mandatory for government entities',
    icon: '🇸🇦',
    complexity: 'High',
    estimatedTime: '20-25 min',
    category: 'National Standards',
    relevance: 'Critical'
  },
  { 
    id: 'uae-ia-nesa', 
    name: 'UAE IA/NESA', 
    description: 'UAE Information Assurance Standards for government and critical infrastructure',
    icon: '🇦🇪',
    complexity: 'High',
    estimatedTime: '18-22 min',
    category: 'National Standards',
    relevance: 'High'
  },
  { 
    id: 'pci-dss', 
    name: 'PCI-DSS', 
    description: 'Payment Card Industry Data Security Standard for payment processing',
    icon: '💳',
    complexity: 'Medium',
    estimatedTime: '12-15 min',
    category: 'Industry Specific',
    relevance: 'High for Banking/Retail'
  },
  { 
    id: 'pdpl', 
    name: 'PDPL', 
    description: 'Saudi Personal Data Protection Law for data privacy compliance',
    icon: '🛡️',
    complexity: 'Medium',
    estimatedTime: '10-12 min',
    category: 'Privacy Laws',
    relevance: 'High'
  },
  { 
    id: 'sama', 
    name: 'SAMA', 
    description: 'Saudi Arabian Monetary Authority Cybersecurity Framework for financial sector',
    icon: '🏦',
    complexity: 'High',
    estimatedTime: '15-18 min',
    category: 'Financial Regulations',
    relevance: 'Critical for Banking'
  },
  { 
    id: 'nist-csf', 
    name: 'NIST CSF', 
    description: 'US framework for improving critical infrastructure cybersecurity',
    icon: '🇺🇸',
    complexity: 'Medium',
    estimatedTime: '12-15 min',
    category: 'International Standards',
    relevance: 'High'
  },
  { 
    id: 'cis-controls', 
    name: 'CIS Controls', 
    description: 'Prioritized set of actions for cyber defense',
    icon: '🎯',
    complexity: 'Low',
    estimatedTime: '8-10 min',
    category: 'Best Practices',
    relevance: 'Medium'
  },
  { 
    id: 'gdpr', 
    name: 'GDPR', 
    description: 'General Data Protection Regulation for EU data subjects',
    icon: '🇪🇺',
    complexity: 'High',
    estimatedTime: '14-17 min',
    category: 'Privacy Laws',
    relevance: 'Medium'
  },
  { 
    id: 'aramco-ccc', 
    name: 'Aramco CCC', 
    description: 'Saudi Aramco Cybersecurity Controls for third-party vendors and contractors',
    icon: '🛢️',
    complexity: 'High',
    estimatedTime: '25-30 min',
    category: 'Industry Specific',
    relevance: 'Critical for Oil & Gas'
  }
];

export default function OnboardingScreen() {
  const { state, dispatch } = useAssessment();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const handleCountrySelect = (country: string) => {
    dispatch({ type: 'SET_COUNTRY', payload: country });
  };

  const handleIndustrySelect = (industry: string) => {
    dispatch({ type: 'SET_INDUSTRY', payload: industry });
    // Auto-map frameworks based on country and industry
    autoMapFrameworks(country, industry);
  };

  const autoMapFrameworks = (country: string, industry: string) => {
    let mappedFrameworks: string[] = [];
    
    // Base frameworks for everyone
    mappedFrameworks.push('iso-27001', 'nist-csf', 'cis-controls');
    
    // Country-specific frameworks
    if (country === 'Saudi Arabia') {
      mappedFrameworks.push('nca-ecc', 'pdpl');
      if (industry === 'Banking') {
        mappedFrameworks.push('sama', 'pci-dss');
      }
      if (industry === 'Oil & Gas') {
        mappedFrameworks.push('aramco-ccc');
      }
    } else if (country === 'UAE') {
      mappedFrameworks.push('uae-ia-nesa');
    }
    
    // Industry-specific frameworks
    if (industry === 'Banking' || industry === 'Retail') {
      mappedFrameworks.push('pci-dss');
    }
    
    // Oil & Gas industry gets Aramco CCC regardless of country (as they may work with Aramco)
    if (industry === 'Oil & Gas') {
      mappedFrameworks.push('aramco-ccc');
    }
    
    if (country === 'International' || industry === 'SaaS/Tech') {
      mappedFrameworks.push('gdpr');
    }
    
    // Remove duplicates and set
    mappedFrameworks = [...new Set(mappedFrameworks)];
    setSelectedFrameworks(mappedFrameworks);
  };

  const handleFrameworkToggle = (frameworkId: string, checked: boolean) => {
    if (checked) {
      setSelectedFrameworks([...selectedFrameworks, frameworkId]);
    } else {
      setSelectedFrameworks(selectedFrameworks.filter(id => id !== frameworkId));
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      dispatch({ type: 'SET_FRAMEWORKS', payload: selectedFrameworks });
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      dispatch({ type: 'PREVIOUS_STEP' });
    }
  };

  const isNextDisabled = () => {
    if (currentStep === 1) return !state.country;
    if (currentStep === 2) return !state.industry;
    if (currentStep === 3) return selectedFrameworks.length === 0;
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Setup Your Assessment
            </h2>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Step {currentStep} of 3
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <motion.div
              initial={{ width: '33.33%' }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="bg-blue-600 h-2 rounded-full"
            />
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Select Your Country
                </CardTitle>
                <CardDescription>
                  Choose your primary country of operation to determine applicable cybersecurity frameworks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={state.country} onValueChange={handleCountrySelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state.country && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    Selected: {state.country}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Select Your Industry
                </CardTitle>
                <CardDescription>
                  Choose your industry sector to identify relevant compliance requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={state.industry} onValueChange={handleIndustrySelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state.industry && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    Selected: {state.industry}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Select Assessment Frameworks
                </CardTitle>
                <CardDescription>
                  Based on your selections, we've recommended the following frameworks. You can adjust as needed.
                  <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> Select frameworks that are most relevant to your business. Critical frameworks are marked with 🔥
                    </p>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Framework Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedFrameworks.length}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Selected</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {selectedFrameworks.reduce((total, id) => {
                        const framework = frameworks.find(f => f.id === id);
                        return total + (framework ? parseInt(framework.estimatedTime.split('-')[0]) : 0);
                      }, 0)}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Min Minutes</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {selectedFrameworks.filter(id => {
                        const framework = frameworks.find(f => f.id === id);
                        return framework && framework.relevance === 'Critical';
                      }).length}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Critical</div>
                  </div>
                </div>
                
                {/* Framework Categories */}
                <div className="space-y-4">
                  {['National Standards', 'International Standards', 'Industry Specific', 'Privacy Laws', 'Financial Regulations', 'Best Practices'].map(category => {
                    const categoryFrameworks = frameworks.filter(f => f.category === category);
                    if (categoryFrameworks.length === 0) return null;
                    
                    return (
                      <div key={category} className="space-y-2">
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm border-b pb-1">
                          {category}
                        </h4>
                        <div className="grid gap-3">
                          {categoryFrameworks.map((framework) => (
                            <div
                              key={framework.id}
                              className={`flex items-start space-x-3 p-4 border rounded-lg transition-all duration-200 hover:shadow-md ${
                                selectedFrameworks.includes(framework.id) 
                                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <Checkbox
                                  id={framework.id}
                                  checked={selectedFrameworks.includes(framework.id)}
                                  onCheckedChange={(checked) => 
                                    handleFrameworkToggle(framework.id, checked as boolean)
                                  }
                                />
                                <div className="text-2xl">{framework.icon}</div>
                              </div>
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                  <label
                                    htmlFor={framework.id}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                  >
                                    {framework.name}
                                    {framework.relevance === 'Critical' && (
                                      <span className="ml-2 text-orange-500">🔥</span>
                                    )}
                                  </label>
                                  <div className="flex items-center space-x-2">
                                    <Badge variant={framework.complexity === 'High' ? 'destructive' : framework.complexity === 'Medium' ? 'default' : 'secondary'}>
                                      {framework.complexity}
                                    </Badge>
                                    {selectedFrameworks.includes(framework.id) && (
                                      <Badge variant="outline">Selected</Badge>
                                    )}
                                  </div>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                  {framework.description}
                                </p>
                                <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                                  <span>⏱️ {framework.estimatedTime}</span>
                                  <span>📂 {framework.category}</span>
                                  {framework.relevance === 'Critical' && (
                                    <span className="text-orange-600 dark:text-orange-400 font-medium">Critical for your industry</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="text-sm text-slate-600 dark:text-slate-400 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span>{selectedFrameworks.length} framework(s) selected</span>
                    <span>
                      Estimated time: {selectedFrameworks.reduce((total, id) => {
                        const framework = frameworks.find(f => f.id === id);
                        return total + (framework ? parseInt(framework.estimatedTime.split('-')[0]) : 0);
                      }, 0)}-{selectedFrameworks.reduce((total, id) => {
                        const framework = frameworks.find(f => f.id === id);
                        return total + (framework ? parseInt(framework.estimatedTime.split('-')[1]) : 0);
                      }, 0)} minutes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className="flex items-center gap-2"
          >
            {currentStep === 3 ? 'Start Assessment' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}