import * as React from 'react';
import { IconButton, Avatar, CardMedia, CardContent } from '@mui/material';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

import type { NewsArticle } from '../../../entities/News';

import * as Styled from './CardBody.styled';

type DataNewsProps = {
  article: NewsArticle;
  onDelete: (idPost: number) => void;
};

const CardBody: React.FC<DataNewsProps> = ({ article, onDelete }) => {
  return (
    <Styled.BodyCard>
      <Styled.CardStyled
        avatar={
          <Avatar
            alt="Autor avatar"
            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
          />
        }
        action={
          <IconButton aria-label="settings" onClick={() => onDelete(article.id)}>
            <DeleteOutlineSharpIcon />
          </IconButton>
        }
        title={<Styled.CardNameAutor>{article.name}</Styled.CardNameAutor>}
        subheader={`views: ${article.views}`}
      />

      <CardMedia component="img" height="240" image={`${article.cover}`} alt={`${article.title}`} />

      <CardContent>
        <Styled.CardTitle> {article.title}</Styled.CardTitle>
      </CardContent>
    </Styled.BodyCard>
  );
};

export default CardBody;
