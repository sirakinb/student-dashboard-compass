
import React from 'react';
import Layout from '@/components/Layout';
import { Settings as SettingsIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Settings page (stub component)
 */
const Settings: React.FC = () => {
  return (
    <Layout title="Settings">
      <div className="grid gap-6">
        <Card className="glass-morphism border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gradient">Application Settings</CardTitle>
            <CardDescription className="text-gray-400">
              Configure system preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-sidebar-accent p-6 mb-4">
                <SettingsIcon size={32} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gradient">System Configuration</h3>
              <p className="text-gray-400 max-w-md mb-6">
                This is a placeholder for the application settings page. The actual implementation will 
                include user preferences, notification settings, and system configuration options.
              </p>
              {/* TODO: Implement settings options */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
