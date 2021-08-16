import React from "react";
import { ItemPreview } from "./ItemPreview";

const MOCK_IMAGE_URL = "https://images.app.goo.gl/HFymwR9DFrKTmcHs8.jpg"
export const Demo = () => {
  return (
    <div>
      <ItemPreview title="Hello World!" />
      <ItemPreview title="Hello World!" size="m"/>
      <ItemPreview title="Hello World!" image={MOCK_IMAGE_URL}/>
      <ItemPreview title="Hello World!" size='m' image={MOCK_IMAGE_URL}/>
      <ItemPreview title="Hello World!" starred image={MOCK_IMAGE_URL}/>

      <ItemPreview title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem." image={MOCK_IMAGE_URL} />
     

     <ItemPreview title="Hello World!" helper="This is some helper text" image={MOCK_IMAGE_URL} />

     <ItemPreview title="Hello World!" helper="This is some helper text" image={MOCK_IMAGE_URL}>This is a child</ItemPreview>
    </div>
  );
};
export default Demo;





