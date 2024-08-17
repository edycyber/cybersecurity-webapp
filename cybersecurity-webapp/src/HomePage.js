// components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

function HomePage() {
  const [redeemCode, setRedeemCode] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const user = supabase.auth.user();
    if (user) {
      const { data, error } = await supabase
        .from('users')
        .select('redeem_code')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user data:', error);
      } else {
        setRedeemCode(data.redeem_code);
      }
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    history.push('/');
  }

  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Logout</button>
        <Link to="/user">User Page</Link>
      </nav>
      <h1>Welcome to Your Cybersecurity Dashboard</h1>
      <p>Your Redeem Code: {redeemCode}</p>
    </div>
  );
}

export default HomePage;