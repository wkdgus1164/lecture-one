import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ListItemModel } from '../pages/Home'

const ListItem = (props: ListItemModel) =>
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component='img'
      image={props.thumbnail}
      alt={props.title}
    />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        {props.title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {props.caption}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>자세히 보기</Button>
    </CardActions>
  </Card>

export default ListItem