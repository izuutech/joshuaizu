import Head from 'next/head'
import Image from 'next/image'
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import LoginForm from '../../components/admincomp/LoginForm'
import Navigate from '../../components/admincomp/Navigate'
import UserContextProvider from '../../components/contexts/userContext';



const queryClient= new QueryClient();


export default function Login() {
  return (
    <UserContextProvider>
    <QueryClientProvider client={queryClient}>
        <div>
        <LoginForm />
        <Navigate />
        </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    </UserContextProvider>
  )
}
