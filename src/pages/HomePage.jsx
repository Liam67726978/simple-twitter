import { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../layout/MainLayout'
import { MainHeader } from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetCollection from '../components/TweetCollection';
import { InputButton } from '../components/common/button.styled';
import { useGetTheTweet } from '../context/GetTheTweet';
import { ReplyModal } from '../components/Modal';
import { useCreateTweet } from '../context/CreateTweet';

const StyledHomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .tweet-input-container {
    display: flex;
  }
  .tweet-input-area {
    width: 85%;
    height: 136px;
    border-bottom: 10px solid var(--gray1);
  }
  .tweet-button {
    width: 15%;
    height: 136px;
    border-bottom: 10px solid var(--gray1);
    position: relative;
    & button {
      position: absolute; 
      bottom: 16px;
      right: 24px;
    }
  }
  .tweet-item-wrapper {
    border-bottom: 1px solid var(--gray1);
  }
`;

const StyledReplyModalContainer = styled.div`
  position: fixed;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -56px;
    left: -50%;
    transform: translateX(-120px);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
  `

const HomePage = () => {
  const [openReplyModal, setOpenReplyModal] = useState(false)
  const { selectedReplyItem, isReplyLoading } = useGetTheTweet();
  const { tweets, handleAddTweet } = useCreateTweet()

  const handleOpenReplyModal = () => {
  setOpenReplyModal(!openReplyModal)
  }

  

  return (
    <MainLayout>
      <StyledHomePageContainer>
      <div className="header">
        <MainHeader />
      </div>
      <div className="tweet-input-container">
        <div className="tweet-input-area">
          <TweetInput placeholder={'發生什麼新鮮事？'} />
        </div>
        <div className="tweet-button">
          <InputButton onClick={handleAddTweet}>推文</InputButton>
        </div>
      </div>
      <div className="tweet-collection">
        <TweetCollection tweets={tweets} handleOpenReplyModal={handleOpenReplyModal}/>
      </div>
      </StyledHomePageContainer>
      {openReplyModal && !isReplyLoading && (
          <StyledReplyModalContainer>
            <ReplyModal
              placeholder={'推你的回覆'}
              handleOpenReplyModal={handleOpenReplyModal}
              selectedReplyItem={selectedReplyItem}
            />
          </StyledReplyModalContainer>
        )}
    </MainLayout>
  );
};

export default HomePage;


