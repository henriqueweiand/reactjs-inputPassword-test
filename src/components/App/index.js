import React from 'react';
import InputPassword from '~/components/InputPassword';

import { Container } from './styles';

const App = () => {
  const rules = [
    {
      rule: 'exists:@',
      description: 'Pelo menos um @',
    },
    {
      rule: 'min:6',
      description: 'Pelo menos 6 caracteres',
    },
    {
      rule: 'max:8',
      description: 'No máximo 8 caracteres',
    },
  ];

  return (
    <Container>
      <InputPassword rules={rules} />
    </Container>
  );
};

export default App;
