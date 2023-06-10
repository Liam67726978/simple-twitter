import styled from 'styled-components'

// 顏色變量
const dividerColor = '#E6ECF0'
const fontDefaultColor = '#657786'

// Container
const StyledContainer = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 0;

  color: ${fontDefaultColor};
  border-bottom: solid 1px ${dividerColor};
`

// Item
const Item = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 15px;
  width: 130px;
  height: 52px;
  z-index: 999;

  &:hover {
    border-bottom: 2px solid var(--main);
    color: var(--main);
  }
`

// 根據條件返回相應的內容
function ReturnItems({ mode }) {
  if (mode === 'follower') {
    // 如果 mode 為 follower，返回 追蹤者Tab
    return (
      <>
        <Item className='col-4'>追蹤者</Item>
        <Item className='col-4'>正在追蹤</Item>
        <Item className='col-4'></Item>
      </>
    )
  } else {
    // 如果 mode 為 follower，返回 推文、回覆、內容Tab
    return (
      <>
        <Item className='col-4'>推文</Item>
        <Item className='col-4'>回覆</Item>
        <Item className='col-4'>喜歡的內容</Item>
      </>
    )
  }
}

// 如果 mode 為 follower，返回 追蹤者Tab
export default function Tab({ mode }) {
  return (
    <>
      <StyledContainer className='container-fluid'>
        <div className='d-flex'>
          <ReturnItems mode={mode} />
        </div>
      </StyledContainer>
    </>
  )
}
