import { IData } from '../interface/interface';

interface ISwitch {
  item: IData;
  onChange: (checked: IData) => void;
}

export default function Switch({ item, onChange }: ISwitch) {
  const toggleSwitch = () => {
    onChange(item);
  };
  return (
    <div className="relative mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white"
        onClick={toggleSwitch}
        checked={item.checked}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"
      ></label>
    </div>
  );
}
