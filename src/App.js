import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PkiValidationFile from './PkiValidationFile.tsx'; // Se você tiver um componente para manipular a rota específica

function App() {
    return (
      <Router>
        <Routes>
          {/* Outras rotas */}
          <Route path="/.well-known/pki-validation/853550E41194F4F062EAC1EB8FDB2EF8.txt" element={<PkiValidationFile />} />
        </Routes>
      </Router>
    );
  }

export default App;