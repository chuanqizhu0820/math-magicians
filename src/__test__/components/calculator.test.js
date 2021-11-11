import React from 'react';
import renderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

test('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://localhost:3000/calculator">Home</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});