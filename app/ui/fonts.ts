import { Inter, Lusitana } from 'next/font/google';
 
// Ensure that you are importing from the correct package and use default imports
export const inter = new Inter({ subsets: ['latin'] });
export const lusitana = new Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
