import { Counter } from '../app/features/counter';

const Popup = () => {
  document.body.className = 'w-[30rem] h-[15rem]';

  return (
    <>
      <div className="flex justify-center mt-2 text-base">タイトル変更</div>
      <Counter />
    </>
  );
};

export default Popup;
