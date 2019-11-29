import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getAlbumDetails} from '../actions';
import Slider from "react-slick";


class AlbumCarousel extends React.Component {

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
        let settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return <div>
            {
                filteredAlbum && filteredAlbum.length > 0 && filteredAlbum.map(album => {
                    return <div className="slideshow" key={album.id}>
                        <div className="name">{album.name}</div>
                        <div className="link">
                            <Link to={`/facebook-albums/albums/${selectedAlbumId}`}>Click to see album details</Link>
                        </div>
                        <Slider {...settings}>
                        {album.photos && album.photos.data.map(photo => {
                            return <img key={photo.id} src={photo.images[0].source} width="400px" height="400px" alt="images" />
                        })}
                        </Slider>
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

export default connect(mapStateToProps, matchDispatchToProps)(AlbumCarousel);