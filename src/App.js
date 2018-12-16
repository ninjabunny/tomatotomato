import React, {
  Component
} from 'react';
import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RefreshIcon from '@material-ui/icons/Refresh';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AddIcon from '@material-ui/icons/Add';

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
      console.log(value)
      return ( < div>
        <
        div className = "tablue" > {
          tablue.map(({
              name
            }, index) => < span key = {
              `${name}-${index}`
            } > {
              name
            } < /span>)}</div >

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

            }onClick = {() => this.setState({tablue: this.defaultState()})}
            /> <
            BottomNavigationAction label = "Condense"
            icon = { < CompareArrowsIcon / >
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