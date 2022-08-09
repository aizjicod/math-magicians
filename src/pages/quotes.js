const Quotes = () => {
  const quotesList = [
    'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality. — Richard Courant, German-American mathematician',

    'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. — Albert Einstein',

    'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. — Shakuntala Devi, Indian writer and mental calculator',

    'Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach, Polish mathematician',

    'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics. — Katherine Johnson, African-American mathematician',

    'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. — Albert Einstein',

    'What is mathematics? It is only a systematic effort of solving puzzles posed by nature. — Shakuntala Devi',

    'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country — David Hilbert, German mathematician',

    'Mathematics are the result of mysterious powers which no one understands, and which the unconscious recognition of beauty must play an important part. Out of an infinity of designs a mathematician chooses one pattern for beauty’s sake and pulls it down to earth. — Marston Morse, American mathematician',

    'Nature is written in mathematical language. — Galileo Galilei, Italian astronomer, physicist and engineer',
  ];

  const randomNumber = () => Math.floor(Math.random() * 10);
  return (
    <h2 id="quotes">{quotesList[randomNumber()]}</h2>
  );
};

export default Quotes;
