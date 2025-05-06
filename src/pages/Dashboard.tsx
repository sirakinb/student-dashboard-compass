
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import StudentCard from '@/components/StudentCard';
import Filters from '@/components/Filters';
import { mockStudents, Student, RiskLevel } from '@/data/mockStudents';
import { toast } from '@/components/ui/use-toast';

/**
 * Dashboard page displaying student status columns with filtering capabilities
 */
const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [filters, setFilters] = useState({
    search: '',
    risk: 'All' as RiskLevel | 'All',
    coach: 'All' as string | 'All',
  });

  useEffect(() => {
    // TODO: replace with Supabase fetch
    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    const filtered = students.filter((student) => {
      // Filter by search term (student name)
      const matchesSearch =
        filters.search === '' ||
        student.name.toLowerCase().includes(filters.search.toLowerCase());

      // Filter by risk level
      const matchesRisk = filters.risk === 'All' || student.risk === filters.risk;

      // Filter by coach
      const matchesCoach = filters.coach === 'All' || student.coachName === filters.coach;

      return matchesSearch && matchesRisk && matchesCoach;
    });

    setFilteredStudents(filtered);
  }, [students, filters]);

  const handleFilterChange = (newFilters: {
    search: string;
    risk: RiskLevel | 'All';
    coach: string | 'All';
  }) => {
    setFilters(newFilters);
  };

  const handleContactStudent = (id: string) => {
    // Placeholder for contacting a student
    const student = students.find((s) => s.id === id);
    if (student) {
      toast({
        title: 'Contact Student',
        description: `Contacting ${student.name}...`,
      });
    }
  };

  const handleLogIntervention = (id: string) => {
    // Placeholder for logging an intervention
    const student = students.find((s) => s.id === id);
    if (student) {
      toast({
        title: 'Log Intervention',
        description: `Logging intervention for ${student.name}...`,
      });
    }
  };

  // Group students by risk level
  const onTrackStudents = filteredStudents.filter((student) => student.risk === 'On Track');
  const needsAttentionStudents = filteredStudents.filter(
    (student) => student.risk === 'Needs Attention'
  );
  const atRiskStudents = filteredStudents.filter((student) => student.risk === 'At Risk');

  return (
    <Layout title="Dashboard">
      <Filters students={students} onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* On Track Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-medium">On Track</h2>
            <span className="ml-2 text-sm text-gray-500">({onTrackStudents.length})</span>
          </div>
          <div className="space-y-4">
            {onTrackStudents.length === 0 ? (
              <p className="text-gray-500 italic p-4 bg-gray-50 rounded-md border border-gray-100">
                No students in this category
              </p>
            ) : (
              onTrackStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onContact={handleContactStudent}
                  onLogIntervention={handleLogIntervention}
                />
              ))
            )}
          </div>
        </div>

        {/* Needs Attention Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-medium">Needs Attention</h2>
            <span className="ml-2 text-sm text-gray-500">({needsAttentionStudents.length})</span>
          </div>
          <div className="space-y-4">
            {needsAttentionStudents.length === 0 ? (
              <p className="text-gray-500 italic p-4 bg-gray-50 rounded-md border border-gray-100">
                No students in this category
              </p>
            ) : (
              needsAttentionStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onContact={handleContactStudent}
                  onLogIntervention={handleLogIntervention}
                />
              ))
            )}
          </div>
        </div>

        {/* At Risk Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-medium">At Risk</h2>
            <span className="ml-2 text-sm text-gray-500">({atRiskStudents.length})</span>
          </div>
          <div className="space-y-4">
            {atRiskStudents.length === 0 ? (
              <p className="text-gray-500 italic p-4 bg-gray-50 rounded-md border border-gray-100">
                No students in this category
              </p>
            ) : (
              atRiskStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onContact={handleContactStudent}
                  onLogIntervention={handleLogIntervention}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
