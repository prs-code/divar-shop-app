import Auth from "pages/Auth";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
        <h1>پروژه دیوار</h1>
        <Auth />
        <Toaster 
            position="top-left"
            reverseOrder={false}
            toastOptions={{
                className: 'toast-alert',
            }}
        />
    </>
  );
}

export default App;
