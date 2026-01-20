'use client';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  console.log("Skills component rendered" ,skills);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(setSkills);
  }, []);

  return (
    <ul>
      {/* {skills.map(s => (
        <li key={s._id}>{s.name}</li>
      ))} */}
      <p>hi</p>
    </ul>
  );
}
