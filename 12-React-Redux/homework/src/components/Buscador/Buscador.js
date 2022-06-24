import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchMovies, addFavorite } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.searchMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                <button
                  onClick={() =>
                    this.props.addFavorites({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  Agregar a favoritos
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchMovies: (movie) => dispatch(searchMovies(movie)),
    addFavorites: (movie) => dispatch(addFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
