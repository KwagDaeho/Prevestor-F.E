// 'use client';

// Props의 Type 선언
interface PropsType {
  num1?: number;
  num2?: number;
}

const Test = ({ num1 = 1, num2 = 2 }: PropsType) => {
  return (
    <>
      <div>
        {num1}+{num2} = {num1 + num2}
      </div>
    </>
  );
};

export default Test;
