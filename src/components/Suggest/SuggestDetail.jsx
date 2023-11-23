import React, { useState } from 'react';
import { SuggestForm } from './SuggestForm';
import FormMine from './FormMine';
import FormOthers from './FormOthers';

export default function SuggestDetail({ suggestType, myResInfo }) {
  const [type, setType] = useState();

  switch (suggestType) {
    case 'mine':
      return <FormMine myResInfo={myResInfo} />;
    case 'others':
      return <FormOthers />;
  }
}
