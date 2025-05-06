
import React from 'react';
import Layout from '@/components/Layout';

/**
 * Coaches page (stub component)
 */
const Coaches: React.FC = () => {
  return (
    <Layout title="Coaches">
      <div className="bg-[#1a1c25] p-6 rounded-lg shadow-md border border-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-white">Coaches Management</h2>
        <p className="text-gray-400">
          {/* TODO: Implement coaches management */}
          This is a placeholder for the coaches management page. The actual implementation will 
          include coach profiles, student assignments, and performance metrics.
        </p>
      </div>
    </Layout>
  );
};

export default Coaches;
