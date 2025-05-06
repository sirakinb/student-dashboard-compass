
import React from 'react';
import Layout from '@/components/Layout';
import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Coaches page (stub component)
 */
const Coaches: React.FC = () => {
  return (
    <Layout title="Coaches">
      <div className="grid gap-6">
        <Card className="glass-morphism border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gradient">Coaches Management</CardTitle>
            <CardDescription className="text-gray-400">
              Manage coaching staff and assignments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-sidebar-accent p-6 mb-4">
                <User size={32} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gradient">Coach Directory</h3>
              <p className="text-gray-400 max-w-md mb-6">
                This is a placeholder for the coaches management page. The actual implementation will 
                include coach profiles, student assignments, and performance metrics.
              </p>
              {/* TODO: Implement coach management tools */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Coaches;
