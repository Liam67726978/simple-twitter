import styled from 'styled-components';
import { FollowButton } from './common/button.styled';

const StyledFollowerItemContainer = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  width: 100%;
  height: 100%;
  color: var(--dark-100);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  position: relative;

  .user-follower-name {
    margin: 28px 30px 4px 82px;
  }

  .user-follower-info {
    margin: 10px 30px 16px 82px;
    height: 100%;
    line-height: 26px;
  }

  .user-follower-button {
    position: absolute;
    top: 16px;
    right: 30px;
  }
`;

const StyledAvatar = styled.div`
  background-image: url(${(props) => (props.image ? props.image : '')});
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 16px;
  left: 24px;
`;


const FollowerItem = ({ isUnfollow, handleClickFollow }) => {
  return (
    <StyledFollowerItemContainer>
      <StyledAvatar image={'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=601&q=80'} />
        <h6 className="user-follower-name">Apple</h6>
        <div className="user-follower-info">
          Magni facilis cum quo accusantium quam incidunt facere hic. Architecto tempore et iure cumque odit possimus enim hic pariatur.
        </div>
        <FollowButton className="user-follower-button" isUnfollow={isUnfollow} onClick={handleClickFollow}> 
        { isUnfollow ?'跟隨':'正在跟隨' }
        </FollowButton>
    </StyledFollowerItemContainer>
  );
};

export default FollowerItem;