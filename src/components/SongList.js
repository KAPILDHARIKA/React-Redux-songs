import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList(){
  return this.props.songs.map(song=>{return (<div key={song.title} className="item">
           <div className="right floated content">
             <button className="ui button primary" onClick={()=> this.props.selectSong(song)}>
                Select
             </button>
           </div> 
            <div className="contect">{song.title}</div>
          </div>);
    });
}

  render(){   
   return <div className="ui divided list">{this.renderList()}</div>}
}


//Redux Store data will shown as props inside our component(called with all state inside it)
//can name it anything
//runs every time any changes are made to state
const mapStateToProps = state => {  
   return { songs: state.songs };
};

//MapStatetoPros => Redux to component
//selectSong => component to Redux
export default connect(mapStateToProps,{ selectSong })(SongList);