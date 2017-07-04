# Mutor

A simple typed-checked utility for mutating object.

```typescript

import {Mutor} from 'mutor';
type Clock = {
  min: number
  hr: number
}
const m = Mutor<Clock>(['min', 'hr']);
const now:Clock = {min: 10, hr: 5};

// => {min: 20, hr: 5}
m.min(20)(now) 

// => {min: 15, hr: 5}
m.min(s => s + 5)(now) 

// => {min: 30, hr: 10}
m.merge({min: 30, hr: 10})(now);

```