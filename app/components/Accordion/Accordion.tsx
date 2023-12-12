import React, { ReactNode, useState } from "react";
import { IconType } from "react-icons";

interface AccordionProps {
  label: string;
  children: ReactNode;
  openAccordion?: string | null;
  onToggle: (label: string) => void;
  openIcon?:IconType;
  closeIcon?: IconType;
}

const Accordion: React.FC<AccordionProps> = ({ label, children, openAccordion, onToggle ,openIcon:OIcon,closeIcon:CIcon}) => {
  const isOpen = label === openAccordion;

  return (
    <div className={` p-3 rounded-md ${isOpen? 'border border-2 border-slate-100  ':'bg-slate-100'}`}>
      <div onClick={() => onToggle(label)} className="pb-2 font-medium  flex justify-between">
       <p> {label}</p>
       <div className=""> {isOpen? OIcon&& <OIcon/>: CIcon&& <CIcon/>}</div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
};
export default Accordion;

