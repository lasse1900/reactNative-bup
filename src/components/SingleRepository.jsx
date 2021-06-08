import React from 'react';
import { useParams } from 'react-router-dom';
import { FlatList, Text } from 'react-native';

import RepositoryItem from "./RepositoryItem";
import useSingleRepository from '../hooks/useSingleRepository';

const RepositoryInfo = ({ repository }) => {
  return (
    <RepositoryItem item={repository} isSingleView={true} />
  );
};

const ReviewItem = ({ review }) => {
  return (
    <Text>{review.num}</Text>
  );
};

const SingleRepository = () => {
  const id = useParams().id;
  const { repository } = useSingleRepository(id);

  const singleRepo = repository
    ? repository
    : [];

  return (
    <FlatList
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={singleRepo} />}
    />
  );
};

export default SingleRepository;