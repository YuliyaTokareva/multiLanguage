import React from 'react';
import type { NewsArticle } from '../../../entities/News';
import CardBody from '../cardBody/CardBody';

import * as Styled from './CardNews.styled';

type DataNewsProps = {
  isFetching: boolean;
  dataNews?: NewsArticle[];
  handlerClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete: (idPost: string) => void;
};

const CardNews: React.FC<DataNewsProps> = ({ isFetching, dataNews, handlerClick, onDelete }) => {
  return (
    <>
      {dataNews.map((el) => (
        <CardBody article={el} key={el.id} onDelete={onDelete} />
      ))}
      {isFetching ? (
        ''
      ) : (
        <Styled.ButtonBlock>
          <Styled.ButtonNews
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handlerClick(e)}>
            Show More
          </Styled.ButtonNews>
        </Styled.ButtonBlock>
      )}
    </>
  );
};

export default CardNews;
