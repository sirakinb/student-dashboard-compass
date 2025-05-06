
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Student detail page (stub component)
 */
const StudentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout title="Student Details">
      <div className="grid gap-6">
        <Card className="glass-morphism border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gradient">Student Profile</CardTitle>
            <CardDescription className="text-gray-400">
              Student ID: {id}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-sidebar-accent p-6 mb-4">
                <User size={32} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gradient">Student Information</h3>
              <p className="text-gray-400 max-w-md mb-6">
                This is a placeholder for the student details page. The actual implementation will display 
                complete student information, academic records, progress tracking, and intervention history.
              </p>
              {/* TODO: Implement student details */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StudentDetails;
