import styled from 'styled-components';
import MainLayout from '../layout/MainLayout'
import { ReplyHeader } from '../components/Header';
import TweetContent from '../components/TweetContent'
import ReplyCollection from '../components/ReplyCollection'
import { ReplyModal } from '../components/Modal';
import { useGetSelectedTweet } from '../context/GetSelectedTweet';
import { useGetTweets } from '../context/GetTweets';
import Alert from '../components/Alert';
import { useGetUserTweets } from '../context/GetUserTweets';

const StyledReplyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  .tweet-content-container {
    border-bottom: 1px solid var(--gray1);
  }
  .reply-item-wrapper {
    border-bottom: 1px solid var(--gray1);
  }
`

const StyledReplyModalContainer = styled.div`
  position: fixed;
  top: 56px;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 1;

  &::before {
    content: '';
    position: fixed;
    top: -56px;
    left: -50vw;
    transform: translateX(300px);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const StyledAlertContainer = styled.div`
  position: fixed;
  top: 56px;
  left: 35%;
  z-index: 1;
`

const ReplyPage = () => {
  const { currentMemberInfo } = useGetUserTweets()
  const { isReplyPageLoading, selectedReplyItem, isModalLoading, replies, openReplyModal, handleOpenReplyModal } = useGetSelectedTweet();
  const { openAlert, alertType } = useGetTweets()



  return (
  !isReplyPageLoading &&
  (
    <MainLayout>
      <StyledReplyPageContainer>
        <div className="header">
          <ReplyHeader />
        </div>
        <div className="tweet-content-container">
            <TweetContent selectedReplyItem={selectedReplyItem} />
        </div>
        <div className="reply-collection">
          <ReplyCollection replies={replies}/>
        </div>
      </StyledReplyPageContainer>
      {openReplyModal && !isModalLoading && (
        <StyledReplyModalContainer>
          <ReplyModal
            placeholder={'推你的回覆'}
            handleOpenReplyModal={handleOpenReplyModal}
            selectedReplyItem={selectedReplyItem}
            currentMemberInfo={currentMemberInfo}
          />
        </StyledReplyModalContainer>
      )}
      {openAlert && (
        <StyledAlertContainer>
          <Alert alertType={alertType}/>
        </StyledAlertContainer>
      )}
    </MainLayout>
  )
)
}

export default ReplyPage