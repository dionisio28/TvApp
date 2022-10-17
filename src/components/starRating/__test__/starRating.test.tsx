import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../starRating.component';

describe('StarRating', () => {
  describe('The rating was passed', () => {
    it('should render the text of rating', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);

      expect(getByText('7')).toBeTruthy();
    });

    it('should render the star icon of rating', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);
      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });
  describe('The rating was NOT passed', () => {
    it('rendering nothing', () => {
      const {container} = render(<StarRating />);
      expect(container.children).toEqual([]);
    });
  });
});
