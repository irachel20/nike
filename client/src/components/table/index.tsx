import SizeLi from "../sizeSelector";

const Table = () => {
  return (
    <ul className="flex w-full gap-2  flex-wrap ">
      <SizeLi id="xs" text="UK 6-EU 40" />
      <SizeLi id="sm" text="UK 6.5" />
      <SizeLi id="md" text="UK 7" />
      <SizeLi id="lg" text="UK 7.5" />
      <SizeLi id="xl" text="UK 8" />
      <SizeLi id="0xl" text="UK 8.5" />
      <SizeLi id="1xl" text="UK 9" />
      <SizeLi id="2xl" text="UK 9.5" />
      <SizeLi id="3xl" text="UK 10" />
      <SizeLi id="4xl" text="UK 10.5" />
      <SizeLi id="5xl" text="UK 11" />
      <SizeLi id="6xl" text="UK 11.5" />
      <SizeLi id="7xl" text="UK 12" />
    </ul>
  );
};

export default Table;
