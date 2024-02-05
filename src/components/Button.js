function Button(props) {
  // const getGif = () => {
  //   props.getGifFromApp();
  // };

  return (
    <button type="button" onClick={props.getGif}>
      Get a Gif
    </button>
  );
}

export default Button;
