import React, {useState} from 'react';
import cls from './ClothesAccordion.module.scss';

const ACCORDION_CLOTHES = [
    {
      title: 'Lorem ipsum',
      content: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
    },
    {
      title: 'Lorem ipsum',
      content: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
    },
    {
      title: 'Lorem ipsum',
      content: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
    }
  ];

export const ClothesAccordion = () => {

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
      <div className={cls.accordion}>
        {
          ACCORDION_CLOTHES.map((item, index) => (
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
              <div>
                  <ul className={accordion === index ? cls.active && cls.list : cls.inactive}>
                    { 
                      item.content.map((listItem) => (
                      <a key={listItem} className={cls.link} href='#'>
                        <li className={cls.listItem}>
                          {listItem}
                        </li>
                      </a>
                      ))
                    }
                  </ul>
                </div>
            </div>
          )) 
         }
      </div>       
    </div>
  );
}