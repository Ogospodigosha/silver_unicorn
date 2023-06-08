import React, {useState} from 'react';
import cls from './Accordion.module.scss';
import { AmmunitionAccordion } from './AmmunitionAccordion/AmmunitionAccordion';
import { ClothesAccordion } from './ClothesAccordion/ClothesAccordion'

const ACCORDION_MAIN_LIST = [
  {
    title: 'Амуниция для лошади',
  },
  {
    title: 'Одежда для всадника',
  }
];


export const CatalogAccordion = () => {

  const [accordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index: any) => {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  }

  return (
    <div className={cls.container}>
      <h1 className={cls.accordion__mainTitle}>Категории</h1>
      <div className={cls.accordion}>
            {
             ACCORDION_MAIN_LIST.map((item, index) => (
              <div key={index}>
                <div className={cls.wrapper}>
                  <h3 className={accordion === index ? cls.active && cls.accordion__title : 
                    cls.accordion__title}>{item.title}
                  </h3>
                  <div onClick={() => toggleAccordion(index)}>
                    {accordion === index ? 
                    (<><span className={cls.toggleOpened}></span></>) :
                    (<><span className={cls.toggleClosed}></span></>)}
                  </div>
                </div>
                <div className={accordion === index ? cls.active : cls.inactive}>
                <div>
                  {index === 0 ? (
                    <AmmunitionAccordion />
                  ) : (
                    <ClothesAccordion />
                  )}
                </div>
                </div>
              </div>
             )) 
            }
      </div>       
    </div>
  );
}