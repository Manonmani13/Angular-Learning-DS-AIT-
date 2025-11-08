// src/MovieInfo.js
function MovieInfo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Cast: {props.cast}</p>
      <p>Report: {props.report}</p>
    </div>
  );
}

export default MovieInfo;
