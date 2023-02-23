import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import * as Styled from './CardNews.styled';
type DataNewsProps = {
  isFetching: boolean;
  dataNews?: any;
};

const CardNews: React.FC<DataNewsProps> = ({ isFetching, dataNews }) => {
  console.log(dataNews);
  return (
    <Styled.BodyCard>
      <Styled.CardStyled
        avatar={
          isFetching ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Autor avatar"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          isFetching ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          isFetching ? (
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : (
            <Styled.CardNameAutor>{dataNews.name}</Styled.CardNameAutor>
          )
        }
        subheader={
          isFetching ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            `views: ${dataNews.views}`
          )
        }
      />
      {isFetching ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={`${dataNews.cover}`}
          alt={`${dataNews.title}`}
        />
      )}
      <CardContent>
        {isFetching ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Styled.CardTitle> {dataNews.title}</Styled.CardTitle>
        )}
      </CardContent>
    </Styled.BodyCard>
  );
};

export default CardNews;
