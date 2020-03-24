import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <S.Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <S.Text>{children}</S.Text>
      )}
    </S.Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
