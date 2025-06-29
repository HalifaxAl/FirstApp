interface MyLabelProps {
  labelText: string;
}

export default function MyLabel({ labelText }: MyLabelProps) {
    const biggerLabel = labelText + "ssss";

  return (
    <div>
      <h1>{biggerLabel}</h1> {/* Using the prop here */}
      <p>Components are fundamental building blocks of React. Every function returns JSX/TSX, a form of HTML that allows you to make function calls inside of HTML, by labelling them as a component. These components build a tree that you visualize as a webpage.</p>
    </div>
  );
}