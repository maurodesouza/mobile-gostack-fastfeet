import React from 'react';
import { View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';
import * as S from './styles';

export default function DeliveryDetails() {
  const { navigate } = useNavigation();
  const {
    params: {
      delivery,
      delivery: { recipient },
    },
  } = useRoute();

  const addressFormatted = `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state} ${recipient.zip_code}`;

  return (
    <Background>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <Icon name="truck" size={20} color="#7D40E7" />
            <S.Title>Informações da entrega</S.Title>
          </S.Header>

          <S.Strong>Destinatário</S.Strong>
          <S.Text>{recipient.name}</S.Text>

          <S.Strong>Endereço da entrega</S.Strong>
          <S.Text>{addressFormatted}</S.Text>

          <S.Strong>Produto</S.Strong>
          <S.Text>{delivery.product}</S.Text>
        </S.Wrapper>

        <S.Wrapper>
          <S.Header>
            <Icon name="calendar" size={20} color="#7D40E7" />
            <S.Title>Situação da entrega</S.Title>
          </S.Header>

          <S.Strong>Status</S.Strong>
          <S.Text capitalize>{delivery.status}</S.Text>

          <S.Dates>
            <View>
              <S.Strong>Data de retirada</S.Strong>
              <S.Text>
                {delivery.start_date
                  ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
                  : '- - / - - / - -'}
              </S.Text>
            </View>

            <View>
              <S.Strong>Data de entrega</S.Strong>
              <S.Text>
                {delivery.end_date
                  ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
                  : '- - / - - / - -'}
              </S.Text>
            </View>
          </S.Dates>
        </S.Wrapper>

        {!delivery.end_date && (
          <S.MenuActions>
            <S.Action>
              <Icon name="close-circle-outline" size={20} color="#E74040" />
              <S.ActionText>Informar{'\n'}Problema</S.ActionText>
            </S.Action>

            <S.Action
              border
              haveProblem={!delivery.have_problem}
              onPress={() => navigate('Problems', { id: delivery.id })}
            >
              <Icon name="information-outline" size={20} color="#E7BA40" />
              <S.ActionText>Visualizar{'\n'}Problemas</S.ActionText>
            </S.Action>

            <S.Action>
              <Icon name="check-circle-outline" size={20} color="#7D40E7" />
              <S.ActionText>
                {delivery.start_date ? 'Confirmar' : 'Retirar'}
                {'\n'}Entrega
              </S.ActionText>
            </S.Action>
          </S.MenuActions>
        )}
      </S.Container>
    </Background>
  );
}
