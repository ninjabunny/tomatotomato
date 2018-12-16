import React, {
  Component
} from 'react';
import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
      return ( < div >
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
            BottomNavigationAction label = "Recents"
            icon = { < RestoreIcon / >

            }onClick = {() => this.setState({tablue: this.defaultState()})}
            /> <
            BottomNavigationAction label = "Favorites"
            icon = { < FavoriteIcon / >
            }
            /> <
            BottomNavigationAction label = "Nearby"
            icon = { < LocationOnIcon / >
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