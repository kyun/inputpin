import React from 'react';

interface Props{
  length?: number;
  className?: string;
  inputStyle?: React.CSSProperties;
}

const InputPin: React.FC<Props> = ({ length = 4, className, inputStyle}) => {
  const arrayRef = React.useRef<any>([]);
  const [values, setValues] = React.useState<any[]>(new Array(length).fill(''));


  const handleChange = (index: number) => {
    return (e: any) => {
      console.log(e.target.value)
      setValues((prev: any[]) => {
        return prev.map((item, i) => {
          if (i === index) {
            return e.target.value.slice(-1);
          }
          return item;
        })
      });
      if (e.target.value) {
        arrayRef.current[index+1]?.focus();
      }
    }
  }
  const handleBackspace = (index: number) => {
    console.log(values);
    arrayRef.current[index-1]?.focus();
  }

  const handleKeyUp = (index: number) =>  (e: any) => {
    console.log(e.keyCode);
    if (e.keyCode === 8) {
      handleBackspace(index);
    }
  }
  return <label className={className}>
    {
      values.map((v, i) => {
        return <input style={inputStyle} key={i} onKeyUp={handleKeyUp(i)} ref={el => arrayRef.current[i] = el} type="text" value={v} onChange={handleChange(i)} />
      })
    }
  </label>
}
export default InputPin;