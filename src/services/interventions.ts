import { supabase } from '@/lib/supabase';
import type { Intervention, InterventionType } from '@/types';

interface CreateInterventionData {
  student_id: string;
  type: InterventionType;
  notes: string;
  coach_name: string;
}

export async function createIntervention(data: CreateInterventionData): Promise<Intervention> {
  const { data: intervention, error } = await supabase
    .from('interventions')
    .insert([data])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create intervention: ${error.message}`);
  }

  return intervention;
}

export async function deleteIntervention(id: string): Promise<void> {
  const { error } = await supabase
    .from('interventions')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to delete intervention: ${error.message}`);
  }
}

export async function getStudentInterventions(studentId: string): Promise<Intervention[]> {
  const { data: interventions, error } = await supabase
    .from('interventions')
    .select('*')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch interventions: ${error.message}`);
  }

  return interventions || [];
} 