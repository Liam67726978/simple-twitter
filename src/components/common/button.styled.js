import styled, { css } from 'styled-components'

const StyledAuthButton = styled.button`
  border-radius: 50px;
  background-color: var(--main);
  border: none;
  color: var(--dark-0);
  width: 356px;
  height: 46px;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 20px;
  font-weight: regular;
  padding: 8px 0;
  text-align: center;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`

const StyledNavbarButton = styled(StyledAuthButton)`
  width: 178px;
`

const StyledSaveButton = styled(StyledAuthButton)`
  width: 88px;
  heigth: 64px;
`

const StyledFollowButton = styled(StyledAuthButton)`
  width: 96px;
  height: 40px;
  font-size: 16px;
  ${({ isUnfollow }) =>
    isUnfollow &&
    css`
      background-color: var(--dark-0);
      color: var(--main);
      border: 1px solid var(--main);
      width: 64px;
      height: 40px;
    `}
`

const StyledInputButton = styled(StyledAuthButton)`
  width: 64px;
  heigth: 40px;
  font-size: 16px;
`

export {
  StyledAuthButton as AuthButton,
  StyledNavbarButton as NavbarButton,
  StyledSaveButton as SaveButton,
  StyledFollowButton as FollowButton,
  StyledInputButton as InputButton,
}
