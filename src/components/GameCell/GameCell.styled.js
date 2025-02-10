import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    width: 10rem;
    height: 10rem;
    font-size: 3rem;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 10px ${(props) => props.theme.colors.grey};
    cursor: pointer;
    padding: 3rem;

    .outlineIcon {
        path {
            stroke: ${(props) => props.theme.colors.primary};
            stroke-width: 2;
        }
    }
`;