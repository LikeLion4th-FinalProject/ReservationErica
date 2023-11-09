import React, { useState } from 'react';
import { SuggestForm } from './SuggestForm';
import FormMine from './FormMine';
import FormOthers from './FormOthers';

export default function SuggestDetail({ suggestType }) {
  const [type, setType] = useState();

  switch (suggestType) {
    case 'mine':
      return <FormMine />;
    case 'others':
      return <FormOthers />;
  }
}
