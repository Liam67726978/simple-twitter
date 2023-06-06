import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--dark-30);
  width: 100%;
  height: 54px;
  border-radius: 2px;
  border-bottom: 2px solid var(--default);
  margin-bottom: 32px;
`
const StyledLabel = styled.label`
  font-size: 14px;
  color: var(--dark-80);
  text-align: start;
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: var(--dark-30);
  &::placeholder {
    color: var(--dark-60);
    font-size: 16px;
  }
`

const AuthInput = () => {
  return (
    <StyledContainer>
      <StyledLabel>123</StyledLabel>
      <StyledInput placeholder={'123'} />
    </StyledContainer>
  )
}

export default AuthInput
