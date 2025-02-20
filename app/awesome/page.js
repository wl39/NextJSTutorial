export default function AwesomePage() {
  const temp = () => {
    console.log("hi?");
  };
  return (
    <main>
      <div onClick={temp}>hello</div>
    </main>
  );
}
