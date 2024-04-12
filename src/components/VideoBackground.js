import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

function VideoBackground({ id }) {
  useMovieTrailer(id);
  const movieTrailer = useSelector((store) => store.movies?.trailer?.key);
  return (
    <div className="">
      <iframe
        className="w-full h-screen "
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer +
          "?&autoplay=1&loop=1&mute=1&"
        }
        title="YouTube video player"
        allow="acceleRometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
