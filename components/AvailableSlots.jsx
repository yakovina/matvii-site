'use client';

import { useEffect, useState } from 'react';
import { SLOTS, SLOTS_NOTE, SLOTS_SHEET_URL } from '../lib/site';

// Показує вільні вікна для консультацій. Якщо задано SLOTS_SHEET_URL —
// підтягує їх з опублікованої Google-таблиці (перша колонка), інакше бере SLOTS з lib/site.js.
export default function AvailableSlots() {
  const [slots, setSlots] = useState(SLOTS);
  const [note, setNote] = useState(SLOTS_NOTE);

  useEffect(() => {
    if (!SLOTS_SHEET_URL) return;
    fetch(SLOTS_SHEET_URL)
      .then((r) => r.text())
      .then((csv) => {
        const rows = csv
          .split('\n')
          .map((line) => line.split(',')[0]?.replace(/^"|"$/g, '').trim())
          .filter(Boolean);
        // Якщо перший рядок починається з «Актуально» — це примітка, решта — слоти.
        const noteRow = rows.find((r) => r.toLowerCase().startsWith('актуально'));
        const slotRows = rows.filter((r) => r !== noteRow && !r.toLowerCase().startsWith('слот'));
        if (slotRows.length) {
          setSlots(slotRows);
          if (noteRow) setNote(noteRow + ' Вкажіть зручний час у заявці — я підтверджу.');
        }
      })
      .catch(() => {});
  }, []);

  if (!slots.length) return null;

  return (
    <div className="slots-box">
      <h3>Найближчі вільні вікна</h3>
      <div className="slots-list">
        {slots.map((s) => (
          <span className="slot" key={s}>
            {s}
          </span>
        ))}
      </div>
      <p className="slots-note">{note}</p>
    </div>
  );
}
