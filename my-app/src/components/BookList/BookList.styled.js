import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  width: 250px;
  height: 328px;
`;
export const BookItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h2`
  font-weight: 800;
  font-size: 18px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;
export const Price = styled.p`
  font-weight: 800;
`;
export const Btn = styled(Link)`
  padding: 6px 10px;
  background: center/220%
    linear-gradient(100deg, #1b9aaa 0% 50%, #f8ffe5 50% 100%);
  color: #f8ffe5;
  background-position-x: 0%;
  box-shadow: 0 0 0 2px #1b9aaa inset;
  border-radius: 6px;
  transition: background-position-x 150ms, transform 150ms;
  &:focus,
  &:hover {
    background-position-x: 100%;
    color: #1b9aaa;
  }
`;
export const Input = styled.input`
  width: 30%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  width: 20%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 16px;
  appearance: none;

  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  cursor: pointer;
`;
