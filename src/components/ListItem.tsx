import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ListItemModel } from '../pages/Home'
import styled from '@emotion/styled'

const StyledText = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const ListItem = (props: ListItemModel) =>
	<Card sx={{ maxWidth: 345 }}>
		<CardMedia
			component="img"
			image={props.thumbnail}
			alt={props.title}
		/>
		<CardContent>
			<StyledText
				gutterBottom
				variant="h5">
				{props.title}
			</StyledText>
			<StyledText
				variant="body2"
				color="text.secondary">
				{props.caption}
			</StyledText>
		</CardContent>
		<CardActions>
			<Button size="small">자세히 보기</Button>
		</CardActions>
	</Card>

export default ListItem
