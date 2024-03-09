import UseWindowResize from ".";

export default function UseWindowReSizeTest() {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>width is {width}</p>
      <p> Height is {height}</p>
    </div>
  );
}
