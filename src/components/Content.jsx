import styled from 'styled-components';

// Styled-Components를 사용하여 스타일 정의
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: #d7fa00; /* 태그 색상 */
  border: 1px solid #d7fa00;
  padding: 4px 5px;
  border-radius: 3px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 12px;
  color: rgb(160, 160, 160); /* 회색 */
`;

export default function Content({ content }) {
  return (
    <ContentContainer>
      <Image src={content.img} alt={content.title} />
      <Tag>모집중</Tag>
      <Title>{content.title}</Title>
      <Description>{content.subtitle}</Description>
    </ContentContainer>
  );
}
