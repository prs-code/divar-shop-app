import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from 'router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import defaultOptions from 'configs/reactQuery';

function App() {
    const reactQuery = new QueryClient({ defaultOptions });

    return (
        <>
            <QueryClientProvider client={reactQuery}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
                <Toaster 
                    position="top-left"
                    reverseOrder={false}
                    toastOptions={{
                        className: 'toast-alert',
                    }}
                />
            </QueryClientProvider>
        </>
    );
}

export default App;
