import React from 'react';

const Accordion = ({ items }) => {
  const onTitleClick = (indx) => {
    console.log(`title ${indx} clicked`);
  };
  return (
    <div className="ui styled accordion">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="title active">
              <i
                className="dropdown icon"
                onClick={() => onTitleClick(index)}
              ></i>
              {item.title}
            </div>
            <div className="content active">
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
