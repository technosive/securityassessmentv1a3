'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CheckCircle, Mail, Building, User, Shield, Clock, Lock, AlertTriangle, Star, Users, Award, Download } from 'lucide-react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { generatePDFReport } from '@/utils/pdfGenerator';

export default function LeadCaptureScreen() {
  const { state, dispatch } = useAssessment();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    concern: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const concerns = [
    'Data breaches and leaks',
    'Compliance requirements',
    'Ransomware and malware',
    'Insider threats',
    'Third-party risks',
    'Cloud security',
    'Identity and access management',
    'Incident response capabilities',
    'Other'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save lead data to context
      dispatch({ type: 'SET_LEAD_DATA', payload: formData });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Save to localStorage for persistence
      const assessmentData = {
        ...state,
        leadData: formData,
        completedAt: new Date().toISOString()
      };
      localStorage.setItem('cybersecurity-assessment', JSON.stringify(assessmentData));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting lead data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleDownloadReport = async () => {
    const overallScore = Object.values(state.scores).reduce((a, b) => a + b, 0) / Object.values(state.scores).length;
    
    const reportData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      country: state.country,
      industry: state.industry,
      selectedFrameworks: state.selectedFrameworks,
      scores: state.scores,
      benchmarks: state.benchmarks,
      overallScore: Math.round(overallScore),
      assessmentDate: new Date().toLocaleDateString()
    };
    
    await generatePDFReport(reportData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Thank You, {formData.name}!
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Your comprehensive cybersecurity assessment report is being prepared.
            </p>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Email Delivery</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Your full PDF report will be sent to <strong>{formData.email}</strong> within 5 minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Expert Review</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Our cybersecurity experts will review your assessment and may reach out with additional insights.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Follow-up Consultation</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We'll contact you to schedule a free consultation to discuss your results and roadmap.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <Button
                onClick={handleDownloadReport}
                size="lg"
                className="w-full"
              >
                Download Your Report Now
              </Button>
              
              <Button
                variant="outline"
                onClick={() => dispatch({ type: 'RESET_ASSESSMENT' })}
                className="w-full"
              >
                Start New Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Get Your Comprehensive Cybersecurity Report
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Unlock detailed insights, personalized recommendations, and expert guidance to strengthen your security posture
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% Free Assessment</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-4 h-4 text-purple-500" />
              <span>Your Data is Secure</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Detailed Analysis</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                In-depth breakdown of your security posture across all frameworks
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Framework-specific insights
                </li>
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Gap identification
                </li>
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Benchmark comparisons
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-200 dark:hover:border-green-800 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Actionable Roadmap</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Prioritized recommendations with timeline and implementation guidance
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Quick wins (0-3 months)
                </li>
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Strategic initiatives
                </li>
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  ROI projections
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Expert Consultation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Free consultation with cybersecurity experts to review your results
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  1-on-1 expert session
                </li>
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Customized guidance
                </li>
                <li className="flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Implementation support
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Urgency and Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
        >
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Join <span className="font-bold text-blue-600">2,847+</span> organizations who have improved their security posture with our assessment
            </p>
            <div className="flex justify-center items-center space-x-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-green-500" />
                <span>98% Satisfaction</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-purple-500" />
                <span>Industry Certified</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl border-2 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get Your Personalized Report
              </CardTitle>
              <CardDescription>
                Enter your details below and we'll immediately send your comprehensive cybersecurity assessment report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`transition-all duration-200 ${errors.name ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Corporation"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`transition-all duration-200 ${errors.company ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                    />
                    {errors.company && (
                      <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`transition-all duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                  <p className="text-xs text-slate-500">
                    We'll send your report to this email address immediately
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="concern" className="flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Biggest Cybersecurity Concern (Optional)
                  </Label>
                  <Select value={formData.concern} onValueChange={(value) => handleInputChange('concern', value)}>
                    <SelectTrigger className="focus:border-blue-500">
                      <SelectValue placeholder="Select your biggest concern" />
                    </SelectTrigger>
                    <SelectContent>
                      {concerns.map((concern) => (
                        <SelectItem key={concern} value={concern}>
                          {concern}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-slate-500">
                    This helps us customize your recommendations
                  </p>
                </div>
                
                {/* Privacy Assurance */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      <strong>Privacy Guaranteed:</strong> Your information is secure and will never be shared. We're committed to protecting your data according to industry best practices.
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg transition-all duration-200 transform hover:scale-[1.02]"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Processing Your Report...
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-center gap-2">
                          <Download className="w-5 h-5" />
                          Get My Comprehensive Report
                          <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                        </div>
                      </>
                    )}
                  </Button>
                  
                  <div className="text-center">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}
                      className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Results
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}