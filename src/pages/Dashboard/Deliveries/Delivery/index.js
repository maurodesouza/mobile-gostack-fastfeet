import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from 'react-native-step-indicator';

import * as S from './styles';

export default function Delivery({ delivery }) {
  const labels = [`Aguardando \n retirada`, 'Retirada', 'Entregue'];

  const currentPosition = {
    pendente: 1,
    retirada: 2,
    entregue: 3,
  };

  return (
    <S.Container>
      <S.Header>
        <Icon name="local-shipping" size={20} color="#7D40E7" />
        <S.Title>Encomenda {delivery.idFormatted}</S.Title>
      </S.Header>

      <StepIndicator
        stepCount={3}
        renderStepIndicator={null}
        customStyles={S.customStyles}
        currentPosition={currentPosition[delivery.status]}
        labels={labels}
      />

      <S.Info>
        <S.Wrapper>
          <S.Text>Data</S.Text>
          <S.Strong>
            {format(parseISO(delivery.createdAt), 'dd/MM/yyyy')}
          </S.Strong>
        </S.Wrapper>

        <S.Wrapper>
          <S.Text>Cidade</S.Text>
          <S.Strong>{delivery.recipient.city}</S.Strong>
        </S.Wrapper>

        <S.Wrapper>
          <S.Text> </S.Text>
          <S.Link>Ver detalhes</S.Link>
        </S.Wrapper>
      </S.Info>
    </S.Container>
  );
}

Delivery.propTypes = {
  delivery: PropTypes.instanceOf(Object).isRequired,
};
