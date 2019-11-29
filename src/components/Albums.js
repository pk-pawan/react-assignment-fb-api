import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getAlbumDetails} from '../actions';

class Albums extends React.Component{
    
    componentDidMount(){
        this.props.getAlbumDetails();
    }
    
    render(){
        const {album} = this.props;
        return album.data ? <div className="albums">
        {
            album.data && album.data.length > 0 && album.data.map(album => {
                return <div className="paddingAll-20px" key={album.id}>
                    <div className="name">{album.name}</div>
                    <img src={album.photos.data[0].images[0].source} width="400px" height="400px" alt="images" />
                    <div className="link"><Link to={`/facebook-albums/albums/${album.id}`}>Click to view albums</Link></div>
            </div>
            })
        }
        </div>: null
    }
}

function mapStateToProps(state) {
    return {
        album : state.album
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAlbumDetails: getAlbumDetails
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Albums);