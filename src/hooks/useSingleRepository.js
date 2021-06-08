import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useSingleRepository = (id) => {

  const { data, ...result } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  });

  return { repository: data ? data.repository : undefined, ...result };
};

export default useSingleRepository;