import React from 'react';
import { format } from 'date-fns';
import { Mail, Phone, Users, FileText, Trash2 } from 'lucide-react';
import type { Intervention } from '@/types';
import { deleteIntervention } from '@/services/interventions';
import { toast } from '@/hooks/use-toast';

interface InterventionHistoryProps {
  interventions: Intervention[];
  isLoading: boolean;
  onInterventionDeleted: () => void;
}

const getInterventionIcon = (type: string) => {
  switch (type) {
    case 'email':
      return <Mail className="w-4 h-4" />;
    case 'call':
      return <Phone className="w-4 h-4" />;
    case 'meeting':
      return <Users className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

const InterventionHistory: React.FC<InterventionHistoryProps> = ({ 
  interventions, 
  isLoading,
  onInterventionDeleted 
}) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteIntervention(id);
      onInterventionDeleted();
      toast({
        title: "Intervention deleted",
        description: "The intervention record has been removed.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete the intervention.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (interventions.length === 0) {
    return (
      <div className="text-center p-4 text-gray-400">
        No interventions recorded yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {interventions.map((intervention) => (
        <div
          key={intervention.id}
          className="flex gap-3 p-3 rounded-lg glass-morphism border border-gray-800/50"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
            {getInterventionIcon(intervention.type)}
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm font-medium text-blue-400 capitalize">
                  {intervention.type} Intervention
                </span>
                <p className="text-xs text-gray-400 mt-0.5">
                  by {intervention.coach_name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {format(new Date(intervention.created_at), 'MMM d, yyyy')}
                </span>
                <button
                  onClick={() => handleDelete(intervention.id)}
                  className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  title="Delete intervention"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-300">{intervention.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterventionHistory; 