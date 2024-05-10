import {
  sortForCheapestProductService,
  sortForMenProductService,
  sortForMostExpensiveProductService,
  sortForWomenProductService,
} from "@/api/services/products";
import { store } from "@/context";
import { Radio } from "@material-tailwind/react";
import { useContext } from "react";

interface IRadio {
  labelOne: string;
  labelTwo: string;
  id?: string;
}

export function RadioDefault(props: IRadio) {
  const { productSort, setProductSort }: any = useContext(store);

  return (
    <div className="flex radio flex-col gap-2">
      <Radio
        onClick={() => {
          if (props.id === "gender") {
            sortForWomenProductService(props.labelOne).then((res) => {
              setProductSort(res);
            });
            
          } else {
            sortForCheapestProductService(1995).then((res) => {
              setProductSort(res);
            });
          }
        }}
        name="type"
        label={props.labelOne}
      />
      <Radio
        onClick={() => {
          if (props.id === "gender") {
            sortForMenProductService(props.labelTwo).then((res) => {
              setProductSort(res);
            });
          } else {
            sortForMostExpensiveProductService(props.labelTwo).then((res) => {
              setProductSort(res);
            });
          }
        }}
        name="type"
        label={props.labelTwo}
      />
    </div>
  );
}
