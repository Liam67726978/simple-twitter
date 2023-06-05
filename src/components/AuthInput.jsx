import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  border-radius: 2px;
  border-bottom: 2px solid #657786;
  margin-bottom: 32px;
  padding: 2px 10.55px;
`
const StyledLabel = styled.label`
  font-size: 14px;
  color: #696974;
  text-align: start;
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  &::placeholder {
    color: #b5b5be;
    font-size: 16px;
  }
`

const AuthInput = ({ label, placeholder }) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={placeholder} />
    </StyledContainer>
  )
}

export default AuthInput
