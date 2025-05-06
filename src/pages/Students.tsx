
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
        <Card>
          <CardHeader>
            <CardTitle>Student Directory</CardTitle>
            <CardDescription>
              View and manage all enrolled students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-blue-50 p-6 mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student Management</h3>
              <p className="text-gray-600 max-w-md mb-6">
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
