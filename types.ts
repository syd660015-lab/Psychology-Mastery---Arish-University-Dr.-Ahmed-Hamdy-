
export interface MCQ {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation: string;
}

export interface CaseStudy {
  scenario: string;
  questions: string[];
}

export interface Lecture {
  id: number;
  title: string;
  category: 'dynamic' | 'psychometric';
  mcqs: MCQ[];
  caseStudies: CaseStudy[];
  discussionQuestions: string[];
}
