import React from 'react';

interface Props {
  type?: string;
  length?: number;
  className?: string;
  inputStyle?: React.CSSProperties;
  id?: string;
  value?: string;
  setValue?: (v: string) => void;
}

const InputPin: React.FC<Props> = ({
  id,
  value,
  setValue,
  type = 'text',
  length = 4,
  className,
  inputStyle,
}) => {
  const arrayRef = React.useRef<any>([]);
  const [values, setValues] = React.useState<any[]>(new Array(length).fill(''));
  const [targetIndex, setTargetIndex] = React.useState(0);

  const handleChange = (index: number) => {
    return (e: any) => {
      setValues((prev: any[]) => {
        return prev.map((item, i) => {
          if (i === index) {
            return e.target.value.slice(-1);
          }
          return item;
        });
      });
      if (e.target.value) {
        const nextIndex = index + 1;
        const tIndex = nextIndex >= length ? length - 1 : nextIndex;
        setTargetIndex(tIndex);
        if (nextIndex >= length) {
          arrayRef.current[tIndex]?.blur();
        } else {
          arrayRef.current[tIndex]?.focus();
        }
      }
    };
  };

  React.useEffect(() => {
    if (values.length) {
      setValue?.(values.join(''));
    }
  }, [values]);
  const handleBackspace = (index: number) => {
    const tIndex = index - 1 < 0 ? 0 : index - 1;
    arrayRef.current[tIndex]?.focus();
    setTargetIndex(tIndex);
  };

  const handleKeyUp = (index: number) => (e: any) => {
    if (e.keyCode === 8) {
      handleBackspace(index);
    }
  };
  const forceFocus = (e: any) => {
    arrayRef.current[targetIndex]?.focus();
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <label className={className} htmlFor={`${id}-${targetIndex}`}>
      {values.map((v, i) => {
        return (
          <input
            onClick={forceFocus}
            id={`${id}-${i}`}
            placeholder={' '}
            style={inputStyle}
            key={i}
            onKeyUp={handleKeyUp(i)}
            ref={(el) => (arrayRef.current[i] = el)}
            type={type}
            value={v}
            onChange={handleChange(i)}
          />
        );
      })}
    </label>
  );
};
export default InputPin;
