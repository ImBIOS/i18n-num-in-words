import { numInWords, type Lang } from 'i18n-num-in-words';
import { useState } from 'preact/hooks';

const Playground = ({ lang }: { lang: Lang }) => {
  const [words, setWords] = useState(numInWords(123, { lang }));
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setWords(numInWords(Number(value), { lang }));
  };

  return (
    <section>
      <p>{words}</p>
      <input
        type="number"
        defaultValue={'123'}
        style={{ width: '100%' }}
        onInput={handleInputChange}
      />
    </section>
  );
};
Playground.displayName = 'Playground';
export { Playground };
