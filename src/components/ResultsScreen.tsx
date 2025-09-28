'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Download, Calendar, TrendingUp, Award, AlertTriangle, CheckCircle, Building, Globe, Shield } from 'lucide-react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { frameworkLabels, categories } from '@/data/questions';
import { generatePDFReport } from '@/utils/pdfGenerator';

// Mock data for radar chart
const radarData = [
  { category: 'Governance & Risk', score: 75, maxScore: 100 },
  { category: 'Access Control', score: 60, maxScore: 100 },
  { category: 'Data Protection', score: 80, maxScore: 100 },
  { category: 'Monitoring', score: 45, maxScore: 100 },
  { category: 'Vendor Security', score: 55, maxScore: 100 },
];

export default function ResultsScreen() {
  const { state, dispatch } = useAssessment();

  const overallScore = useMemo(() => {
    const scores = Object.values(state.scores);
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }, [state.scores]);

  const getScoreCategory = (score: number) => {
    if (score >= 71) return { label: 'Strong Posture', color: 'bg-green-500', textColor: 'text-green-800 dark:text-green-200' };
    if (score >= 41) return { label: 'Moderate Risk', color: 'bg-orange-500', textColor: 'text-orange-800 dark:text-orange-200' };
    return { label: 'High Risk', color: 'bg-red-500', textColor: 'text-red-800 dark:text-red-200' };
  };

  const getMaturityBadge = (score: number) => {
    if (score >= 80) return { label: 'Advanced', icon: Award, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' };
    if (score >= 60) return { label: 'Intermediate', icon: TrendingUp, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' };
    return { label: 'Basic', icon: AlertTriangle, color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' };
  };

  const scoreCategory = getScoreCategory(overallScore);
  const maturityBadge = getMaturityBadge(overallScore);

  const handleDownloadReport = async () => {
    const reportData = {
      name: state.leadData.name || 'User',
      company: state.leadData.company || 'Company',
      email: state.leadData.email || 'user@example.com',
      country: state.country,
      industry: state.industry,
      selectedFrameworks: state.selectedFrameworks,
      scores: state.scores,
      benchmarks: state.benchmarks,
      overallScore,
      assessmentDate: new Date().toLocaleDateString()
    };
    
    await generatePDFReport(reportData);
  };

  const handleGetFullReport = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-6">
        {/* Enhanced Header */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Your Cybersecurity Assessment Results
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Comprehensive analysis of your security posture across {state.selectedFrameworks.length} framework{state.selectedFrameworks.length > 1 ? 's' : ''}
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date().toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                {state.industry}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {state.country}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Overall Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Overall Security Score
              </CardTitle>
              <CardDescription className="text-base">
                Your cybersecurity maturity level across all assessed frameworks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-center justify-center space-x-12">
                {/* Enhanced Score Circle */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full border-8 border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden">
                      {/* Animated background circle */}
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        initial={{ background: "conic-gradient(#3b82f6 0deg, #3b82f6 0deg, transparent 0deg)" }}
                        animate={{ background: `conic-gradient(#3b82f6 0deg, #3b82f6 ${overallScore * 3.6}deg, transparent ${overallScore * 3.6}deg)` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                      <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div 
                            className="text-4xl font-bold text-slate-900 dark:text-slate-100"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                          >
                            {overallScore}
                          </motion.div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">out of 100</div>
                        </div>
                      </div>
                    </div>
                    {/* Floating badges */}
                    <motion.div 
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${scoreCategory.color}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {scoreCategory.label}
                    </motion.div>
                  </div>
                </div>
                
                {/* Enhanced Stats and Info */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Badge className={`${maturityBadge.color} text-sm py-2 px-3`}>
                        <maturityBadge.icon className="w-4 h-4 mr-2" />
                        {maturityBadge.label} Maturity
                      </Badge>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Cybersecurity Level
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="font-medium text-blue-800 dark:text-blue-200">Frameworks Assessed</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400">{state.selectedFrameworks.length} comprehensive standards</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <p className="font-medium text-green-800 dark:text-green-200">Assessment Status</p>
                          <p className="text-sm text-green-600 dark:text-green-400">Completed successfully</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <div>
                          <p className="font-medium text-purple-800 dark:text-purple-200">Assessment Date</p>
                          <p className="text-sm text-purple-600 dark:text-purple-400">{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Interpretation */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">What Your Score Means:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {overallScore >= 80 && "Excellent! Your organization demonstrates strong cybersecurity practices. Focus on maintaining and continuously improving your security posture."}
                  {overallScore >= 60 && overallScore < 80 && "Good progress! You have a solid foundation but there are opportunities for improvement. Focus on addressing the gaps identified in this assessment."}
                  {overallScore < 60 && "Your organization has significant cybersecurity gaps that need immediate attention. We recommend prioritizing the quick wins identified in your roadmap."}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Enhanced Framework Scores */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Framework Scores
                </CardTitle>
                <CardDescription>
                  Your performance across each cybersecurity framework compared to industry benchmarks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(state.scores).map(([framework, score]) => {
                  const benchmark = state.benchmarks[framework] || 0;
                  const category = getScoreCategory(score);
                  const difference = score - benchmark;
                  return (
                    <div key={framework} className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">
                              {frameworkLabels[framework]}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Badge className={`${category.textColor} text-xs`}>
                                {score}/100
                              </Badge>
                              {difference >= 5 && (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                                  +{difference} vs avg
                                </Badge>
                              )}
                              {difference < -5 && (
                                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs">
                                  {difference} vs avg
                                </Badge>
                              )}
                              {Math.abs(difference) < 5 && (
                                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs">
                                  ±{Math.abs(difference)} vs avg
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="relative">
                            <Progress value={score} className="h-3" />
                            <div 
                              className="absolute top-0 h-3 w-px bg-red-500"
                              style={{ left: `${benchmark}%` }}
                            />
                            <div 
                              className="absolute top-0 h-3 w-0.5 bg-slate-400"
                              style={{ left: `${benchmark}%` }}
                            >
                              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 whitespace-nowrap">
                                {benchmark}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-1">
                            <span>Your Score</span>
                            <span>Industry Average: {benchmark}</span>
                          </div>
                        </div>
                      </div>
                      {difference >= 10 && (
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded text-xs text-green-700 dark:text-green-300">
                          🎉 Outstanding performance! You're significantly above industry average.
                        </div>
                      )}
                      {difference <= -10 && (
                        <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded text-xs text-red-700 dark:text-red-300">
                          ⚠️ Below industry average. Consider focusing on this area for improvement.
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Domain Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Domain Breakdown</CardTitle>
                <CardDescription>
                  Performance across security domains
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {radarData.map((domain) => {
                  const category = getScoreCategory(domain.score);
                  return (
                    <div key={domain.category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">
                          {domain.category}
                        </span>
                        <Badge className={category.textColor}>
                          {domain.score}/100
                        </Badge>
                      </div>
                      <Progress value={domain.score} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommendations Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recommended Roadmap</CardTitle>
              <CardDescription>
                Prioritized actions to improve your cybersecurity posture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Quick Wins</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">0-3 months</p>
                  <ul className="text-xs text-green-600 dark:text-green-400 mt-2 space-y-1">
                    <li>• Implement MFA</li>
                    <li>• Security awareness training</li>
                    <li>• Document policies</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Short Term</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">3-6 months</p>
                  <ul className="text-xs text-blue-600 dark:text-blue-400 mt-2 space-y-1">
                    <li>• Penetration testing</li>
                    <li>• Data classification</li>
                    <li>• Vendor evaluation</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <Award className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Medium Term</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">6-12 months</p>
                  <ul className="text-xs text-orange-600 dark:text-orange-400 mt-2 space-y-1">
                    <li>• SOC/SIEM deployment</li>
                    <li>• Gap assessments</li>
                    <li>• Incident response testing</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">Strategic</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">12+ months</p>
                  <ul className="text-xs text-purple-600 dark:text-purple-400 mt-2 space-y-1">
                    <li>• ISO 27001 certification</li>
                    <li>• Privacy program</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="outline"
            onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Assessment
          </Button>
          
          <Button
            onClick={handleDownloadReport}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Summary Report
          </Button>
          
          <Button
            onClick={handleGetFullReport}
            variant="default"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            Get Full Report & Recommendations
          </Button>
        </motion.div>
      </div>
    </div>
  );
}