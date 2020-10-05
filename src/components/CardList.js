import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      <Card
              key={13}
              id={123}
              name={'ziad khckhch'}
              email={'ziad@khchkhch'}
      />
      <Card
              key={16}
              id={124}
              name={'Amine ANNOUr'}
              email={'amine@annour'}
      />
      <Card
              key={17}
              id={125}
              name={'Zakariae JAAFARi'}
              email={'Zakariae@JAAFARI'}
      />

      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;