'use client';

import React, { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';

const Counter = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const [count, setCount] = useState(0);

  if ((!isLoaded, !isSignedIn)) return null;
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};

export default Counter;
