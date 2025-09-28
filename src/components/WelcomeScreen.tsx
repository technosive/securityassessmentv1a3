'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, TrendingUp, FileText } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Cybersecurity Self-Assessment
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Assess your cybersecurity posture in minutes. Get a personalized report with benchmarks and recommendations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="text-center">
            <CardHeader>
              <Clock className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-lg">Quick Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complete in just 5-7 minutes with our streamlined questionnaire
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="w-8 h-8 mx-auto text-green-600 dark:text-green-400 mb-2" />
              <CardTitle className="text-lg">Industry Benchmarking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Compare your scores against industry standards and best practices
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <FileText className="w-8 h-8 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
              <CardTitle className="text-lg">Actionable Report</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive a detailed PDF report with roadmap and recommendations
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* Standards Covered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 text-center">
            Frameworks & Standards Covered
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['ISO 27001', 'NCA ECC', 'UAE IA/NESA', 'PCI-DSS', 'PDPL', 'SAMA', 'NIST CSF', 'CIS Controls', 'GDPR', 'Aramco CCC'].map((standard) => (
              <span
                key={standard}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {standard}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              onClick={onStart}
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg"
            >
              <motion.span
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mr-2"
              >
                <Shield className="w-5 h-5" />
              </motion.span>
              Start Assessment
            </Button>
          </motion.div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Expected time: 5-7 minutes
          </p>
        </motion.div>
      </div>
    </div>
  );
}