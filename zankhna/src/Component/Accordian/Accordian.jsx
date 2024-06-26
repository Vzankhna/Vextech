import React, { useContext } from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    } from 'react-accessible-accordion';
    
import 'react-accessible-accordion/dist/fancy-example.css';
import MyContext from '../../Common/Context/MYcontext';

const Accordian = () => {
    const {items} = useContext(MyContext)
  return (
    <div>
<Accordion allowZeroExpanded>
    {
    items
    .map((item) => (
        <AccordionItem key={item.id}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
    </Accordion>
    </div>
  )
}

export default Accordian
