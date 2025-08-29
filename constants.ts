
import { Poll } from './types';

export const MOCK_POLLS: Poll[] = [
  {
    id: 1,
    question: "What is your favorite frontend framework for 2024?",
    options: [
      { id: 101, text: "React", votes: 152 },
      { id: 102, text: "Vue.js", votes: 98 },
      { id: 103, text: "Svelte", votes: 75 },
      { id: 104, text: "Angular", votes: 43 },
      { id: 105, text: "Solid.js", votes: 21 },
    ],
  },
  {
    id: 2,
    question: "Which cloud provider do you prefer for personal projects?",
    options: [
      { id: 201, text: "AWS", votes: 120 },
      { id: 202, text: "Google Cloud", votes: 85 },
      { id: 203, text: "Microsoft Azure", votes: 60 },
      { id: 204, text: "Vercel", votes: 110 },
      { id: 205, text: "Netlify", votes: 55 },
    ],
  },
  {
    id: 3,
    question: "What's the most important factor when choosing a new laptop?",
    options: [
        {id: 301, text: "Performance (CPU/GPU)", votes: 210},
        {id: 302, text: "Battery Life", votes: 180},
        {id: 303, text: "Screen Quality", votes: 130},
        {id: 304, text: "Portability & Weight", votes: 95},
        {id: 305, text: "Price", votes: 155},
    ]
  }
];
