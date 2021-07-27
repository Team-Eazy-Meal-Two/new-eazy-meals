import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import { Demo as ButtonDemo } from "../Button/Button.Demo";
import { Demo as CheckboxDemo } from "../Checkbox/Checkbox.Demo";
import { Demo as ImageDemo } from "../Image/Image.Demo";
import { Demo as InputDemo } from "../Input/Input.Demo";
import { Demo as LayoutDemo } from "../Layout/Layout.Demo";
import { Demo as LinkDemo } from "../Link/Link.Demo";
import { Demo as TextDemo } from "../Text/Text.Demo";



export const Demos = () => {
    return(
        <Switch>
            <Route path="/demo/button">
                <ButtonDemo />
            </Route>

            <Route path="/demo/checkbox">
                <CheckboxDemo />
            </Route>

            <Route path="/demo/image">
                <ImageDemo />
            </Route>

            <Route path="/demo/input">
                <InputDemo />
            </Route>

            <Route path="/demo/layout">
                <LayoutDemo />
            </Route>

            <Route path="/demo/link">
                <LinkDemo />
            </Route>

            <Route path="/demo/text">
                <TextDemo />
            </Route>
        </Switch>
    )
}
export const Routing = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Demos />
        </Route>

        <Route path="/">
          <div>Home</div>
        </Route>

      </Switch>
    </HashRouter>
  );
};
export default Routing;
