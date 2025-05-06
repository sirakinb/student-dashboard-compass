import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

export default function Coaches() {
  return (
    <Layout title="Coaches">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-200 mb-2">Coach Directory</h1>
        <p className="text-gray-400 mb-8">View and manage all coaches</p>

        <div className="flex flex-col items-center justify-center py-12 text-center glass-morphism rounded-xl p-8">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Coach Management</h2>
          <p className="text-gray-400 max-w-md">
            This is a placeholder for the coaches directory page. The actual implementation will include
            a searchable and filterable table of all coaches with options to view details, edit records,
            and manage coach assignments.
          </p>
        </div>
      </div>
    </Layout>
  );
}
