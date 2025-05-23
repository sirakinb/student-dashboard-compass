
import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Students page that displays a list of all students
 */
const Students: React.FC = () => {
  return (
    <Layout title="Students">
      <div className="grid gap-6">
        <Card className="glass-morphism border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gradient">Student Directory</CardTitle>
            <CardDescription className="text-gray-400">
              View and manage all enrolled students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-sidebar-accent p-6 mb-4">
                <Users size={32} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gradient">Student Management</h3>
              <p className="text-gray-400 max-w-md mb-6">
                This is a placeholder for the students directory page. The actual implementation will include
                a searchable and filterable table of all students with options to view details, edit records,
                and manage student assignments.
              </p>
              {/* TODO: Implement student table/grid with search and filters */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Students;
