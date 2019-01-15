import styled from 'styled-components';
import { colors } from '~/styles';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  ::before {
    content: "• ";
    color: ${(props) => {
    switch (props.valid) {
      case true:
        return colors.seccess;
      case false:
        return colors.danger;
      default:
        return '';
    }
  }};
  }
`;
