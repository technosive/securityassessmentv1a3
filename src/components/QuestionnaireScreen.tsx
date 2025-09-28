'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info } from 'lucide-react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { questions, categories, frameworkLabels, maturityLevels } from '@/data/questions';

export default function QuestionnaireScreen() {
  const { state, dispatch } = useAssessment();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showEncouragement, setShowEncouragement] = useState(false);

  // Filter questions based on selected frameworks
  const filteredQuestions = questions.filter(q => 
    state.selectedFrameworks.includes(q.framework)
  );

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  // Group questions by category for progress tracking
  const categoryProgress = categories.map(category => {
    const categoryQuestions = filteredQuestions.filter(q => q.category === category);
    const answeredQuestions = categoryQuestions.filter(q => state.answers[q.id] !== undefined);
    return {
      category,
      total: categoryQuestions.length,
      answered: answeredQuestions.length,
      progress: categoryQuestions.length > 0 ? (answeredQuestions.length / categoryQuestions.length) * 100 : 0
    };
  });

  useEffect(() => {
    // Show encouragement messages at certain progress points
    if (progress > 25 && progress <= 26) {
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 3000);
    } else if (progress > 50 && progress <= 51) {
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 3000);
    } else if (progress > 75 && progress <= 76) {
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 3000);
    }
  }, [progress]);

  const handleAnswer = (answer: number) => {
    dispatch({
      type: 'SET_ANSWER',
      payload: { questionId: currentQuestion.id, answer }
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate scores and move to results
      calculateScores();
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      dispatch({ type: 'PREVIOUS_STEP' });
    }
  };

  const calculateScores = () => {
    const scores: Record<string, number> = {};
    
    state.selectedFrameworks.forEach(framework => {
      const frameworkQuestions = filteredQuestions.filter(q => q.framework === framework);
      const totalScore = frameworkQuestions.reduce((sum, question) => {
        const answer = state.answers[question.id] || 0;
        return sum + answer;
      }, 0);
      
      const maxScore = frameworkQuestions.length * 4;
      scores[framework] = Math.round((totalScore / maxScore) * 100);
    });

    // Set mock benchmarks
    const benchmarks: Record<string, number> = {
      'iso-27001': 72,
      'nca-ecc': 68,
      'uae-ia-nesa': 65,
      'pci-dss': 75,
      'pdpl': 70,
      'sama': 78,
      'nist-csf': 73,
      'cis-controls': 69,
      'gdpr': 71,
      'aramco-ccc': 82
    };

    dispatch({ type: 'CALCULATE_SCORES', payload: scores });
    dispatch({ type: 'SET_BENCHMARKS', payload: benchmarks });
  };

  const isAnswered = state.answers[currentQuestion.id] !== undefined;
  const currentAnswer = state.answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        {/* Header with Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Cybersecurity Assessment
            </h2>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            </div>
          </div>
          
          {/* Enhanced Progress Section */}
          <div className="space-y-3">
            {/* Main Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Progress value={progress} className="h-3 flex-1 mr-4" />
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 min-w-fit">
                  {Math.round(progress)}%
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>📊 Overall Progress</span>
                <span>⏱️ ~{Math.round((filteredQuestions.length - currentQuestionIndex - 1) * 0.75)} min remaining</span>
              </div>
            </div>

            {/* Category Progress with Enhanced Visuals */}
            <div className="grid grid-cols-5 gap-3">
              {categoryProgress.map((cat) => (
                <div key={cat.category} className="text-center group">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1 truncate group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                    {cat.category.split(' ')[0]}
                  </div>
                  <div className="relative">
                    <Progress value={cat.progress} className="h-2" />
                    <div className="text-xs text-slate-500 mt-1">
                      {cat.answered}/{cat.total}
                    </div>
                    {cat.progress === 100 && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-2 h-2 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Encouragement Message */}
        <AnimatePresence>
          {showEncouragement && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Great progress, keep going!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-lg border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      {frameworkLabels[currentQuestion.framework]}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {currentQuestion.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">
                      Question {currentQuestionIndex + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-relaxed">
                    {currentQuestion.text}
                  </CardTitle>
                  {currentQuestion.description && (
                    <CardDescription className="flex items-start gap-2 text-sm">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span className="text-slate-600 dark:text-slate-400">{currentQuestion.description}</span>
                    </CardDescription>
                  )}
                  {/* Question Context */}
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      <strong>💡 Why this matters:</strong> This question helps assess your organization's maturity in {currentQuestion.category.toLowerCase()}. 
                      Your answer will identify gaps and provide targeted recommendations for improvement.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2 flex-shrink-0 ml-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs text-slate-500 text-center">
                    {currentQuestion.framework.split('-')[0].toUpperCase()}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Enhanced Maturity Scale Options */}
              <div className="space-y-4">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>Please select your maturity level:</span>
                  <span className="text-xs text-slate-500">(Be honest - this helps identify real improvement areas)</span>
                </h4>
                <RadioGroup
                  value={currentAnswer?.toString() || ''}
                  onValueChange={(value) => handleAnswer(parseInt(value))}
                  className="space-y-3"
                >
                  {maturityLevels.map((level, index) => (
                    <div 
                      key={level.value} 
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                        currentAnswer === level.value 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                      onClick={() => handleAnswer(level.value)}
                    >
                      <RadioGroupItem 
                        value={level.value.toString()} 
                        id={`level-${level.value}`} 
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <Label 
                            htmlFor={`level-${level.value}`} 
                            className={`font-medium cursor-pointer text-sm ${
                              currentAnswer === level.value ? 'text-blue-700 dark:text-blue-300' : ''
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {index === 0 && '🔴'}
                              {index === 1 && '🟡'}
                              {index === 2 && '🟠'}
                              {index === 3 && '🟢'}
                              {level.label}
                            </span>
                          </Label>
                          <div className="text-xs text-slate-500">
                            Level {level.value}/4
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {level.description}
                        </p>
                        {index === 0 && (
                          <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded text-xs text-red-700 dark:text-red-300">
                            ⚠️ This indicates significant security gaps that need immediate attention
                          </div>
                        )}
                        {index === 3 && (
                          <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded text-xs text-green-700 dark:text-green-300">
                            ✅ Excellent! You're demonstrating strong security practices
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Enhanced Navigation */}
              <div className="flex justify-between pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
                <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                  <span>💡 Tip: Take your time to answer accurately</span>
                </div>
                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="flex items-center gap-2"
                >
                  {currentQuestionIndex === filteredQuestions.length - 1 ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      View Results
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Question Navigation Dots */}
        <div className="flex justify-center items-center space-x-3">
          <div className="text-xs text-slate-600 dark:text-slate-400">
            Question Navigation:
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {filteredQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`group relative w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center text-xs font-medium ${
                  index === currentQuestionIndex
                    ? 'bg-blue-600 text-white shadow-lg transform scale-110'
                    : state.answers[question.id] !== undefined
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                title={`Question ${index + 1}: ${question.category}`}
              >
                {index + 1}
                {index === currentQuestionIndex && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    Current
                  </div>
                )}
                {state.answers[question.id] !== undefined && index !== currentQuestionIndex && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-slate-900"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}