import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: inline-flex;
    -items: center;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase; 
    color: black;
`;

export const Сontainer = styled.div`
    border-bottom: 1px solid #727272;
    padding: 15px;
    p {
        padding-left: 15px;
        font-size: 20px;
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const OtherInfo = styled.ul`
    text-decoration: none;
    margin-top: 15px;
    padding-left: 20px;
`;

export const OtherInfoLink = styled(NavLink)`
    display: block;
    margin: auto;
    text-decoration: none;
    color: black;
    list-style: none;
    &.active {
        color: #ff4388;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        text-decoration: underline;
    }
`;

