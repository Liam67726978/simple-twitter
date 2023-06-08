import styled from 'styled-components';
import { OutlinedClose } from '../assets/icons';
import { InputButton } from './common/button.styled';
import TweetInput from './TweetInput';
import { TweetItem } from './TweetItem';

const StyledModalHeader = styled.header`
  width: 100%;
  padding-left: 20px;
  border-bottom: 1px solid var(--gray1);
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 19px;
  }
  svg > path {
    fill: var(--main);
  }
`;

const StyledModalBody = styled.div`
  width: 100%;
  & p {
    font-size: 13px;
    color: var(--default);
    margin-top: 10px;
    margin-left: 82px;
  }
  & p > span {
    color: var(--main);
  }
`;

const StyledModalFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 16px;
  p {
    font-size: 15px;
    color: var(--danger);
    margin-right: 20px;
  }
`;

const StyledTweetModalContainer = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 14px;
  border: 1px solid var(--gray1);
  display: grid;
  grid-template-rows: 56px 1fr 56px;
`;

const StyledReplyModalContainer = styled.div`
  width: 600px;
  height: 450px;
  border-radius: 14px;
  border: 1px solid var(--gray1);
  display: grid;
  grid-template-rows: 56px 1fr min-content 2fr 56px;
  position: relative;

  &::after {
    content: '';
    width: 2px;
    height: 80px;
    background-color: var(--gray2);
    position: absolute;
    top: 135px;
    left: 48px;
    z-index: 99;
  }
`;

const TweetModal = () => {
  return (
    <>
      <StyledTweetModalContainer>
        <StyledModalHeader>
          <OutlinedClose />
        </StyledModalHeader>
        <StyledModalBody>
          <TweetInput />
        </StyledModalBody>
        <StyledModalFooter>
          <p>字數不可超過140字</p>
          <InputButton>推文</InputButton>
        </StyledModalFooter>
      </StyledTweetModalContainer>
    </>
  );
};

const ReplyModal = () => {
  return (
    <>
      <StyledReplyModalContainer>
        <StyledModalHeader>
          <OutlinedClose />
        </StyledModalHeader>
        <StyledModalBody>
          <TweetItem />
        </StyledModalBody>
        <StyledModalBody>
          <p>
            回覆給<span className="reply-modal-account">@apple</span>
          </p>
        </StyledModalBody>
        <StyledModalBody>
          <TweetInput
            className={'modal-reply-input'}
            placeholder={'推你的回覆'}
          />
        </StyledModalBody>
        <StyledModalFooter>
          <p>內容不可空白</p>
          <InputButton>回覆</InputButton>
        </StyledModalFooter>
      </StyledReplyModalContainer>
    </>
  );
};

const EditModal = () => {
  return <></>;
};

export { TweetModal, ReplyModal, EditModal };
