import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import type { NewsArticle } from '../../../entities/News';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
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
