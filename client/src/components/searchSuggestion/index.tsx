import Link from "next/link";

interface SearchSuggestionType {
  src?: string;
  productName?: string;
  price?: number;
  category?: string;
  id?:string;
}

const SearchSuggestion = (props: SearchSuggestionType) => {
  return (
    <Link href={`/singleProduct?id=${props.id}`} className="hover:border hover:border-gray-400">
      <div className="flex gap-5 ">
        <div>
          <img src={props.src} alt="" className="w-[70px] h-[70px]" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-xs">{props.productName}</p>
          <p className="text-xs text-gray-400">{props.category}</p>
          <p className="text-xs">{props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchSuggestion;
