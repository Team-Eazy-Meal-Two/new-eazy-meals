import React from "react";
import { Input } from "./Input";
 
export const Demo = () => {
    return <div>
        <Input accept="text"/>
        <Input accept="password"/>
        <Input accept="email"/>
    </div>
}
export default Demo;