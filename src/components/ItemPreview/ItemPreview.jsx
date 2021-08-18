import React from "react";
import styled from "styled-components";
import { ButtonBase, Avatar } from "@material-ui/core";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import {
  ArrowForwardIos as ArrowIcon,
  Star as StarIcon,
} from "@material-ui/icons";

const Base = styled(ButtonBase)`
  min-height: ${({size}) => size === "m" ? "10rem ": "7rem" }
  width: 100%;
  border-bottom: 1px solid
    rgba(${tokens.colors.black}, ${tokens.opacity.subtler});
  text-align: left;
  justify-content: flex-start;
  padding: ${tokens.spacing.l};

  border-top: 1px solid
    rgba(${tokens.colors.black}, ${({first}) => tokens.opacity[first ? 'subtler':'none'] });

  &:hover {
    background: rgba(${tokens.colors.turquoise}, ${tokens.opacity.subtler});
  }
`;

const Image = styled(Avatar)`
  width: ${({ size }) => tokens.images[size]};
  height: ${({ size }) => tokens.images[size]};
  border-radius: ${tokens.radius.strong};
  margin-right: ${tokens.spacing.m};
  display: none;
  background-color: rgb(${tokens.colors.green});
  box-shadow: 0px 3px 1px -2px rgba(0 0 0/20%), 0px 2px 2px 0px rgba(0 0 0/14%),
    0px 1px 5px 0px rgba(0 0 0/12%);

  @media (min-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StarBase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1.5rem solid transparent;
  border-top-color: rgb(${tokens.colors.green});
  border-right-color: rgb(${tokens.colors.green});
`;
const Info = styled.div`
  flex-grow: 1;
`;

const TitleWrap = styled.div`
  padding-bottom: ${tokens.spacing.xs};
`;
const StyledStar = styled(StarIcon)`
  position: absolute;
  top: ${tokens.spacing.s};
  right: ${tokens.spacing.s};
  width: ${tokens.images.xs};
  height: ${tokens.images.xs};
  color: white;
`;

const extractAbbr = (string) => {
  const firstLetter = string[0];
  const extraLetters = string
    .match(/\s\w/g)
    .map((val) => val[1])
    .map((val) => val.toUpperCase())
    .slice(0, 2);

  return `${firstLetter}${extraLetters.join("")}`;
};

/**
 *
 * @typedef {object} Props
 *@property {string} title - the title of the item to be shown in the preview
 * @property {string} [helper] - helper text that will be shown under the title
 * @property {string} [size] - the size that the image and the item itself will be displayed
 * @property {string} [image] - an image URL, if not supplied will show abbreviation of title
 * @property {string} [starred] - will show a star icon in the top right corner
 * @property {string} [children] - any JSX that should be shown under the title and helper
 * @property {boolean} [first] - if true, then a divider line is added to the top of the element
 */

export const ItemPreview = (props) => {
  const { title, helper, size = "s", image, starred = false, children, first } = props ;

  const abbr = image ? null : extractAbbr(title);

  return (
    <Base href="#" $first={first} size={size}>
      <Image size={size} src={image} alt="">
        {abbr}
      </Image>

      <Info>
        <TitleWrap>
          <Text size="l" lines={2}>
            {title}
          </Text>
        </TitleWrap>
        <Text size="m" lines={1}>
          {helper}
        </Text>
        {children}
      </Info>

      <ArrowIcon />

      {starred && <StarBase />}
      {starred && <StyledStar />}
    </Base>
  );
};
export default ItemPreview;
