import { render } from '@testing-library/react';
import Summary from './components/Summary';
import Chart from './components/chart'

test('renders summary', () => {
  render(<Summary summary={''} />);
});

