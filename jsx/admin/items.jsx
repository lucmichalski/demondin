import React from 'react'
import Item from './item'

import { Grid } from 'semantic-ui-react'

export default class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    if ('data' in props) {
      this.state.data = props.data;
    } else {
      this.fetchItems();
    }
  }

  fetchItems() {
    fetch("/shop/keeper/items.json", {
      method: "GET"
    }).then((response) => response.json()).then((data) => {
      this.setState((state) => {
        state.data = data
        return state
      })
    })
  }

  render() {
    return (
      <Grid columns='two' divided>
        {this.state.data.map((item) =>
          <Item key={item.ID} data={item} />
        )}
      </Grid>
    )
  }
}
