import styled from 'styled-components'

const StyledText = styled.p`
    color: ${(props)=> props.color};
    font-size: 2rem;
    margin: 1rem;
`;

const Text= ({color,children}) => {
    return (
        <StyledText color={color}>{children}</StyledText>
    );
};

export default Text;
