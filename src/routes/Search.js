import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Search.css";

class Search extends React.Component {
  state = {
    isLoading : true,
    movies: [],
    value : ""
  };

  getSearchMovie = async () => {
    const {
      data : {
        data : { movies }
      }
    } = await axios.get(`https://yts-proxy.nomadcoders1.now.sh/list_movies.json?query_term=${this.state.value}`);
    this.setState({ movies, isLoading : false});
  };

  componentDidMount() {
    this.getSearchMovie();
  };

  handleChange = (e : any) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e : any) => {
    e.preventDefault();
    this.getSearchMovie();
  };

  render() {
    const {movies, isLoading} = this.state;

    return (<section className = "search_container">
      {
        isLoading ?
        (<div className = "loader">
          <span className = "loader_text">Loading...</span>
        </div>)
        : (<form onSubmit = {this.handleSubmit}>
          <div>
            <div className = "input_div">
              <h1>Search Movie</h1>
              <input className = "input_search" type = "text" value = {this.state.value} onChange = {this.handleChange} placeholder = "Search Movie" />
            </div>
            <div className = "search_movies">
              {movies.map(movie => (
                <SearchMovie key = {movie.id} id = {movie.id} year = {movie.year} title = {movie.title} poster = {movie.medium_cover_image} rating = {movie.rating} />
              ))}
            </div>
          </div>
        </form>)
        
      }
    </section>);
  } 

}

export default Search;
