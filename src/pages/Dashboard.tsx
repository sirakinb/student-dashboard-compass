
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import StudentCard from '@/components/StudentCard';
import Filters from '@/components/Filters';
import { mockStudents, Student, RiskLevel } from '@/data/mockStudents';
import { toast } from '@/hooks/use-toast';
import ContactStudentDialog from '@/components/ContactStudentDialog';
import LogInterventionDialog from '@/components/LogInterventionDialog';

/**
 * CSM Dashboard page displaying student status columns with filtering capabilities
 */
const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [filters, setFilters] = useState({
    search: '',
    risk: 'All' as RiskLevel | 'All',
    coach: 'All' as string | 'All',
  });

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isInterventionDialogOpen, setIsInterventionDialogOpen] = useState(false);

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
    const student = students.find((s) => s.id === id);
    if (student) {
      setSelectedStudent(student);
      setIsContactDialogOpen(true);
    }
  };

  const handleLogIntervention = (id: string) => {
    const student = students.find((s) => s.id === id);
    if (student) {
      setSelectedStudent(student);
      setIsInterventionDialogOpen(true);
    }
  };

  const handleContactSubmit = (message: string) => {
    if (selectedStudent) {
      // TODO: Implement actual message sending logic
      toast({
        title: 'Message Sent',
        description: `Message sent to ${selectedStudent.name}`,
      });
    }
  };

  const handleInterventionSubmit = (data: { type: string; notes: string }) => {
    if (selectedStudent) {
      // TODO: Implement actual intervention logging logic
      toast({
        title: 'Intervention Logged',
        description: `Intervention logged for ${selectedStudent.name}`,
      });
    }
  };

  const handleUpdateRisk = (id: string, newRisk: RiskLevel) => {
    // Update the student's risk level
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, risk: newRisk };
      }
      return student;
    });
    
    setStudents(updatedStudents);
    
    // Get the student name for the toast
    const student = students.find((s) => s.id === id);
    if (student) {
      toast({
        title: 'Risk Status Updated',
        description: `${student.name}'s risk level is now ${newRisk}`,
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
    <Layout title="CSM">
      <Filters students={students} onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* On Track Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-medium text-white">On Track</h2>
            <span className="ml-2 text-sm text-gray-400">({onTrackStudents.length})</span>
          </div>
          <div className="space-y-4">
            {onTrackStudents.length === 0 ? (
              <div className="glass-morphism p-4 rounded-xl text-gray-400 italic">
                No students in this category
              </div>
            ) : (
              onTrackStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onContact={handleContactStudent}
                  onLogIntervention={handleLogIntervention}
                  onUpdateRisk={handleUpdateRisk}
                />
              ))
            )}
          </div>
        </div>

        {/* Needs Attention Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-medium text-white">Needs Attention</h2>
            <span className="ml-2 text-sm text-gray-400">({needsAttentionStudents.length})</span>
          </div>
          <div className="space-y-4">
            {needsAttentionStudents.length === 0 ? (
              <div className="glass-morphism p-4 rounded-xl text-gray-400 italic">
                No students in this category
              </div>
            ) : (
              needsAttentionStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onContact={handleContactStudent}
                  onLogIntervention={handleLogIntervention}
                  onUpdateRisk={handleUpdateRisk}
                />
              ))
            )}
          </div>
        </div>

        {/* At Risk Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <h2 className="text-lg font-medium text-white">At Risk</h2>
            <span className="ml-2 text-sm text-gray-400">({atRiskStudents.length})</span>
          </div>
          <div className="space-y-4">
            {atRiskStudents.length === 0 ? (
              <div className="glass-morphism p-4 rounded-xl text-gray-400 italic">
                No students in this category
              </div>
            ) : (
              atRiskStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onContact={handleContactStudent}
                  onLogIntervention={handleLogIntervention}
                  onUpdateRisk={handleUpdateRisk}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {selectedStudent && (
        <>
          <ContactStudentDialog
            isOpen={isContactDialogOpen}
            onClose={() => setIsContactDialogOpen(false)}
            studentName={selectedStudent.name}
            onSubmit={handleContactSubmit}
          />
          <LogInterventionDialog
            isOpen={isInterventionDialogOpen}
            onClose={() => setIsInterventionDialogOpen(false)}
            studentName={selectedStudent.name}
            onSubmit={handleInterventionSubmit}
          />
        </>
      )}
    </Layout>
  );
};

export default Dashboard;
