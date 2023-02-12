import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-supabase';
import Navbar from "../components/ui/Navbar/Navbar";
import Event from "../components/ui/newEventPage/Event";
const supabaseKey = process.env.PUBLIC_SUPABASE_KEY || ''
const supabaseUrl = process.env.SUPABASE_URL || ''
const client = createClient(supabaseUrl, supabaseKey)
const events = () => {
  return (
    <div className="">
      <Navbar />
      <Provider value={client}>
        <Event />
      </Provider>
    </div>
  );
};

export default events;
