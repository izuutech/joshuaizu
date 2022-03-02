import Head from 'next/head'
import Image from 'next/image'
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import BlogForm from '../../components/admincomp/BlogForm'
import Navigate from '../../components/admincomp/Navigate'




const queryClient= new QueryClient();


export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
        <div>
        <BlogForm />
        <Navigate />
        </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}
