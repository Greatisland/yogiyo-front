import './globals.css';
import type { Metadata } from 'next';
import RecoilRootWrapper from './RecoilRootWrapper';
import { noto_sans } from '@/lib/font';
import ClientComponent from './ClientComponent';

export const metadata: Metadata = {
  title: 'yogiyo front test',
  description: 'test app',
  keywords: ['yogiyo', 'clone'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={noto_sans.className}>
        <RecoilRootWrapper>
          <ClientComponent>{children}</ClientComponent>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}