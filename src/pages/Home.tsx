import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import ListItem from '../components/ListItem'

export type ListItemModel = {
  thumbnail: string,
  title: string,
  caption: string,
}

const Home = () => {
  const [data, setData] = useState<ListItemModel[]>([])

  const callApi = async () => {
    axios.get('http://localhost:3001/lecture').then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    callApi()
  })

  return <>
    <Grid container spacing={4} padding='2rem'>
      {data.map(item =>
        <Grid item
              key={item.title}
              xs={2}
        >
          <ListItem key={item.title}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    caption={item.caption}
          />
        </Grid>,
      )}
    </Grid>
  </>
}

export default Home
