import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './styles';

export default function Problem({ problem }) {
  const [canOpen, setCanOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <S.Container disabled={!canOpen} onPress={() => setOpen(!open)}>
      <S.Wrapper>
        <S.Text
          open={open}
          onTextLayout={({ nativeEvent: { lines } }) =>
            lines.length > 1 && setCanOpen(true)
          }
        >
          {problem.description}
        </S.Text>

        <S.Data open={open}>
          {format(parseISO(problem.created_at), 'dd/MM/yyyy')}
        </S.Data>
      </S.Wrapper>

      {canOpen && (
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#999"
        />
      )}
    </S.Container>
  );
}

Problem.propTypes = {
  problem: PropTypes.instanceOf(Object).isRequired,
};
