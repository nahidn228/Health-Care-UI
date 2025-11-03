import PublicNavbar from '@/components/shared/PublicNavbar';
import { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen max-w-7xl px-2 overflow-x-hidden mx-auto">
    <PublicNavbar />
      {children}
    </div>
  );
};

export default CommonLayout;