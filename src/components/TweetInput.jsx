import styled from 'styled-components';
import { useGetTweets } from '../context/GetTweets';
import { useGetSelectedTweet } from '../context/GetSelectedTweet'

const StyledInputContainer = styled.div`
  border: none;
  font-family: 'Noto Sans TC', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.form`
  width: 100%;
  height: 100%;
  text-align: start;
  .tweet-input {
    outline: none;
    resize: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 28px 24px 10px 83px;
    color: var(--dark-100);
    line-height: 26px;
    font-size: 18px;
  }
  .modal-reply-input {
    font-size: 18px;
    &::placeholder {
      font-weight: normal;
    }
  }
  ::placeholder {
    font-weight: bold;
    color: var(--secondary);
  }
  :focus::placeholder {
    color: transparent;
  }
  ::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
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

const TweetInput = ({ placeholder, currentMemberInfo }) => {
  const { handleTweetInputChange, tweetInputValue } = useGetTweets();

  return (
    <>
      <StyledInputContainer>
        <StyledAvatar image={currentMemberInfo.avatar} />
        <StyledInput>
          <textarea
            className="tweet-input"
            placeholder={placeholder}
            value={tweetInputValue}
            onChange={(e) => handleTweetInputChange(e.target.value)}
          />
        </StyledInput>
      </StyledInputContainer>
    </>
  );
};

const TweetModalInput = ({ placeholder, currentMemberInfo }) => {
  const { handleTweetModalChange, tweetModalValue } = useGetTweets();

  return (
    <>
      <StyledInputContainer>
        <StyledAvatar image={currentMemberInfo.avatar} />
        <StyledInput>
          <textarea
            className="tweet-input modal-reply-input"
            placeholder={placeholder}
            value={tweetModalValue}
            onChange={(e) => handleTweetModalChange(e.target.value)}
          />
        </StyledInput>
      </StyledInputContainer>
    </>
  );
};

const TweetReplyInput = ({ placeholder, currentMemberInfo }) => {
    const { handleReplyInputChange, replyInputValue } = useGetSelectedTweet();

  return (
    <>
      <StyledInputContainer>
        <StyledAvatar image={currentMemberInfo.avatar} />
        <StyledInput>
          <textarea
            className="tweet-input modal-reply-input"
            placeholder={placeholder}
            value={replyInputValue}
            onChange={(e) => handleReplyInputChange(e.target.value)}
          />
        </StyledInput>
      </StyledInputContainer>
    </>
  );
};

export { TweetInput, TweetModalInput, TweetReplyInput };