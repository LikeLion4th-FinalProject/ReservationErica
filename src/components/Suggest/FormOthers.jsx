import React, { useState } from 'react';
import { SuggestForm } from './SuggestForm';
import SuggestDropdown from './SuggestDropdown';

export default function FormOthers() {
  const [selectedSuggest, setSelectedSuggest] = useState(null);
  return (
    <div>
      <SuggestDropdown
        onSuggestSelect={setSelectedSuggest}
        selectedSuggest={selectedSuggest}
      />
      <SuggestForm />
    </div>
  );
}
