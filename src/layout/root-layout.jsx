import { Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider} from '@clerk/clerk-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
export default function RootLayout() {
  const navigate = useNavigate();
 
  return (
    <div className='bg-slate-900'>
        <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
            <Navbar/>
        <main>
            <Outlet />
        </main>
        <Footer/>
        </ClerkProvider>

    </div>
  )
}