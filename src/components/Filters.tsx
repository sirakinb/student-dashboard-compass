
import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { RiskLevel, Student } from '@/data/mockStudents';

interface FiltersProps {
  students: Student[];
  onFilterChange: (filters: {
    search: string;
    risk: RiskLevel | 'All';
    coach: string | 'All';
  }) => void;
}

/**
 * Component for filtering student data by search term, risk level, and coach
 */
const Filters: React.FC<FiltersProps> = ({ students, onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [risk, setRisk] = useState<RiskLevel | 'All'>('All');
  const [coach, setCoach] = useState<string | 'All'>('All');

  // Get unique coaches from student data
  const coaches = React.useMemo(() => {
    const coachSet = new Set<string>(students.map((student) => student.coachName));
    return Array.from(coachSet);
  }, [students]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Trigger filter change when any filter changes
  useEffect(() => {
    onFilterChange({
      search: debouncedSearch,
      risk,
      coach,
    });
  }, [debouncedSearch, risk, coach, onFilterChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 w-full rounded-lg glass-morphism py-2.5 px-3 text-sm border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
        />
      </div>

      <div>
        <select
          value={risk}
          onChange={(e) => setRisk(e.target.value as RiskLevel | 'All')}
          className="w-full rounded-lg glass-morphism py-2.5 px-3 text-sm border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
        >
          <option value="All">All Risk Levels</option>
          <option value="On Track">On Track</option>
          <option value="Needs Attention">Needs Attention</option>
          <option value="At Risk">At Risk</option>
        </select>
      </div>

      <div>
        <select
          value={coach}
          onChange={(e) => setCoach(e.target.value)}
          className="w-full rounded-lg glass-morphism py-2.5 px-3 text-sm border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
        >
          <option value="All">All Coaches</option>
          {coaches.map((coachName) => (
            <option key={coachName} value={coachName}>
              {coachName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
