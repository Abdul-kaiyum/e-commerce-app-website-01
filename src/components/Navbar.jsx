

import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive';
// import MailIcon from '@mui/icons-material/Mail';



const Container = styled.div`
height:60px;


 ${mobile({height:"50px"})}


`;

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
align-items:center;
${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`;

const SearchContainer = styled.div`
 border: 1px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`;
const Center = styled.div`
flex:1;

display:flex;
justify-content: space-around;
`;
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})}

`;
const Input = styled.input`
       border: none;
       ${mobile({width:"50px"})}
`;
const Logo = styled.h1`
       font-weight:bold;
       margin:0px;
       ${mobile({fontSize:"24px"})}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}

`;
const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left> <Language>EN</Language>
    <SearchContainer>
          <Input placeholder='Search' />
           <Search style={{color:"gray", fontSize:16}} />
    </SearchContainer>
    </Left>
    <Center> <Logo>LAWA</Logo> </Center>
    <Right>

                            <MenuItem>
                                   REGISTER
                            
                            </MenuItem>
                            <MenuItem>
                                   SIGN IN
                            
                            </MenuItem>
                            <MenuItem>
                                          <Badge badgeContent={4} color="secondary">
                                          <ShoppingCartOutlined />
                                          </Badge>
                            
                            </MenuItem>

                
                
                </Right>

    </Wrapper>
             
    </Container>
  )
}

export default Navbar;
