import React from "react";
import { shallow } from "enzyme";
import Carousel from "../Carousel";
import CarouselButton from "../CarouselButton";

describe("Carousel", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });
  it("renders a <figure>", () => {
    expect(wrapper.type()).toBe("div");
  });
  it("initial slideIndex", () => {
    expect(wrapper.state("slideIndex")).toBe(0);
  });
  it("render button prev", () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(0)
        .prop("children")
    ).toBe("Prev");
  });
  it("render button next", () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(1)
        .prop("children")
    ).toBe("Next");
  });
  it("decrements with prev button", () => {
    wrapper.setState({ slideIndex: 1 });
    wrapper.find('[data-action="prev"]').simulate("click");
    expect(wrapper.state("slideIndex")).toBe(0);
  });
  it("increments with next button", () => {
    wrapper.setState({ slideIndex: 1 });
    wrapper.find('[data-action="next"]').simulate("click");
    expect(wrapper.state("slideIndex")).toBe(2);
  });
});
