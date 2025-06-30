import styled from "styled-components";
import tags from "./tags.json";

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  margin-right: 24px;
`;
const TagContainer = styled.div`
  display: flex;
  margin: 24px 0 0 0;
  gap: 24px;
  align-items: center;
`;
const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: backgroud-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;
const Tags = () => {
  return (
    <>
      <TagContainer>
        <TagTitulo >Busque por tags:</TagTitulo>
        {tags.map((tags) => (
          <Tag key={tags.id}>{tags.titulo}</Tag>
        ))}
      </TagContainer>
    </>
  );
};

export default Tags;
