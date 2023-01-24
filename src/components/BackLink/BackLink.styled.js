import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: inline-flex;
    -items: center;
    : 4px;
    : 8px 0;
    color: black;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    :hover {
    : orangered;
}`;