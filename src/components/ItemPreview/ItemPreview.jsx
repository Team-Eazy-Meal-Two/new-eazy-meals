import React from 'react';
import styled from 'styled-components';
import { ButtonBase, Avatar } from '@material-ui/core';
import { tokens } from '../../data/tokens';
import { Text } from '../Text';
import { ArrowForwardIos as ArrowIcon, Star as StarIcon} from '@material-ui/icons'


const Base = styled(ButtonBase)`
    min-height: 10rem;
    width: 100%;
    border-bottom: 1px solid rgba(${tokens.colors.black}, ${tokens.opacity.subtle});
    text-align: left;
    justify-content: flex-start;
    padding: ${tokens.spacing.l};

    &:hover {
        background: rgba(${tokens.colors.turquoise}, ${tokens.opacity.subtler});
    }
`;
 
const Image = styled(Avatar)`
     width: ${({size}) => tokens.images [size]};
     height: ${({size}) => tokens.images [size]};
     border-radius: ${tokens.radius.strong};
     margin-right: ${tokens.spacing.m};
     display: none;
     background-color: rgb(${tokens.colors.green});

     @media (min-width: 400px) {
         display: flex;
         align-items: center;
         justify-content: center;
     }

`
const StarBase = styled.div`
      position: absolute;
      top: 0;
      right: 0;
      border: 1.5rem solid transparent;
      border-top-color: rgb(${tokens.colors. green});
      border-right-color: rgb(${tokens.colors. green});

`
const Info = styled.div`
   flex-grow: 1;
`
 
const TitleWrap = styled.div`
    padding-bottom: ${tokens.spacing.xs};

`
const StyledStar = styled(StarIcon)`
      postion: absolute;
      top: ${tokens.spacing.s};
      right: ${tokens.spacing.s};
      width: ${tokens.spacing.xs};
      height: ${tokens.spacing.xs};
      color: black;

`


const extractAbbr = (string) => {
    const firstLetter = string[0];
    const extraLetters = string
    .match(/\s\w/g)
    .map(val => val[1])
    .map(val => val.toUpperCase())
    .slice(0, 2)


    return `${firstLetter}${extraLetters.join('')}`;
}


export const ItemPreview=(props)=>{
    const { title, helper, size = 's', image, starred = false, children } = props;
     
    const abbr = image ? null : extractAbbr(title)
     

    return (
    <Base href="#">
        <Image size={size} src={image} alt="">{abbr}</Image> 
          
          
         <Info>
             <TitleWrap>
        <Text size="l" lines={2}>{title}</Text>
        </TitleWrap>
        <Text size="m" lines={1}>{helper}</Text>
        {children}
        </Info>

        <ArrowIcon/>
          
        {starred && <StarBase />}
        {starred && <StyledStar />}
        
    </Base>
    )
    
}
export default ItemPreview;