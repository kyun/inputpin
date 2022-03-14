import React from 'react';

interface Props{
  type?: string;
  inputMode?: string;
  length?: number;
  defaultValue?: string;
  onChange?: (e: any) => void;
  onComplete?: () => void;
  render?: () => React.ReactNode;
  [key: string]: any;  
}

const InputPin: React.FC<Props> = ({ length = 4}) => {
  const ref1 = React.useRef<HTMLInputElement>(null);
  const ref2 = React.useRef<HTMLInputElement>(null);
  const arrayRef = React.useRef<any>([]);

  const items = React.useMemo(() => {
    return new Array(length).fill(0);
  }, [length]);

  const [value, setValue] = React.useState<any[]>(new Array(length).fill(0));

  const handleChange = (e: any, index: number) => {
    console.log(e.target.value.slice(-1), index)
    setValue((prev: any[]) => {
      return prev.map((item, i) => {
        if (i === index) {
          return e.target.value.slice(-1);
        }
        return item;
      })
    });
    arrayRef.current[index+1]?.focus();
  }

  console.log(value);

  return <label>
    {
      items.map((_, i) => {
        return <input key={i} ref={el => arrayRef.current[i] = el} type="text" value={value[i]} onChange={(e)=>handleChange(e, i)} />
      })
    }
  </label>
}
export default InputPin;