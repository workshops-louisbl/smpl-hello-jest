import React from 'react';
import TestRenderer from "react-test-renderer";
import ReactComponent from "./component";

test("render react component", () => {
  const component = TestRenderer.create(
    <ReactComponent name="Georges" />
  );

  expect(component).toMatchSnapshot();
})
