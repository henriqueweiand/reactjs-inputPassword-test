import styled from 'styled-components';
import { colors } from '~/styles';

export const Bar = styled.div`
  background: #FFF;
  border: 1px solid ${colors.default};
  border-radius: 10px;
  height: 9px;
  width: 100%
  margin-right: 5px;
  background: ${(props) => {
    switch (props.status) {
      case 'success':
        return colors.seccess;

      case 'warning':
        return colors.warning;

      case 'danger':
        return colors.danger;

      default:
        return colors.default;
    }
  }}

  :last-child {
    margin-right: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;
