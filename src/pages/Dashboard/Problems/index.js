import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import api from '~/services/api';
import Background from '~/components/Background';
import Problem from './Problem';

import * as S from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  const {
    params: { id },
  } = useRoute();

  useEffect(() => {
    const loadProblems = async () => {
      const { data } = await api.get(`problems/${id}`);

      setProblems(data.delivery_problems);
    };

    loadProblems();
  }, [id]);

  return (
    <Background>
      <S.Title>Encomenda {`00${id}`.slice(-2)}</S.Title>

      <S.List
        data={problems}
        keyExtractor={p => String(p.id)}
        renderItem={({ item }) => <Problem problem={item} />}
      />
    </Background>
  );
}
