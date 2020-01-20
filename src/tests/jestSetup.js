import ReactSixteenAdapter from "enzyme-adapter-react-16";
import * as Enzyme from "enzyme";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
