import Head from 'next/head'
import Image from 'next/image'
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TechnologyForm from '../../components/admincomp/TechnologyForm'
import Navigate from '../../components/admincomp/Navigate'
import UserContextProvider from '../../components/contexts/userContext';




const queryClient= new QueryClient();


export default function Home() {

  return (
    <UserContextProvider>
    <QueryClientProvider client={queryClient}>
        <div>
          
        <TechnologyForm />
        <Navigate />
        </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    </UserContextProvider>
  )
}
