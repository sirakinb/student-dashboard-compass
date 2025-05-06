import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Student } from '../types';

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const { data, error } = await supabase
          .from('students')
          .select('*');

        if (error) {
          throw error;
        }

        setStudents(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch students'));
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  return { students, loading, error };
} 