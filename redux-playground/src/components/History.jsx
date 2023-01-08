import { useStoreActions, useStoreState } from 'easy-peasy';

const History = () => {
  const { items } = useStoreState((state) => state.history);
  const { clearHistory } = useStoreActions((actions) => actions.history);

  return (
    <div>
      <h2>
        Histories: <button onClick={clearHistory}>Clear History</button>{' '}
      </h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.action} - {item.count} -{item.time.toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
