'use client';

import { useEffect, useState } from 'react';

export default function StudiesPage() {
  const [studies, setStudies] = useState<any[]>([]);

  useEffect(() => {
    // TEMPORÁRIO — evitar erro de build
    setStudies([
      { _id: '1', title: 'Estudo de Daniel' },
      { _id: '2', title: 'Apocalipse Revelado' }
    ]);
  }, []);

  return (
    <div>
      <h1>Studies</h1>

      {studies.map(s => (
        <div key={s._id}>
          <h3>{s.title}</h3>
        </div>
      ))}
    </div>
  );
}
