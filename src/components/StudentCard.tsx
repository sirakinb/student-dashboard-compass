
import React from 'react';
import { Star, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Student } from '@/data/mockStudents';

interface StudentCardProps {
  student: Student;
  onContact: (id: string) => void;
  onLogIntervention: (id: string) => void;
}

/**
 * Card component displaying student information and actions
 */
const StudentCard: React.FC<StudentCardProps> = ({ student, onContact, onLogIntervention }) => {
  const { id, name, coachName, interviewRating, monthlyGoalProgress, risk } = student;

  const getRiskColor = () => {
    switch (risk) {
      case 'On Track':
        return 'bg-green-100 text-green-800';
      case 'Needs Attention':
        return 'bg-yellow-100 text-yellow-800';
      case 'At Risk':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/students/${id}`} className="text-lg font-medium text-blue-600 hover:underline">
            {name}
          </Link>
          <p className="text-sm text-gray-600">Coach: {coachName}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor()}`}>
          {risk}
        </span>
      </div>

      <div className="mt-3">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-1">Interview Rating:</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < interviewRating ? 'text-yellow-400' : 'text-gray-300'}
                fill={i < interviewRating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
        <div className="mt-1">
          <span className="text-sm text-gray-600">
            Monthly Goal: {monthlyGoalProgress.completed} / {monthlyGoalProgress.total} Complete
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{
                width: `${(monthlyGoalProgress.completed / monthlyGoalProgress.total) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onContact(id)}
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
        >
          <Mail size={16} />
          <span>Contact</span>
        </button>
        <button
          onClick={() => onLogIntervention(id)}
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <FileText size={16} />
          <span>Log Intervention</span>
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
