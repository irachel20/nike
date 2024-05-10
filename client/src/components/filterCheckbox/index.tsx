import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { RadioDefault } from "../radioButton";

interface IAccordion {
  children: Boolean;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  disable?: boolean;
}

export function FilterCheckBox(props: IAccordion) {
  const [open, setOpen] = React.useState(0);
  const [show, setShow] = useState<boolean>(false);
  const [showTwo, setShowTwo] = useState<boolean>(false);
  const [showThree, setShowThree] = useState<boolean>(false);
  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader
          className="acc-1"
          onClick={() => {
            handleOpen(1);
            setShow(!show);
            setShowTwo(false);
            setShowThree(false);
          }}
        >
          <p className="text-sm">{props.titleOne}</p>
        </AccordionHeader>
        <AccordionBody>
          <div className={`${show ? "inline-block" : "hidden"}`}>
            {props.children ? (
              <RadioDefault id="gender" labelOne="Women" labelTwo="Men" />
            ) : (
              <div className="flex flex-col">
                <p>Colour Shown: Flat Pewter/Light </p>
                <p>Bone/Black/White</p>
                <p>Style: DV7421-001</p>
              </div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          className="acc-1"
          onClick={() => {
            handleOpen(2);
            setShow(false);
       
            setShowThree(false);
            if (props.disable){
              setShowTwo(false);
              }
          }}
        >
          <p className="text-sm line-through"> {props.titleTwo}</p>
        </AccordionHeader>
        <AccordionBody>
          <div className={`${showTwo ? "inline-block" : "hidden"}`}>
            {props.children ? (
              <RadioDefault labelOne="Boy" labelTwo="Girl" />
            ) : (
              <div>
                Declaration of Importer: Direct import by the individual
                customer Marketed by: Nike Global Trading B.V. Singapore Branch,
                30 Pasir Panjang Road, #10-31/32, Mapletree Business City,
                Singapore 117 440
              </div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          className="acc-1"
          onClick={() => {
            handleOpen(3);
            setShow(false);
            setShowTwo(false);
            setShowThree(!showThree);
    
          }}
        >
          <p className="text-sm ">{props.titleThree}</p>
        </AccordionHeader>
        <AccordionBody>
          <div className={`${showThree ? "inline-block" : "hidden"}`}>
            {props.children ? (
              <RadioDefault id="" labelOne="Cheapest" labelTwo="Most Expensive" />
            ) : (
              <div>
                Free delivery for purchases above ₹14,000.00 Standard delivery
                4–9 Business Days Orders are processed and delivered
                Monday–Friday (excluding public holidays) Nike Members enjoy
                free returns.
              </div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}
