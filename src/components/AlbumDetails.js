import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getAlbumDetails} from '../actions';

class AlbumDetails extends React.Component {

    state = {
        selectedAlbumId: ''
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.setState({ selectedAlbumId: params.identifier });
        this.props.getAlbumDetails();
    }

    render() {
        const { selectedAlbumId } = this.state;
        const {album} = this.props;
        const filteredAlbum = album.data && album.data.length > 0 && album.data.filter(album => album.id === selectedAlbumId);
        return <div className="albumDetails">
            {
                filteredAlbum && filteredAlbum.length > 0 && filteredAlbum.map(album => {
                    return <div key={album.id}>
                        <div className="name">{album.name}</div>
                        <div className="link">
                            <Link to={`/facebook-albums/albums/${selectedAlbumId}/slideshow`}>Click to view slideshow</Link>
                        </div>
                        <div className="photos">
                            {album.photos && album.photos.data.map(photo => {
                            return <img className="paddingAll-20px" key={photo.id} src={photo.images[0].source} width="400px" height="400px" alt="images" />
                        })}
                        </div>
                    </div>
                })
            }
        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(AlbumDetails);