import React from "react";
import sinon from "sinon";
import { shallow, mount } from "enzyme";
import Button from "./Button.jsx";
import renderer from "react-test-renderer";

describe("<Button />", () => {
  let wrapper;
  let onButtonClick = sinon.spy();
  beforeEach(() => (wrapper = mount(<Button onClick={onButtonClick} />)));

  it("Should Render a Button Container", () => {
    expect(wrapper.find('button[data-test="button-container"]').length).toEqual(
      1
    );
  });
  it("Should Simulate click events", () => {
    wrapper.find("button").simulate("click");
    expect(onButtonClick.callCount).toEqual(1);
  });
});
