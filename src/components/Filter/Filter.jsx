import React from 'react';

export const Filter = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} placeholder="Search by name" />
);
