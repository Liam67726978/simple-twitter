import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 54px;
  border-radius: 2px;
`

const StyledLabel = styled.label`
  font-size: 14px;
  color: var(--dark-80);
  text-align: start;
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid var(--default);
  height: 100%;
  background-color: var(--dark-30);
  &[disabled] {
    color: var(--dark-80);
    border-bottom: 2px solid var(--dark-50);
  }
  &:hover {
     border-bottom: 2px solid var(--blueColor);
  }
  &:focus {
     border-bottom: 2px solid var(--blueColor);
  }
  &::placeholder {
    color: var(--dark-60);
    font-size: 16px;
  }
`

const AuthInput = ({ type }) => {
  return (
    <StyledContainer>
      <StyledLabel>123</StyledLabel>
      <StyledInput 
      text={type || "text"}
      placeholder={'123'} />
    </StyledContainer>
  )
}

export default AuthInput
