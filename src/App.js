import Gallery from './gallery.js';
import './App.css';
import Task1 from './/programs/Task1.js';
import App from './/effects/effect.js';
import Cat from './fetching/fetch.js';
import Age from './Ageapp/predictAge.js';
import Excuse from './excuse/excuseapp.js';
import { Profile } from './statemanage/profile.js';
import { Contact } from './statemanage/contact.js';
import { Home } from './statemanage/home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Tan } from './react-query/tanstack.js';

export const AppContext = createContext();

export default function Page() {
  const [username, setusername] = useState("midhul");
  console.log(username);

  const client = new QueryClient({                    //rules for calling components and fetching 
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setusername }}>
        <QueryClientProvider client={client}>
          <Router>
            <div>
              <a href='/'>Home</a>
              <a href='/profile'>Profile</a>
              <a href='/contact'>Contact</a>

            </div>
            <Routes>
              <Route path='/' element={<Tan />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />


            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

