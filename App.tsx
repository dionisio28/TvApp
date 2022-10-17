import 'react-native-gesture-handler';

import React from 'react';
import RootStack from './src/routes';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}
