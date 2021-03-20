import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        // const {genres = []} = this.props; 
        // console.log(this.props);
        // console.log(location.state.genres);
        // console.log(location.state.genres.index);
        if (location.state) {
            return (
                <section className = "container_wrap">
                    <div className = "movie_details">
                        <div className = "movie_detail_list">
                            <img src={location.state.poster} alt = {location.state.title} title = {location.state.title} />
                            <h3 className = "movie_detail_title">{location.state.title}</h3>
                        </div>
                        <div className = "movie_detail_info">                            
                            <h5 className = "movie_detail_year">{location.state.year}
                                <span>|</span>
                            </h5>
                            <h5 className = "movie_detail_genres">
                                {location.state.genres} <span>|</span>
                            </h5>
                            {/* <ul className = "movie_genres">
                               {location.state.genres.map((genre, index) => (
                                   <li key = {location.state.genres.index} className = "genres_genre">
                                       {location.state.genres.genre}
                                   </li>
                               ))}
                            </ul> */}
                            <h5 className = "movie_detail_runtime">{location.state.runtime} <span>|</span></h5>
                            <h5 className = "movie_detail_rating"><span>rate : </span>{location.state.rating}</h5> 
                        </div>
                        <p className = "movie_detail_summary">{location.state.summary}</p>
                    </div>
                </section>
                
            );
            
            
            //<span> {location.state.title} </span>
        } else {
            return null;
        }
    }
}

export default Detail;