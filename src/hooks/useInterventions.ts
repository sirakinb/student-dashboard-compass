import { useState, useEffect } from 'react';
import { getStudentInterventions } from '@/services/interventions';
import type { Intervention } from '@/types';

export function useInterventions(studentId: string | null) {
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!studentId) {
      setInterventions([]);
      return;
    }

    async function fetchInterventions() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getStudentInterventions(studentId);
        setInterventions(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch interventions'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchInterventions();
  }, [studentId]);

  return { interventions, isLoading, error };
} 