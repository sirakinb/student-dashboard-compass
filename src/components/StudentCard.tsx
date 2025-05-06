
import React, { useState } from 'react';
import { Star, Mail, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Student, RiskLevel } from '@/data/mockStudents';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface StudentCardProps {
  student: Student;
  onContact: (id: string) => void;
  onLogIntervention: (id: string) => void;
  onUpdateRisk?: (id: string, newRisk: RiskLevel) => void;
}

/**
 * Card component displaying student information and actions
 */
const StudentCard: React.FC<StudentCardProps> = ({ 
  student, 
  onContact, 
  onLogIntervention,
  onUpdateRisk
}) => {
  const { id, name, coachName, interviewRating, monthlyGoalProgress, risk } = student;
  const [isUpdating, setIsUpdating] = useState(false);

  const getRiskColor = () => {
    switch (risk) {
      case 'On Track':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'Needs Attention':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'At Risk':
        return 'bg-red-500/20 text-red-400 border border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  const handleRiskUpdate = (newRisk: string) => {
    if (onUpdateRisk && (newRisk === 'On Track' || newRisk === 'Needs Attention' || newRisk === 'At Risk')) {
      onUpdateRisk(id, newRisk as RiskLevel);
      setIsUpdating(false);
    }
  };

  return (
    <div className="glass-morphism p-4 rounded-xl">
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/students/${id}`} className="text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors">
            {name}
          </Link>
          <p className="text-sm text-gray-400">Coach: {coachName}</p>
        </div>
        {!isUpdating ? (
          <span 
            className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor()} cursor-pointer hover:opacity-80`}
            onClick={() => setIsUpdating(true)}
            title="Click to update risk status"
          >
            {risk}
          </span>
        ) : (
          <Select
            defaultValue={risk}
            onValueChange={handleRiskUpdate}
            onOpenChange={(open) => {
              if (!open) setIsUpdating(false);
            }}
          >
            <SelectTrigger className="w-[140px] h-7 text-xs">
              <SelectValue placeholder="Update risk" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="On Track" className="text-green-400">On Track</SelectItem>
              <SelectItem value="Needs Attention" className="text-yellow-400">Needs Attention</SelectItem>
              <SelectItem value="At Risk" className="text-red-400">At Risk</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-1">Interview Rating:</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < interviewRating ? 'text-yellow-400' : 'text-gray-700'}
                fill={i < interviewRating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
        <div className="mt-2">
          <span className="text-sm text-gray-400">
            Monthly Goal: {monthlyGoalProgress.completed} / {monthlyGoalProgress.total} Complete
          </span>
          <div className="progress-bar mt-1">
            <div
              className="progress-value"
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
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
        >
          <Mail size={16} />
          <span>Contact</span>
        </button>
        <button
          onClick={() => onLogIntervention(id)}
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-gray-600/20 text-gray-300 border border-gray-600/30 hover:bg-gray-600/30 transition-colors"
        >
          <FileText size={16} />
          <span>Log Intervention</span>
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
