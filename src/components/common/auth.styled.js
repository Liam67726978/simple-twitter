import styled from 'styled-components'

const StyedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledAuthInputContainer = styled.div`
  width: 356px;
  margin-top: 30px;
`;

const StyledAuthInputContainer = styled.div`
  width: 356px;
`;

const StyledLinkText = styled.div`
  color: var(--primary);
  font-size: 16px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`

export {
  StyedContainer as AuthContainer,
  StyledAuthInputContainer as AuthInputContainer,
  StyledLinkText as AuthLinkText,
}
