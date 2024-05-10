type Props = {
  id: string;
  text?: string;
};

const SizeLi = (props: Props) => {
  return (
    <li>
      <input
        type="radio"
        id={props.id}
        name="hosting"
        value="hosting-small"
        className="hidden peer"
        required
      />
      <label
        htmlFor={props.id}
        className="inline-flex items-center justify-center p-2 text-gray-500 bg-white border w-[90px] h-[40px] border-gray-50   cursor-pointer dark:hover:text-gray-300 dark:border-gray-100 dark:peer-checked:text-gray-500 peer-checked:bg-gray-100 peer-checked:text-gray-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 "
      >
        <div className="block">
          <p className="text-xs">{props.text}</p>
        </div>
      </label>
    </li>
  );
};

export default SizeLi;
