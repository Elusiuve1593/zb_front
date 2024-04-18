import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  gap: 64px;
  padding-left: 64px;
  padding-right: 32px;
  padding-block: 32px;
`;

export const FormContainer = styled.div`
  width: 428px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 115px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes['2xl']};
  line-height: 130%;
`;

export const SubTitle = styled.p`
  margin-bottom: 36px;
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.thin};
  line-height: 145%;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: ${props => props.theme.colors.accentColor.orange};
  color: ${props => props.theme.colors.text.primary};
  outline: none;
  border: none;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 135%;
  cursor: pointer;
  transition: background-color 0.3s ease-out, border 0.3s ease-out;
  &:hover {
    background-color: #ff9d19;
  }
  &:focus-visible {
    border: 1px solid ${props => props.theme.colors.text.primary};
    background-color: ${props => props.theme.colors.accentColor.default};
  }
  &:active {
    background-color: #b00a2b;
  }
  &:disabled {
    background-color: #b29f7e;
    color: ${props => props.theme.colors.text.tertiary};
  }
`;


export const Form = styled.form`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-block: 8px;
  padding-left: 16px;
  color: #000;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 130%;
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: inherit;
  outline: none;
  transition: border 0.3s ease-out;
`;

export const ErrorMessageContainer = styled.div<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.$hasError ? 'space-between' : 'flex-end')};
  margin-top: 4px;
  margin-bottom: 28px;
  padding-inline: 16px;
`;

export const ErrorMessageInput = styled.p`
  margin-top: 4px;
  margin-bottom: 20px;
  padding-left: 16px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 130%;
  color: #fd2d23;
`;

export const ErrorMessage = styled.p`
  color: #fd2d23;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 130%;
`;

export const NavigationLink = styled(Link)`
  color: ${props => props.theme.colors.border.active};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 130%;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${props => props.theme.colors.accentColor.default};
  }
  &:active {
    color: #c41e3f;
  }
`;

export const RegisterLink = styled(Link)`
  color: ${props => props.theme.colors.border.active};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 115%;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${props => props.theme.colors.accentColor.default};
  }
  &:active {
    color: #c41e3f;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
  & > p {
    color: ${props => props.theme.colors.text.secondary};
    text-align: center;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.thin};
    line-height: 130%;
  }
`;

export const ImageContainer = styled.div`
  flex: 1 0 0;
  border-radius: ${props => props.theme.borderRadius.superLarge};
  overflow: hidden;
  object-fit: contain;

  & > picture {
    height: auto;
  }
`;

export const InputContainer = styled.div<{
    hasError: boolean;
    isLast: boolean | undefined;
  }>`
    position: relative;
    width: 100%;
    margin-bottom: ${props => (props.hasError ? '0' : '20px')};
    ${props =>
      props.isLast &&
      css`
        margin-bottom: 0;
      `}
  
    & div {
      position: absolute;
      display: inline-flex;
      gap: 4px;
      left: 16px;
      top: ${props => (props.hasError ? '0' : '50%')};
      transform: translateY(-50%);
      padding-inline: ${props => (props.hasError ? '4px' : '0')};
      background-color: ${props => (props.hasError ? '#f2f2f2' : 'transparent')};
      color: ${props => (props.hasError ? '#FD2D23' : ' #a2a0a2')};
      font-size: ${props => (props.hasError ? '16px' : '18px')};
      font-weight: 300;
      line-height: 130%;
      cursor: text;
      -webkit-transition: top 0.3s ease-out, left 0.3s ease-out,
        font-size 0.3s ease-out, color 0.3s ease-out,
        background-color 0.3s ease-out;
      transition: top 0.3s ease-out, left 0.3s ease-out, font-size 0.3s ease-out,
        color 0.3s ease-out, background-color 0.3s ease-out;
    }
  
    & div > svg {
      display: ${props => (props.hasError ? 'block' : 'none')};
      stroke: ${props => (props.hasError ? '#fd2d23' : 'none')};
    }
  
    & input:focus-visible {
      border: ${props =>
        props.hasError ? '1px solid #FD2D23' : '1px solid #808080'};
    }
  
    & > input:focus + div,
    & > input:not(:placeholder-shown):not(:focus) + div {
      top: 0;
      left: 16px;
      font-size: 16px;
      padding-inline: 4px;
      background-color: ${(props) => props.theme.colors.surface.primary};
      color: ${props => (props.hasError ? '#FD2D23' : ' #808080')};
    }
  
    & input {
      border: ${props =>
        props.hasError ? '1px solid #FD2D23' : '1px solid #393939'};
    }
  `;