import styled from "styled-components";

const DefaultButton = styled.button`
  width: 140px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  color: #fbfbfb;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
  box-shadow: -1px 6px 10px rgba(0, 0, 0, 0.15);

  img{
    margin-right: 10px;
  }

  &:disabled {
    background: #808080;

  &:hover {
      background: #808080;
    }
  }

  &:focus {
    outline: none;
  }
  
`

const Green = styled(DefaultButton)`
  &:enabled {
    background: #008080;

  &:hover {
      background: #00cccc;
    }
  }
`

const Purple = styled(DefaultButton)`
  &:enabled {
  background: #800080;

  &:hover {
    background: #cb6fcb;
  }
}
`

 const Variant = {
  Green, 
  Purple
}

export { Variant };