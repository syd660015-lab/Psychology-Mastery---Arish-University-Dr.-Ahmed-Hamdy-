
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LectureView from './components/LectureView';
import { LECTURES } from './constants';

const App: React.FC = () => {
  const [activeLectureId, setActiveLectureId] = useState<number>(1);
  
  const activeLecture = LECTURES.find(l => l.id === activeLectureId) || LECTURES[0];

  useEffect(() => {
    // Scroll to top when lecture changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLectureId]);

  return (
    <Layout 
      activeLectureId={activeLectureId} 
      onSelectLecture={setActiveLectureId}
      lectures={LECTURES}
    >
      <LectureView lecture={activeLecture} />
      
      {/* Intro section if needed, or simple footer */}
      <div className="mt-20 pt-10 border-t border-slate-200 text-center text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} قسم علم النفس - كلية الآداب - جامعة العريش</p>
        <p>إعداد الأستاذ الدكتور المتخصص في علم النفس</p>
      </div>
    </Layout>
  );
};

export default App;
