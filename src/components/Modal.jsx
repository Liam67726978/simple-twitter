import styled from 'styled-components';
import { useState } from 'react'
import { OutlinedClose, OutlinedAddPhoto } from '../assets/icons';
import { InputButton } from './common/button.styled';
import { TweetModalInput, TweetReplyInput } from './TweetInput';
import { TweetItemInReply } from './TweetItem';
import { AuthInput, TextAreaInput } from './AuthInput';
import { useGetTweets } from '../context/GetTweets';
import { useGetSelectedTweet } from '../context/GetSelectedTweet';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const StyledModalHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--gray1);
  position: relative;
  .close-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 19px;

    & > path {
      fill: var(--main);

      &:hover {
        cursor: pointer;
      }
    }
  }

  .save-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
  }

  h5 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 70px;
  }
`;

const StyledModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .tweet-item-wrapper{
    height: 50%;

    & p {
    position: absolute;
    z-index: 2;
    top: 45%;
    font-size: 13px;
    color: var(--default);
    margin: 0 30px 0 82px;

    & > span {
      color: var(--main);
    }
  }
  }
  .tweet-input-wrapper {
    height: 50%;
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
  background-color: var(--dark-0);
  width: 600px;
  height: 300px;
  border-radius: 14px;
  border: 1px solid var(--gray1);
  display: grid;
  grid-template-rows: 56px 1fr 56px;
  position: relative;
  z-index: 2;
`;

const StyledReplyModalContainer = styled.div`
  background-color: var(--dark-0);
  width: 600px;
  height: 450px;
  border-radius: 14px;
  border: 1px solid var(--gray1);
  display: grid;
  grid-template-rows: 56px 1fr 56px;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    width: 2px;
    height: 86px;
    background-color: var(--gray2);
    position: absolute;
    top: 139px;
    left: 48px;
    z-index: 99;
  }
`;

const StyledEditModalContainer = styled.div`
  background-color: var(--dark-0);
  width: 634px;
  height: 610px;
  border-radius: 14px;
  border: 1px solid var(--gray1);
  display: grid;
  grid-template-rows: 56px 200px 1fr;
  position: relative;
  z-index: 2;
`;

const StyledEditCover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => (image ? image : '')});
  background-size: cover;
  position: relative;
  .add-cover-button {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    & > path {
      fill: var(--dark-0);
    }
  }
  .delete-cover-button {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    & > path {
      fill: var(--dark-0);
    }
  }
`;

const StyledEditAvatar = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid var(--dark-0);
  background-image: url(${({ image }) => (image ? image : '')});
  background-size: cover;
  position: absolute;
  top: 181px;
  left: 16px;
  .add-avatar-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & > path {
      fill: var(--dark-0);
    }
  }
`;

const StyledPersonalInfoForm = styled.form`
  margin: 80px 16px 40px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .edit-name-count, .edit-intro-count {
    color: var(--dark-80);
    font-size: 12px;
    text-align: end;
    margin: 8px 0;
  }
`


const TweetModal = ({ placeholder, handleOpenTweetModal, currentMember }) => {
  const { tweetModalValue, handleClickTweetModal, setTweetModalValue } = useGetTweets();
  return (
    <>
      <StyledTweetModalContainer>
        <StyledModalHeader>
          <OutlinedClose
            className="close-button"
            onClick={() => {
            handleOpenTweetModal()
            setTweetModalValue('')
            }}
          />
        </StyledModalHeader>
        <StyledModalBody>
          <TweetModalInput
            placeholder={placeholder}
            currentMember={currentMember}
          />
        </StyledModalBody>
        <StyledModalFooter>
          {tweetModalValue.trim().length === 0 && <p>內容不可空白</p>}
          {tweetModalValue.length > 140 && <p>字數不可超過140字</p>}
          <InputButton
            onClick={() => {
              handleClickTweetModal();
            }}
          >
            推文
          </InputButton>
        </StyledModalFooter>
      </StyledTweetModalContainer>
    </>
  );
};

const ReplyModal = ({ selectedReplyItem, handleOpenReplyModal, currentMember }) => {
  const {replyInputValue, handleClickReplyInput, setReplyInputValue} = useGetSelectedTweet()
  const navigate = useNavigate()

  return (
    <>
      <StyledReplyModalContainer>
        <StyledModalHeader>
          <OutlinedClose
            className="close-button"
            onClick={() => {
              handleOpenReplyModal()
              navigate(-1)
              setReplyInputValue('')
            }}
          />
        </StyledModalHeader>
        <StyledModalBody>
          <div className="tweet-item-wrapper">
            <TweetItemInReply selectedReplyItem={selectedReplyItem} />
            <p>
              回覆給<span>@{selectedReplyItem.User.account}</span>
            </p>
          </div>
            <div className="tweet-input-wrapper">  
            <TweetReplyInput
            placeholder={'推你的回覆'}
            currentMember={currentMember}/>
            </div>   
        </StyledModalBody>
        <StyledModalFooter>
          {replyInputValue.trim().length > 140 && <p>字數不可超過140字</p>}
          {replyInputValue.trim().length === 0 && <p>內容不可空白</p>}
          <InputButton 
          onClick={() => {
            handleClickReplyInput()
            }}>回覆</InputButton>
        </StyledModalFooter>
      </StyledReplyModalContainer>
    </>
  );
};

const EditModal = () => {
  const { currentMember } = useAuth()
  const [editNameValue, setEditNameValue] = useState(currentMember.name)
  const [editIntroValue, setEditIntroValue] = useState(currentMember.introduction)

  return (
    <>
      <StyledEditModalContainer>
        <StyledModalHeader>
          <OutlinedClose className="close-button" />
          <h5>編輯個人資料</h5>
          <InputButton className="save-button">儲存</InputButton>
        </StyledModalHeader>
        <StyledModalBody>
          <StyledEditCover
            image={currentMember.cover}
          >
            <OutlinedAddPhoto className="add-cover-button" />
            <OutlinedClose className="delete-cover-button" />
          </StyledEditCover>
        </StyledModalBody>
        <StyledModalBody>
          <StyledPersonalInfoForm>
          <AuthInput label='名稱' value={editNameValue}/>
          <p className="edit-name-count">{editNameValue.length}/50</p>
          <TextAreaInput label='自我介紹' value={editIntroValue}/>
          <p className="edit-intro-count">{editIntroValue.length}/160</p>
          </StyledPersonalInfoForm>
        </StyledModalBody>
        <StyledEditAvatar
          image={currentMember.avatar}
        >
          <OutlinedAddPhoto className="add-avatar-button" />
        </StyledEditAvatar>
      </StyledEditModalContainer>
    </>
  );
};

export { TweetModal, ReplyModal, EditModal };