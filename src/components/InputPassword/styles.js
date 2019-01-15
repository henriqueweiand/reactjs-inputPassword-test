import styled from 'styled-components';
import { colors } from '~/styles';

export const Input = styled.input`
  background: #FFF;
  padding: 10px;
  border: ${(props) => {
    switch (props.status) {
      case 'success':
        return `5px solid ${colors.seccess}`;

      case 'warning':
        return `5px solid ${colors.warning}`;

      case 'danger':
        return `5px solid ${colors.danger}`;

      default:
        return `5px solid ${colors.default}`;
    }
  }}
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  padding-bottom: 5px
`;
