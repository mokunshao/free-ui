import React, { useState } from 'react';
import './rating.scss';
import { joinedClass } from '../utils/joinedClass';
import { classes } from '../utils/classes';
import Star from './star';

export const baseClass = joinedClass('rating');

interface Props{
  className?: string;
  max: number;
  value: number|null;
  onChange: (value: number) => void;
}

const Rating: React.FC<Props> = (props) => {
  const {
    className, max, value, onChange, ...rest
  } = props;

  const [override, setOverride] = useState<number|null>(null);

  const stars = [];

  for (let index = 1; index <= max; index += 1) {
    stars.push(<Star
      lighten={index <= (override || value || 0)}
      index={index}
      key={index}
      setOverride={setOverride}
      setRating={onChange}
    />);
  }


  return (
    <div className={classes(baseClass(), className)} {...rest}>
      {stars}
    </div>
  );
};

export default Rating;