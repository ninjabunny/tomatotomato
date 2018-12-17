import React, {
  Component
} from 'react';
import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RefreshIcon from '@material-ui/icons/Refresh';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const LONGEST_WORD_LENGTH = 6

const cards = [{
  name: 'tomato'
}, {
  name: 'mato'
}, {
  name: 'to'
}, {
  name: 'ma'
}, ]
const addCard = () => cards[Math.floor(Math.random() * 4)]

const SpanSpace = () => < span > & nbsp; < /span>

class App extends Component {
  defaultState = () => [cards[0], ...Array(3).fill(1).map(() => addCard())]

  state = {
    value: 0,
    tablue: [...this.defaultState()],
  };


  handleChange = (event, value) => {
    this.setState({
      value
    });
  };
  render() {
    const {
      value,
      tablue
    } = this.state;
    return ( < div >
      <
      div className = "tablue" >
      <Grid container spacing={8}>

       {
        tablue.map(({
            name
          }, index) =>
          <Grid item xs={3}>
          <
          Card className = 'card'
          key = {
            `${name}-${index}`
          } > < Typography > {
            name
          } < /Typography></Card ></Grid>
        )
      } </Grid>< /div >

      <
      BottomNavigation className = "navbar"
      value = {
        value
      }
      onChange = {
        this.handleChange
      }
      showLabels >
      <
      BottomNavigationAction label = "Reset"
      icon = { < RefreshIcon / >

      }
      onClick = {
        () => this.setState({
          tablue: this.defaultState()
        })
      }
      /> <
      BottomNavigationAction label = "Condense"
      icon = { < CompareArrowsIcon / >
      }
      onClick = {
        () =>
        this.setState({
          tablue: tablue.filter(({
            name
          }, index, arr) => index ? name !== arr[index - 1].name : true)
        })
      }
      /> <
      BottomNavigationAction label = "Add"
      icon = { < AddIcon / >
      }
      onClick = {
        () => this.setState({
          tablue: [...tablue, addCard()]
        })
      }
      /> < /
      BottomNavigation > < /div>
    );
  }
}

export default App;